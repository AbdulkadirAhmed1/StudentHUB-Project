import { BACKEND_URL } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import io from "socket.io-client";

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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [userYear, setUserYear] = useState<string>("");
  const [userProgram, setUserProgram] = useState<string>("");

  const inputRef = useRef<TextInput>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const socket = useRef(io("https://studenthub-project.onrender.com", { transports: ["websocket"] }));

  useEffect(() => {
    loadUserDetails();
    fetchMessages();

    // Debugging: Log the connection status
    socket.current.on("connect", () => {
      console.log("Connected to Socket.IO server with ID:", socket.current.id);  // Debugging log for successful connection
    });

    // Listen for new messages from the socket
    socket.current.on("new_message", (newMessage: Message) => {
      console.log("Received new message:", newMessage);  // Debugging log for received messages
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Setup keyboard listeners for proper scrolling
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
      socket.current.disconnect(); // Disconnect when component unmounts
    };
  }, []); 

  // Load user details from AsyncStorage to check if the user is logged in
  const loadUserDetails = async () => {
    try {
      const user = await AsyncStorage.getItem("currentUser");
      if (user) {
        const parsedUser = JSON.parse(user);
        setUsername(parsedUser.username);
        setUserYear(parsedUser.yearofstudy);
        setUserProgram(parsedUser.program);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error loading user details", error);
      setIsLoggedIn(false);
    }
  };

  // Fetch all messages from the backend to display in the chat
  const fetchMessages = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/chat/messages`);
      const data = await response.json();
      setMessages(data.map((msg: any) => ({
        id: msg.id,
        senderId: msg.senderid,
        senderName: msg.sendername || "Unknown",
        senderYear: formatYear(msg.senderyear),
        senderProgram: msg.senderprogram || "N/A",
        content: msg.content,
        timestamp: msg.timestamp,
      })));
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const formatYear = (year: string | number): string => {
    const yearNum = Number(year);
    if (isNaN(yearNum)) return `${year} Year`;
    if (yearNum === 1) return "1st Year";
    if (yearNum === 2) return "2nd Year";
    if (yearNum === 3) return "3rd Year";
    return `${yearNum}th Year`;
  };

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        senderId: 1, // Adjust to user ID if necessary
        senderName: username || "Guest", // Set fallback for username if null
        senderYear: userYear || "Unknown", // Fallback for year if empty
        senderProgram: userProgram || "Unknown", // Fallback for program if empty
        content: message,
        timestamp: new Date().toISOString(),
      };

      console.log("Sending message:", newMessage); // Debugging log for the message being sent

      try {
        const response = await fetch(`${BACKEND_URL}/api/chat/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMessage),
        });

        if (response.ok) {
          socket.current.emit("new_message", newMessage); // Emit the message to server
          console.log("Message emitted to socket.io"); // Debugging log for message emitted

          setMessages((prevMessages) => [...prevMessages, newMessage]);
          setMessage("");
          setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
          setTimeout(() => inputRef.current?.focus(), 100);
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("❌ Error sending message:", error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
          <Text style={styles.header}>Group Chat</Text>

          {/* Display login prompt if user is not logged in */}
          {!isLoggedIn ? (
            <View style={styles.loginPromptContainer}>
              <Text style={styles.loginPromptText}>You must be logged in to join the chat. Please log in first.</Text>
            </View>
          ) : (
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
                    <Text style={styles.timestamp}>{new Date(msg.timestamp).toLocaleTimeString()}</Text>
                  </View>
                );
              })}
            </ScrollView>
          )}

          {isLoggedIn && (
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
          )}
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
  userMessage: { alignSelf: "flex-end", backgroundColor: "#DCF8C6", padding: 10, marginVertical: 4, borderRadius: 8, maxWidth: "75%" },
  otherMessage: { alignSelf: "flex-start", backgroundColor: "#F0F0F0", padding: 10, marginVertical: 4, borderRadius: 8, maxWidth: "75%" },
  senderName: { fontSize: 12, fontWeight: "bold", color: "#333", marginBottom: 2 },
  messageText: { fontSize: 14, color: "#000" },
  timestamp: { fontSize: 10, color: "gray", alignSelf: "flex-end", marginTop: 4 },
  inputContainer: { flexDirection: "row", alignItems: "center", borderTopWidth: 1, borderColor: "#ccc", paddingVertical: 5, backgroundColor: "white", width: "95%", alignSelf: "center", borderRadius: 12, position: "absolute", bottom: 50 },
  inputContainerShift: { bottom: Platform.OS === "ios" ? 110 : 50 },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 12, paddingVertical: 6, paddingHorizontal: 10, fontSize: 14, marginRight: 8 },
  sendButton: { padding: 8, backgroundColor: "#007BFF", borderRadius: 12 },
  sendButtonText: { color: "white", fontWeight: "bold", fontSize: 12 },
  loginPromptContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  loginPromptText: { fontSize: 18, color: "#FF0000", textAlign: "center", marginBottom: 20 },
});