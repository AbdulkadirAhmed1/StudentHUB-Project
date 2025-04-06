// app>loginRoute>login.tsx (dont remove this line)
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { BACKEND_URL } from '../../constants/api';
import { types } from '@babel/core';

export default function LoginRegisterScreen() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // Form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Additional registration fields
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [program, setProgram] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      const savedUser = await AsyncStorage.getItem('currentUser');
      if (savedUser) {
        router.push('/(tabs)/calendar');
      }
    };
    loadUser();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('currentUser', JSON.stringify(data.user));
        router.push('/(tabs)/calendar');
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    }
  };

  const handleRegister = async () => {
    if (!username || !password || !yearOfStudy || !program) {
      alert('All fields are required.');
      return;
    }
    
    if (isNaN(Number(yearOfStudy))) {
      alert('Please enter a valid number for Year of Study');
      return;
    }

    if (Number(yearOfStudy) <= 0 || Number(yearOfStudy) > 10) {
      alert('Year of Study range must be 0-10');
      return;
    }

    if (password.length < 5 || password.length > 15) {
      alert('password range must be length 5-15');
      return;
    }

    if (username.length < 6 || username.length > 10) {
      alert('username range must be length 6-10');
      return;
    }

    if (program.length < 6 || program.length > 10) {
      alert('program range must be length 6-10');
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
          program,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('currentUser', JSON.stringify(data.user));
        router.push('/(tabs)/calendar');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    }
  };

  if (mode === 'register') {
    return (
      <LinearGradient
        // You can choose any colors you like for your background gradient
        colors={['#2C2C2C', '#000000']}
        style={styles.outerContainer}
      >
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" style={styles.iconStyle} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Username"
              placeholderTextColor="#bbb"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" style={styles.iconStyle} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Password"
              placeholderTextColor="#bbb"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="calendar-outline" style={styles.iconStyle} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Year of Study"
              placeholderTextColor="#bbb"
              value={yearOfStudy}
              onChangeText={setYearOfStudy}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="school-outline" style={styles.iconStyle} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Program"
              placeholderTextColor="#bbb"
              value={program}
              onChangeText={setProgram}
            />
          </View>

          <View style={{ height: 20 }} />

          {/* Gradient Register Button */}
          <TouchableOpacity onPress={handleRegister} style={styles.gradientButtonContainer}>
            <LinearGradient
              colors={['#FFD700', '#FFEC8B']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Register</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => setMode('login')}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  // Default: Login view
  return (
    <LinearGradient
      colors={['#2C2C2C', '#000000']}
      style={styles.outerContainer}
    >
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" style={styles.iconStyle} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Username"
            placeholderTextColor="#bbb"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <Ionicons name="lock-closed-outline" style={styles.iconStyle} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            placeholderTextColor="#bbb"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.forgotContainer}
          onPress={() => { /* Forgot password action */ }}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />

        {/* Gradient Login Button */}
        <TouchableOpacity onPress={handleLogin} style={styles.gradientButtonContainer}>
          <LinearGradient
            colors={['#FFD700', '#FFEC8B']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{ height: 5 }} />

        <TouchableOpacity style={styles.signUpButton} onPress={() => setMode('register')}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

// Colors
const LIGHT_TEXT = '#FFFFFF';
const SUBTLE_TEXT = '#BBBBBB';
const SIGNUP_COLOR = '#FFFFFF';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    // Remove the old backgroundColor here since we use a gradient
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
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
  },
  iconStyle: {
    fontSize: 20,
    color: '#bbb',
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: LIGHT_TEXT,
    fontSize: 15,
  },
  gradientButtonContainer: {
    width: '100%',
  },
  button: {
    width: '100%',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: LIGHT_TEXT,
    fontWeight: 'bold',
    fontSize: 15,
  },
  cancelButton: {
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: SUBTLE_TEXT,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    width: '100%',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  signUpButtonText: {
    color: SIGNUP_COLOR,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
