// app/(tabs)/index.tsx
import { useEffect, useState } from 'react';
import { useRouter, useRootNavigationState } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RedirectToProfile() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (navigationState?.key) {
        const userStr = await AsyncStorage.getItem('currentUser');
        if (userStr) {
          router.replace('/calendar');   // logged in → go calendar
        } else {
          router.replace('/loginRoute/login'); // not logged in → go login
        }
        setLoading(false);
      }
    })();
  }, [navigationState?.key]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
});