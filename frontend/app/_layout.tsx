// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import 'react-native-reanimated';

import NavigationBar from '@/components/ui/NavigationBar';
import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {Platform.OS === 'web' && <NavigationBar />}
      <Stack initialRouteName="loginRoute/login">
        {/* 
          ^^^ This ensures that when the app starts, 
          it loads the `app/loginRoute/login.tsx` screen first 
        */}
        <Stack.Screen
          name="loginRoute/login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        {/* New Profile Route */}
        <Stack.Screen
          name="profileRoute/profile"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="+not-found"
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
