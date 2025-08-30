// frontend/components/register/RegisterButtons.tsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { GradientButton } from '../AuthButtons';

interface Props {
  submitRegister: () => void;
  onCancel: () => void;
}

export default function RegisterButtons({ submitRegister, onCancel }: Props) {
  return (
    <View style={styles.buttonWrapper}>
      <GradientButton label="Register" onPress={submitRegister} />

      <TouchableOpacity onPress={onCancel}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  cancelText: {
    color: '#bbb',
    marginTop: 15,
    fontSize: 15,
    textAlign: 'center',
  },
});