// app/(tabs)/index.tsx
import { useEffect } from 'react';
import { useRouter, useRootNavigationState } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function RedirectToProfile() {
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    // Only navigate when navigation is mounted and ready
    if (navigationState?.key) {
      router.replace('/calendar');
    }
  }, [navigationState?.key]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
});