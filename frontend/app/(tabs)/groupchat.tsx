import { BACKEND_URL } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
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

// 🧠 Helper to format year as "2nd year"
const getOrdinalYear = (year: string | number): string => {
  const y = parseInt(year.toString());
  const suffix = ["th", "st", "nd", "rd"];
  const v = y % 100;
  return y + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
};

interface Message {
  id: number;
  senderid: number;
  sendername: string;
  senderyear: string;
  senderprogram: string;
  content: string;
  timestamp: string;
}

const SUPABASE_URL = "https://ajnrpplvtzdfddybzaas.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqbnJwcGx2dHpkZmRkeWJ6YWFzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzI3ODY2MywiZXhwIjoyMDU4ODU0NjYzfQ.8yKzJNEA3DW-AAwkh95G-emKTJ-rLKFHerh9f64xzHc";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function GroupChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  const inputRef = useRef<TextInput>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    loadUserDetails();
    fetchMessages();

    const channel = supabase
      .channel("realtime:public:supabase_messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "supabase_messages" },
        (payload) => {
          const newMsg = payload.new as Message;
          console.log("📥 Realtime payload received:", newMsg);
          setMessages((prev) => [...prev, newMsg]);
          setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
        }
      )
      .subscribe((status) => {
        console.log("🛠️ Supabase Realtime channel status:", status);
      });

    const showSub = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    });

    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
      supabase.removeChannel(channel);
    };
  }, []);

  const loadUserDetails = async () => {
    try {
      const user = await AsyncStorage.getItem("currentUser");
      if (user) {
        const parsed = JSON.parse(user);
        console.log("✅ Loaded user from storage:", parsed);
        setUsername(parsed.username);
        setCurrentUserId(parsed.id);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.error("Error loading user:", err);
      setIsLoggedIn(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/chat/messages`);
      const data = await res.json();
      console.log("🛠️ Messages fetch response:", data);
      setMessages(data);
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    } catch (err) {
      console.error("❌ Error fetching messages:", err);
    }
  };

  const sendMessage = async () => {
    if (!message.trim() || !username) return;
    const payload = { content: message, username };
    console.log("📤 Sending message payload:", payload);

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const posted = await res.text();
        console.log("📨 Message POST response text:", posted);
        setMessage("");
        setTimeout(() => inputRef.current?.focus(), 100);
      } else {
        console.error("❌ Server error:", await res.text());
      }
    } catch (err) {
      console.error("❌ Network error:", err);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.container}
        >
          <Text style={styles.header}>Group Chat</Text>
          {!isLoggedIn ? (
            <View style={styles.loginPromptContainer}>
              <Text style={styles.loginPromptText}>
                You must be logged in to join the chat. Please log in first.
              </Text>
            </View>
          ) : (
            <ScrollView
              ref={scrollViewRef}
              style={styles.chatContainer}
              contentContainerStyle={styles.chatContent}
            >
              {messages.map((msg, i) => (
                <View
                  key={i}
                  style={
                    msg.senderid === currentUserId
                      ? styles.userMessage
                      : styles.otherMessage
                  }
                >
                  <Text style={styles.senderName}>
                    {`${msg.sendername} (${getOrdinalYear(
                      msg.senderyear
                    )} year, ${msg.senderprogram})`}
                  </Text>
                  <Text style={styles.messageText}>{msg.content}</Text>
                  <Text style={styles.timestamp}>
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </Text>
                </View>
              ))}
            </ScrollView>
          )}
          {isLoggedIn && (
            <View
              style={[
                styles.inputContainer,
                isKeyboardVisible && styles.inputContainerShift,
              ]}
            >
              <TextInput
                ref={inputRef}
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type your message..."
                placeholderTextColor="#999"
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
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
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
    marginBottom: 2,
  },
  messageText: { fontSize: 14, color: "#000" },
  timestamp: {
    fontSize: 10,
    color: "gray",
    alignSelf: "flex-end",
    marginTop: 4,
  },
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
  sendButton: {
    padding: 8,
    backgroundColor: "#007BFF",
    borderRadius: 12,
  },
  sendButtonText: { color: "white", fontWeight: "bold", fontSize: 12 },
  loginPromptContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loginPromptText: {
    fontSize: 18,
    color: "#FF0000",
    textAlign: "center",
    marginBottom: 20,
  },
});