// frontend/app/loginRoute/login.tsx
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginForm from '../../components/login/LoginForm';
import RegisterForm from '../../components/login/RegisterForm';
import { useAuth } from '../../components/login/useAuth';
import LoginHeader from '../../components/login/LoginHeader';

export default function LoginRegisterScreen() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // custom auth hook for login/register logic
  const {
    username,
    password,
    yearOfStudy,
    department,
    departments,
    major,
    setUsername,
    setPassword,
    setYearOfStudy,
    setDepartment,
    setMajor,
    handleLogin,
    handleRegister,
  } = useAuth(router);

  // auto-login if user is saved
  useEffect(() => {
    const loadUser = async () => {
      const savedUser = await AsyncStorage.getItem('currentUser');
      if (savedUser) {
        router.push('/(tabs)/calendar');
      }
    };
    loadUser();
  }, []);

  return (
    <LinearGradient colors={['#2C2C2C', '#000000']} style={styles.outerContainer}>
      {/* Header — currently logo only, no text */}
      <LoginHeader mode={mode} />

      {mode === 'login' ? (
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          submitLogin={handleLogin}
          switchToRegister={() => setMode('register')}
        />
      ) : (
        <RegisterForm
          username={username}
          password={password}
          yearOfStudy={yearOfStudy}
          department={department}
          departments={departments}
          major={major}
          setUsername={setUsername}
          setPassword={setPassword}
          setYearOfStudy={setYearOfStudy}
          setDepartment={setDepartment}
          setMajor={setMajor}
          submitRegister={handleRegister}
          switchToLogin={() => setMode('login')}
        />
      )}
    </LinearGradient>
  );
}

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
    marginBottom: 20,
  },
});