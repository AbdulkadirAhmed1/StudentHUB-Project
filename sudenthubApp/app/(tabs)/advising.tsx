// calendar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AdvisingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Academic Advising!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
});
