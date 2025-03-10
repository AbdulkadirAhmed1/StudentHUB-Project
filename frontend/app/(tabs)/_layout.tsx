import React from "react";
import { Platform } from "react-native";
import { Tabs } from "expo-router";

// 1️⃣ Import SafeAreaView from react-native-safe-area-context
import { SafeAreaView } from "react-native-safe-area-context";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    // 2️⃣ Wrap the <Tabs> inside a <SafeAreaView style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 }} edges={["top", "right", "left"]}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,

          // The tabBarStyle might cause overlap if absolutely positioned.
          // Keep an eye on how it behaves with SafeArea. 
          tabBarStyle: Platform.select({
            web: {
              display: "none",
            },
            ios: {
              position: "absolute",
              bottom: 0,
              backgroundColor: "black",
            },
            default: {
              position: "absolute",
              bottom: 0,
              backgroundColor: "black",
            },
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: "Calendar",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="calendar" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="advising"
          options={{
            title: "Advising",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="person.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="groupchat"
          options={{
            title: "Group Chat",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="message" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="signup"
          options={{
            title: "Login",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="lock.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
