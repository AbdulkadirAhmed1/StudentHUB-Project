import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, Platform, StyleSheet, SafeAreaView } from "react-native";

const API_URL = 'http://localhost:3000/api/chat/messages';

export default function GroupChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { senderId: string; senderName: string; senderYear: string; senderProgram: string; content: string; timestamp: string }[]
  >([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched messages:", data);
        setMessages(data);
      })
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessage = {
      senderId: "USER_ID_HERE", // Replace with actual user ID
      senderName: "John Doe",   // Replace with actual user details
      senderYear: "3rd Year",
      senderProgram: "Computer Science",
      content: input,
      timestamp: new Date().toISOString(),
    };
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });

      if (response.ok) {
        setMessages([...messages, newMessage]);
      } else {
        console.error("Error sending message:", await response.text());
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  }


  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <Text style={styles.header}>Group Chat</Text>

        <ScrollView style={styles.chatContainer} contentContainerStyle={styles.chatContent}>
          {messages.map((msg, index) => (
            <View key={index} style={msg.senderId === "USER_ID_HERE" ? styles.userMessage : styles.botMessage}>
              <Text style={styles.messageText}>{msg.senderName} ({msg.senderYear}, {msg.senderProgram}): {msg.content}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
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
  chatContent: { paddingBottom: 100 },
  userMessage: { alignSelf: "flex-end", backgroundColor: "#ddd", padding: 8, marginVertical: 4, borderRadius: 8, maxWidth: "75%" },
  botMessage: { alignSelf: "flex-start", backgroundColor: "#ADD8E6", padding: 8, marginVertical: 4, borderRadius: 8, maxWidth: "75%" },
  messageText: { fontSize: 14 },
  inputContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    borderTopWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    backgroundColor: "white",
    position: "absolute",
    bottom: 40, 
    left: 0,
    right: 0,
  },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8, fontSize: 14, marginRight: 10 },
});