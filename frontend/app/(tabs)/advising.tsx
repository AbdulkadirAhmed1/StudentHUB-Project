import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, Platform, StyleSheet, SafeAreaView } from "react-native";
import { advisingResponses } from "../../data/advisingData"; // Ensure correct import

export default function AdvisingScreen() {
  //console.log("✅ AdvisingScreen is rendering..."); // Debug log

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  function getResponse(userInput: string) {
    const match = advisingResponses.find((resp) => userInput.toLowerCase().includes(resp.question.toLowerCase()));
    return match ? match.answer : "I'm not sure about that. Please ask a different question.";
  }

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const botResponse = { role: "assistant", content: getResponse(input) };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");

    console.log("📩 User message:", userMessage);
    console.log("🤖 Bot response:", botResponse);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <Text style={styles.header}>Advising Chatbot</Text>

        <ScrollView style={styles.chatContainer} contentContainerStyle={styles.chatContent}>
          {messages.map((msg, index) => (
            <View key={index} style={msg.role === "user" ? styles.userMessage : styles.botMessage}>
              <Text style={styles.messageText}>{msg.content}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Adjusted Input Container */}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white", paddingBottom: 20 },
  container: { flex: 1, paddingHorizontal: 10, justifyContent: "space-between" },
  header: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginVertical: 5 },
  chatContainer: { flex: 1, width: "100%" },
  chatContent: { paddingBottom: 100 }, // More space for input
  userMessage: { alignSelf: "flex-end", backgroundColor: "#ddd", padding: 8, marginVertical: 4, borderRadius: 8, maxWidth: "75%" },
  botMessage: { alignSelf: "flex-start", backgroundColor: "#ADD8E6", padding: 8, marginVertical: 4, borderRadius: 8, maxWidth: "75%" },
  messageText: { fontSize: 14 },

  // Adjusted Input Bar Position
  inputContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    borderTopWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    backgroundColor: "white",
    position: "absolute",
    bottom: 40, // Move up by 40px
    left: 0,
    right: 0,
  },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8, fontSize: 14, marginRight: 10 },
});
