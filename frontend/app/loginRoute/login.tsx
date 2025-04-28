// app/loginRoute/login.tsx
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { availableDepartments } from './departments';  // Import available departments
import { Picker } from '@react-native-picker/picker';
import { BACKEND_URL } from '../../constants/api';

export default function LoginRegisterScreen() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // Form fields for both login and register
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Registration additional fields:
  // Year of Study (using a Picker for options 1 to 4)
  const [yearOfStudy, setYearOfStudy] = useState("1");
  // Department from the available list (currently "EECS")
  //const [department, setDepartment] = useState(availableDepartments[0]);
  const [department, setDepartment] = useState<string>('');
  const [departments, setDepartments] = useState<string[]>([]);

  // Major field with default "N/A" (text input)
  const [major, setMajor] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const savedUser = await AsyncStorage.getItem('currentUser');
      if (savedUser) {
        router.push('/(tabs)/calendar');
      }
    };
    loadUser();
  }, []);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/departments`)
    .then(r => r.json())
    .then(data => {
      setDepartments(data.departments);

      if (data.departments.length) {
        setDepartment(data.departments[0]);
      }
    })
    .catch(console.error);
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
    // Check that all registration fields have values
    if (!username || !password || !yearOfStudy || !department || !major) {
      alert('All fields are required.');
      return;
    }
    
    // Validate that yearOfStudy is between 1 and 4.
    const yearNum = Number(yearOfStudy);
    if (isNaN(yearNum)) {
      alert('Please select a valid Year of Study.');
      return;
    }

    if (yearNum < 1 || yearNum > 4) {
      alert('Year of Study must be between 1 and 4 (Undergraduate Only).');
      return;
    }

    if (password.length < 5 || password.length > 15) {
      alert('Password must be between 5 and 15 characters.');
      return;
    }

    if (username.length < 6 || username.length > 10) {
      alert('Username must be between 6 and 10 characters.');
      return;
    }

    // You might later add further constraints for major if needed.
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          yearOfStudy,
          department,
          major,
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
        colors={['#2C2C2C', '#000000']}
        style={styles.outerContainer}
      >
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.card}>
          {/* Username */}
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
          {/* Password */}
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
          {/* Year of Study Picker */}
          <View style={styles.pickerContainer}>
            <Ionicons name="calendar-outline" style={styles.iconStyle} />
            <Picker
              selectedValue={yearOfStudy}
              style={styles.picker}
              dropdownIconColor="#bbb"
              onValueChange={(itemValue) => setYearOfStudy(itemValue)}
            >
              {['1', '2', '3', '4'].map((year) => (
                <Picker.Item key={year} label={year} value={year} />
              ))}
            </Picker>
          </View>
          <Text style={styles.infoText}>* Only undergraduate options available</Text>
          {/* Department Picker */}
          <View style={styles.pickerContainer}>
            <Ionicons name="school-outline" style={styles.iconStyle} />
            <Picker
              selectedValue={department}
              style={styles.picker}
              dropdownIconColor="#bbb"
              onValueChange={(itemValue) => setDepartment(itemValue)}
            >
              {departments.map((dep) => (
                <Picker.Item key={dep} label={dep} value={dep} />
              ))}
            </Picker>
          </View>
          {/* Major Input */}
          <View style={styles.inputContainer}>
            <Ionicons name="book-outline" style={styles.iconStyle} />
            <TextInput
              style={styles.textInput}
              placeholder="Major"
              placeholderTextColor="#bbb"
              value={major}
              onChangeText={setMajor}
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

const LIGHT_TEXT = '#FFFFFF';
const SUBTLE_TEXT = '#BBBBBB';
const SIGNUP_COLOR = '#FFFFFF';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
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
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  picker: {
    flex: 1,
    color: LIGHT_TEXT,
  },
  infoText: {
    fontSize: 12,
    color: SUBTLE_TEXT,
    marginBottom: 15,
    alignSelf: 'flex-start',
    marginLeft: 20,
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
