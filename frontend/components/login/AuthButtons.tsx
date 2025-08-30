// frontend/components/login/AuthButtons.tsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

/* Gradient gold button (Login / Register) */
export function GradientButton({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <LinearGradient colors={['#FFD700', '#FFEC8B']} style={styles.gradientButton}>
        <Text style={styles.buttonText}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

/* Cancel / Switch button */
export function CancelButton({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cancelButton}>
      <Text style={styles.cancelText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  gradientButton: {
    width: '100%',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  cancelButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  cancelText: {
    color: '#bbb',
    fontWeight: '600',
    fontSize: 15,
  },
});