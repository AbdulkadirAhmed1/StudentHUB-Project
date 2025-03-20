import { BACKEND_URL } from "@/constants/api";
import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Message {
  id: number;
  senderId: number;
  senderName: string;
  senderYear: string;
  senderProgram: string;
  content: string;
  timestamp: string;
}

export default function GroupChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("Guest");
  const inputRef = useRef<TextInput>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    fetchMessages();

    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    });

    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/chat/messages`);
      const data = await response.json();

      console.log(" Received Messages Data:", data);

      setMessages(
        data.map((msg: any) => ({
          id: msg.id,
          senderId: msg.senderid, // Match field name exactly
          senderName: msg.sendername || "Unknown", // Ensure correct field mapping
          senderYear: msg.senderyear || "N/A",
          senderProgram: msg.senderprogram || "N/A",
          content: msg.content,
          timestamp: msg.timestamp,
        }))
      );

      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        senderId: 1,
        senderName: username,
        senderYear: "2nd Year",
        senderProgram: "Computer Science",
        content: message,
        timestamp: new Date().toISOString(),
      };

      console.log("📤 Sending Message:", newMessage);

      try {
        const response = await fetch(`${BACKEND_URL}/api/chat/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMessage),
        });

        if (!response.ok) {
          throw new Error("Failed to save message");
        }

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage("");

        setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
        setTimeout(() => inputRef.current?.focus(), 100);
      } catch (error) {
        console.error("❌ Error sending message:", error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
          keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 0}
        >
          <Text style={styles.header}>Group Chat</Text>
          <ScrollView
            ref={scrollViewRef}
            style={styles.chatContainer}
            contentContainerStyle={styles.chatContent}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          >
            {messages.map((msg, index) => {
              const isCurrentUser = msg.senderName === username;
              const senderDetails = `${msg.senderName} (${msg.senderYear}, ${msg.senderProgram})`;

              return (
                <View key={index} style={isCurrentUser ? styles.userMessage : styles.otherMessage}>
                  <Text style={styles.senderName}>{senderDetails}</Text>
                  <Text style={styles.messageText}>{msg.content}</Text>
                  <Text style={styles.timestamp}>
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </Text>
                </View>
              );
            })}
          </ScrollView>

          <View style={[styles.inputContainer, isKeyboardVisible && styles.inputContainerShift]}>
            <TextInput
              ref={inputRef}
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Type your message..."
              placeholderTextColor="#999"
              returnKeyType="send"
              onFocus={() => setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100)}
            />
            <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white" },
  container: { flex: 1, paddingHorizontal: 10, justifyContent: "space-between" },
  header: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginVertical: 5 },
  chatContainer: { flex: 1, width: "100%" },
  chatContent: { paddingBottom: 150 },

  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    padding: 10,
    marginVertical: 4,
    borderRadius: 8,
    maxWidth: "75%",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#F0F0F0",
    padding: 10,
    marginVertical: 4,
    borderRadius: 8,
    maxWidth: "75%",
  },
  senderName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2, // Small spacing
  },
  messageText: { fontSize: 14, color: "#000" },
  timestamp: { fontSize: 10, color: "gray", alignSelf: "flex-end", marginTop: 4 },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 5,
    backgroundColor: "white",
    width: "95%",
    alignSelf: "center",
    borderRadius: 12,
    position: "absolute",
    bottom: 50,
  },

  inputContainerShift: {
    bottom: Platform.OS === "ios" ? 110 : 50,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 14,
    marginRight: 8,
  },

  sendButton: { padding: 8, backgroundColor: "#007BFF", borderRadius: 12 },
  sendButtonText: { color: "white", fontWeight: "bold", fontSize: 12 },
});