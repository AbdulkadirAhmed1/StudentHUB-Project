import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";

// Replace with your own backend URL
// If you're on a real device, use your server's LAN IP + port
// e.g. "http://192.168.1.123:5001" or "https://studenthub-project.onrender.com"
const BACKEND_URL = "http://192.168.2.149:5001";

export default function AdvisingScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [pdfText, setPdfText] = useState(""); // Will store PDF text from backend

  /**
   * 1. Test the /api/test route to confirm backend connectivity
   */
  async function testConnection() {
    try {
      console.log("Testing backend connectivity...");

      const res = await fetch(`${BACKEND_URL}/api/test`);
      console.log("testConnection fetch status:", res.status);

      if (!res.ok) {
        throw new Error(`Status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Backend test route response:", data);
      alert("Success: " + JSON.stringify(data));
    } catch (err: any) {
      console.error("Test route error:", err);
      alert("Error: " + err.message);
    }
  }

  /**
   * 2. Pick a PDF => Upload => parse => get summary
   */
  async function pickPdfAndUpload() {
    try {
      console.log("Launching DocumentPicker...");

      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true, // ensures iOS gives us a local file path
      });
      console.log("DocumentPicker result:", result);

      if (result.type === "cancel") {
        console.log("User canceled picking a PDF");
        return;
      }

      // Log the selected PDF details
      console.log("Picked PDF URI:", result.uri);
      console.log("Picked PDF name:", result.name);

      // Prepare FormData
      const formData = new FormData();
      formData.append("pdfFile", {
        uri: result.uri,
        type: "application/pdf",
        name: result.name || "myFile.pdf",
      } as any);

      console.log("FormData constructed, sending fetch request to backend...");

      // POST /api/advising/upload-pdf
      const uploadRes = await fetch(`${BACKEND_URL}/api/advising/upload-pdf`, {
        method: "POST",
        body: formData,
      });

      console.log("Upload response status:", uploadRes.status);
      const data = await uploadRes.json();
      console.log("Upload response data:", data);

      if (data.success) {
        // Store pdfText for future Q&A
        console.log("PDF upload success! Storing pdfText for Q&A...");
        setPdfText(data.pdfText);

        // Optionally show the GPT summary in the chat
        const summaryMsg = { role: "assistant", content: data.summary };
        setMessages((prev) => [...prev, summaryMsg]);
      } else {
        console.error("PDF upload failed:", data.error);
        alert("PDF upload failed: " + data.error);
      }
    } catch (err) {
      console.error("Error picking/uploading PDF:", err);
      alert("Error picking/uploading PDF: " + err);
    }
  }

  /**
   * 3. Send user question => call AI => display answer
   */
  async function fetchAiAnswer(question: string, pdf: string): Promise<string> {
    try {
      console.log("fetchAiAnswer called with question:", question);

      const res = await fetch(`${BACKEND_URL}/api/advising/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userQuestion: question,
          pdfText: pdf, // can be "" if user never uploaded a PDF
        }),
      });

      console.log("fetchAiAnswer response status:", res.status);

      if (!res.ok) {
        throw new Error(`Backend responded with status ${res.status}`);
      }

      const data = await res.json();
      console.log("fetchAiAnswer response data:", data);

      if (data.success) {
        return data.answer;
      } else {
        throw new Error(data.error || "No success from AI backend");
      }
    } catch (err) {
      console.error("AI fetch error:", err);
      return "Error contacting AI. Please try again.";
    }
  }

  /**
   * 4. Add user message => get AI response => add bot message
   */
  async function sendMessage() {
    if (!input.trim()) {
      console.log("No input to send.");
      return;
    }

    // Add user message to chat
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Call AI
    const aiReply = await fetchAiAnswer(input, pdfText);

    // Add AI message to chat
    const botMsg = { role: "assistant", content: aiReply };
    setMessages((prev) => [...prev, botMsg]);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Header with "Upload PDF" and "Test Backend" buttons */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Advising Chatbot</Text>
          <Button title="Upload PDF" onPress={pickPdfAndUpload} />
          <Button title="Test Backend" onPress={testConnection} />
        </View>

        {/* Main content: chat scroll + input bar */}
        <View style={styles.contentContainer}>
          {/* Chat messages */}
          <ScrollView style={styles.chatContainer} contentContainerStyle={styles.chatContent}>
            {messages.map((msg, index) => (
              <View
                key={index}
                style={[
                  styles.messageBubble,
                  msg.role === "user" ? styles.userBubble : styles.botBubble,
                ]}
              >
                <Text style={styles.messageText}>{msg.content}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Input bar */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder="Ask a question..."
              placeholderTextColor="#999"
            />
            <Button title="Send" onPress={sendMessage} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  keyboardContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 80,
    backgroundColor: "#f5f5f5",
  },
  chatContainer: {
    flex: 1,
  },
  chatContent: {
    padding: 10,
  },
  messageBubble: {
    marginVertical: 4,
    padding: 8,
    borderRadius: 8,
    maxWidth: "75%",
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#ddd",
  },
  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#ADD8E6",
  },
  messageText: {
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    fontSize: 14,
    marginRight: 10,
  },
});
