// components/calendar/scheduledCoursesCard/EmptyState.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function EmptyState() {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        Your added courses will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  emptyText: { color: '#666', fontSize: 16, fontStyle: 'italic' },
});