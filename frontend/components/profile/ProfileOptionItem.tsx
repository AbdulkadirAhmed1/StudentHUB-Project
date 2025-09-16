// components/profile/ProfileOptionItem.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  label: string;
  icon: string;
  danger?: boolean;
  onPress: () => void;
}

export default function ProfileOptionItem({ label, icon, danger, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.row,
        pressed && { backgroundColor: 'rgba(255,255,255,0.05)' },
      ]}
      onPress={onPress}
    >
      {/* Left Icon */}
      <Ionicons
        name={icon as any}
        size={22}
        color={danger ? '#ff4d4d' : '#FFD700'}
        style={styles.icon}
      />

      {/* Label */}
      <Text style={[styles.label, danger && styles.danger]}>{label}</Text>

      {/* Right Arrow with circular bg */}
      <View style={styles.arrowCircle}>
        <Ionicons
          name="chevron-forward"
          size={18}
          color="#bbb"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 15,
  },
  label: {
    flex: 1,
    fontSize: 15,
    color: '#fff',
  },
  danger: {
    color: '#ff4d4d',
  },
  arrowCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.06)', // faint circle
    justifyContent: 'center',
    alignItems: 'center',
  },
});