// components/profile/ProfileInfo.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

type User = {
  username: string;
  department: string;
  major: string;
  yearofstudy: string;
};

export default function ProfileInfo() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const userStr = await AsyncStorage.getItem('currentUser');
      if (userStr) {
        setUser(JSON.parse(userStr));
      } else {
        router.replace('/loginRoute/login');
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const getYearSuffix = (year: number): string => {
    if (year === 1) return 'st';
    if (year === 2) return 'nd';
    if (year === 3) return 'rd';
    return 'th';
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (!user) {
    return null;
  }

  const yearNumber = parseInt(user.yearofstudy, 10);

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.subtext}>Department: {user.department}</Text>
      <Text style={styles.subtext}>Major: {user.major}</Text>
      <Text style={styles.subtext}>
        Year of study: {user.yearofstudy}
        {getYearSuffix(yearNumber)} year of study
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  subtext: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#bbb',
  },
});