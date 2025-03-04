// calendar.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = () => {
      if (username === 'admin' && password === 'admin') {
         alert('Login successful');
      } else {
         alert('Login failed');
      }
   };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
          />
      <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },    
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
  },

  input: {
    width: '90%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
  },

  button: {
    backgroundColor: 'black',
    width: '90%',
    padding: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
