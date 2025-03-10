import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:5000/api/messages';

interface Message {
  text: string;
  sender: string;
  timestamp: string;
}

export default function GroupChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [groupChats, setGroupChats] = useState<string[]>(['General']);
  const [currentGroup, setCurrentGroup] = useState<string>('General');
  const [modalVisible, setModalVisible] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');

  useEffect(() => {
    loadMessages();
  }, [currentGroup]);

  const loadMessages = async () => {
    try {
      const response = await axios.get(`${API_URL}/${currentGroup}`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) return; // Prevent sending empty messages

    const newMessage = { groupName: currentGroup, sender: 'User', text: message };

    try {
      console.log("Sending message:", newMessage);

      const response = await axios.post(API_URL, newMessage);
      console.log("Message sent! Response:", response.data);
      await axios.post(API_URL, newMessage);
      setMessages([...messages, { ...newMessage, timestamp: new Date().toLocaleString() }]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const createGroupChat = () => {
    setModalVisible(true);
  };

  const handleCreateGroup = () => {
    if (newGroupName.trim() && !groupChats.includes(newGroupName)) {
      setGroupChats([...groupChats, newGroupName]);
      setCurrentGroup(newGroupName);
      setNewGroupName('');
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Group Chat: {currentGroup}</Text>

      {/* Group Chat Selector */}
      <FlatList
        data={groupChats}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.groupButton, currentGroup === item && styles.selectedGroup]}
            onPress={() => setCurrentGroup(item)}
          >
            <Text style={styles.groupText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />

      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              <Text style={styles.bold}>{item.sender}:</Text> {item.text}
            </Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Message Input */}
      <TextInput style={styles.input} placeholder="Type your message..." value={message} onChangeText={setMessage} />
      <Button title="Send" onPress={sendMessage} disabled={!message.trim()} />
      <Button title="Create New Group Chat" onPress={createGroupChat} />

      {/* ✅ Modal for Creating Group Chats */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Enter Group Chat Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Group Name"
              value={newGroupName}
              onChangeText={setNewGroupName}
            />
            <Button title="Create" onPress={handleCreateGroup} />
            <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 10 },
  text: { fontSize: 20, marginBottom: 10 },
  messageContainer: { padding: 5, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  messageText: { fontSize: 16 },
  bold: { fontWeight: 'bold' },
  timestamp: { fontSize: 12, color: 'gray' },
  input: { width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 8, marginBottom: 10 },
  groupButton: { padding: 10, backgroundColor: '#ddd', marginHorizontal: 5, borderRadius: 5 },
  selectedGroup: { backgroundColor: '#4CAF50' },
  groupText: { color: 'white' },

  // Modal Styles
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' },
});

