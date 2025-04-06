// app/(tabs)/index.tsx
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<null | { username: string; program: string; yearofstudy: string }>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const userStr = await AsyncStorage.getItem('currentUser');
      if (!userStr) {
        // Not logged in: Redirect to the login screen
        router.replace('/loginRoute/login');
      } else {
        // Logged in: Save user info and proceed
        setUser(JSON.parse(userStr));
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('currentUser');
    router.replace('/loginRoute/login');
  };

  // Helper function to get the correct suffix
  const getYearSuffix = (year: number): string => {
    if (year === 1) return "st";
    if (year === 2) return "nd";
    if (year === 3) return "rd";
    return "th";
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  // Convert the year string to a number for comparison
  const yearNumber = user ? parseInt(user.yearofstudy, 10) : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome, {user?.username}!</Text>
      <Text style={styles.subText}>Degree: {user?.program}</Text>
      <Text style={styles.subText}>
        Year of study: {user?.yearofstudy}
        {getYearSuffix(yearNumber)} year of study
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={() => { /* Reset password function not yet implemented */ }}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const DARK_BG = '#121212';
const ACCENT_COLOR = '#BB86FC'; // A nice purple accent, for example
const LIGHT_TEXT = '#FFFFFF';
const GRAY_TEXT = '#BBBBBB';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: DARK_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: DARK_BG,
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
    color: LIGHT_TEXT,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    marginBottom: 10,
    color: GRAY_TEXT,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: ACCENT_COLOR,
  },
  logoutButton: {
    backgroundColor: '#CF6679', // A reddish/pink color, for instance
  },
  buttonText: {
    color: LIGHT_TEXT,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
