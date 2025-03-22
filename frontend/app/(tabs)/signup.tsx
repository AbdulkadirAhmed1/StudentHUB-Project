// app/(tabs)/LoginScreen.tsx (or wherever you want)

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// Import your backend URL
import { BACKEND_URL } from '../../constants/api';

export default function LoginRegisterScreen() {
  // Which mode are we in: 'login', 'register', or 'loggedIn'?
  const [mode, setMode] = useState<'login' | 'register' | 'loggedIn'>('login');

  // Form fields (shared for login/register)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Additional fields for registration
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [program, setProgram] = useState('');

  // Store the logged-in user's info
  const [currentUser, setCurrentUser] = useState<null | {
    id: number;
    username: string;
    yearofstudy: string;
    program: string;
  }>(null);

  // Handle login
  const handleLogin = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Logged in successfully
        setCurrentUser(data.user);
        setMode('loggedIn');
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    }
  };

  // Handle registration
  const handleRegister = async () => {
    if (!username || !password || !yearOfStudy || !program) {
      alert('All fields are required.');
      return;
    }
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username, 
          password, 
          yearOfStudy, 
          program 
        }),
      });
      const data = await response.json();

      if (response.ok) {
        // Registration success
        setCurrentUser(data.user);
        setMode('loggedIn');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    }
  };

  // Logout
  const handleLogout = () => {
    setCurrentUser(null);
    setUsername('');
    setPassword('');
    setYearOfStudy('');
    setProgram('');
    setMode('login');
  };

  // Conditionally render UI based on `mode`
  if (mode === 'loggedIn' && currentUser) {
    // Logged In View
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, {currentUser.username}!</Text>
        <Text style={styles.info}>
          Year of Study: {currentUser.yearofstudy}
        </Text>
        <Text style={styles.info}>Program: {currentUser.program}</Text>
        
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (mode === 'register') {
    // Register Form
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        
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
        <TextInput
          style={styles.input}
          placeholder="Enter Year of Study"
          value={yearOfStudy}
          onChangeText={setYearOfStudy}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Program"
          value={program}
          onChangeText={setProgram}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Submit Registration</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'gray' }]} 
          onPress={() => setMode('login')}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    // mode === 'login'
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
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

        <TouchableOpacity 
          style={{ marginTop: 10 }}
          onPress={() => setMode('register')}
        >
          <Text style={{ color: 'blue' }}>No account? Register here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#fff' 
  },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'black',
    width: '80%',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
  info: { fontSize: 16, marginVertical: 5 },
});
