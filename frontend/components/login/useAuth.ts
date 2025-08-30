// frontend/components/login/useAuth.ts
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_URL } from '../../constants/api';
import { useRouter } from 'expo-router';

export function useAuth(router: ReturnType<typeof useRouter>) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('placeholder');

  // Department handling
  const [department, setDepartment] = useState('placeholder');
  const [departments, setDepartments] = useState<string[]>([]);

  const [major, setMajor] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch departments on mount
  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/departments`);
        const data = await res.json();

        if (res.ok && data.departments?.length > 0) {
          setDepartments(data.departments);
        } else {
          console.warn('No departments received from backend');
        }
      } catch (err) {
        console.error('Failed to fetch departments:', err);
      }
    };

    loadDepartments();
  }, []);

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
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // --- REGISTER ---
  const handleRegister = async () => {
    if (!username || !password || !yearOfStudy || !department || !major) {
      alert('All fields are required.');
      return;
    }

    const yearNum = Number(yearOfStudy);
    if (yearNum < 1 || yearNum > 4) {
      alert('Year of Study must be between 1 and 4.');
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
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
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