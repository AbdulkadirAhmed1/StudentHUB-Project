// frontend/components/login/LoginForm.tsx
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GradientButton, CancelButton } from './AuthButtons';

interface Props {
  username: string;
  password: string;
  setUsername: (v: string) => void;
  setPassword: (v: string) => void;
  submitLogin: () => void;
  switchToRegister: () => void;
}

export default function LoginForm({
  username,
  password,
  setUsername,
  setPassword,
  submitLogin,
  switchToRegister,
}: Props) {
  return (
    <View style={styles.card}>
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
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#bbb"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <GradientButton label="Login" onPress={submitLogin} />
      <CancelButton label="Sign Up" onPress={switchToRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: '100%', maxWidth: 320, alignItems: 'center' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: '100%',
  },
  icon: { fontSize: 20, color: '#bbb', marginRight: 10 },
  input: { flex: 1, color: '#FFD700', fontSize: 15 },
});