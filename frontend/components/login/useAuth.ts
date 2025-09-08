// frontend/components/login/useAuth.ts
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_URL } from '../../constants/api';
import { useRouter } from 'expo-router';

export function useAuth(
  router: ReturnType<typeof useRouter>,
  setAlertMessage: (msg: string) => void,
  setAlertVisible: (v: boolean) => void
) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('placeholder');
  const [department, setDepartment] = useState('placeholder');
  const [departments, setDepartments] = useState<string[]>([]);
  const [major, setMajor] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/departments`);
        const data = await res.json();

        if (res.ok && data.departments?.length > 0) {
          setDepartments(data.departments);
        }
      } catch (err) {
        console.error('Failed to fetch departments:', err);
      }
    };
    loadDepartments();
  }, []);

  const showAlert = (msg: string) => {
    setAlertMessage(msg);
    setAlertVisible(true);
  };

  // --- LOGIN ---
  const handleLogin = async () => {
    setLoading(true);
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
        showAlert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      showAlert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // --- REGISTER ---
  const handleRegister = async () => {
    if (!username || !password || !yearOfStudy || !department || !major) {
      showAlert('All fields are required.');
      return;
    }

    const yearNum = Number(yearOfStudy);
    if (yearNum < 1 || yearNum > 4) {
      showAlert('Year of Study must be between 1 and 4.');
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, yearOfStudy, department, major }),
      });
      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('currentUser', JSON.stringify(data.user));
        router.push('/(tabs)/calendar');
      } else {
        showAlert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      showAlert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return {
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
    setDepartments,
    setMajor,
    handleLogin,
    handleRegister,
    loading,
  };
}