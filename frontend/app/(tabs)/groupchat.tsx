// app/(tabs)/groupchat.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function GroupChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Group Chat!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF', // White text
  },
});