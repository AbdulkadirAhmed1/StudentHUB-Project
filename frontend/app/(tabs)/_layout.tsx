// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
// If you want to remove the default background, comment out the next import:
// import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // Active/inactive colors
        tabBarActiveTintColor: '#BB86FC',   // Purple accent
        tabBarInactiveTintColor: '#AAAAAA', // Gray
        headerShown: false,

        // If you want haptic feedback on tabs, keep HapticTab:
        tabBarButton: HapticTab,

        // If you have a custom background component, remove or comment it if it conflicts:
        // tabBarBackground: TabBarBackground,

        // Style the tab bar container
        tabBarStyle: {
          position: 'absolute',
          // On iOS, a 'floating' tab bar typically has some spacing around it
          bottom: 20,
          left: 16,
          right: 16,
          height: 60,
          backgroundColor: '#1F1F1F', // Dark background
          borderRadius: 15,
          borderTopWidth: 0,

          // Shadows for a floating look
          elevation: 5, // Android
          shadowColor: '#000', // iOS
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="lock.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="advising"
        options={{
          title: 'Advising',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="groupchat"
        options={{
          title: 'Group Chat',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="message" color={color} />,
        }}
      />
    </Tabs>
  );
}
