// components/profile/ProfileHeader.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function ProfileHeader() {
  const router = useRouter();

  // Shared values for arrow and settings
  const arrowScale = useSharedValue(1);
  const settingsScale = useSharedValue(1);

  const arrowStyle = useAnimatedStyle(() => ({
    transform: [{ scale: arrowScale.value }],
  }));

  const settingsStyle = useAnimatedStyle(() => ({
    transform: [{ scale: settingsScale.value }],
  }));

  const handlePressIn = (scale: any) => {
    scale.value = withSpring(0.85, { damping: 10, stiffness: 200 });
  };

  const handlePressOut = (scale: any) => {
    scale.value = withSpring(1, { damping: 10, stiffness: 200 });
  };

  return (
    <View style={styles.headerBar}>
      {/* Back Arrow */}
      <TouchableWithoutFeedback
        onPressIn={() => handlePressIn(arrowScale)}
        onPressOut={() => handlePressOut(arrowScale)}
        onPress={() => router.back()}
      >
        <Animated.View style={arrowStyle}>
          <Ionicons name="arrow-back" size={18} color="#aaa" />
        </Animated.View>
      </TouchableWithoutFeedback>

      {/* Title */}
      <Text style={styles.headerText}>Profile</Text>

      {/* Settings */}
      <TouchableWithoutFeedback
        onPressIn={() => handlePressIn(settingsScale)}
        onPressOut={() => handlePressOut(settingsScale)}
        onPress={() => {}}
      >
        <Animated.View style={settingsStyle}>
          <Ionicons name="settings-outline" size={18} color="#aaa" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 12,
    marginTop: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: '#fff',
  },
});