// frontend/components/login/LoginHeader.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface Props {
  mode: 'login' | 'register';
}

export default function LoginHeader({ mode }: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.logoWrapper}>
        {/* Main logo */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Reflection (simple flipped logo with opacity) */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={[styles.logo, styles.reflection]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  reflection: {
    transform: [{ scaleY: -1 }], // flip vertically
    opacity: 0.2,               // make it subtle
    marginTop: -20,              // so it "touches" the main logo
  },
});