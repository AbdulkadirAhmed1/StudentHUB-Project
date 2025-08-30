// frontend/components/register/UsernameInput.tsx
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  username: string;
  setUsername: (v: string) => void;
}

export default function UsernameInput({ username, setUsername }: Props) {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name="person-outline" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        placeholderTextColor="#bbb"
        value={username}
        onChangeText={setUsername}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },
  icon: { fontSize: 20, color: '#bbb', marginRight: 10 },
  input: { flex: 1, color: '#FFD700', fontSize: 15 },
});