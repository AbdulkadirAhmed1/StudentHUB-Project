// components/calendar/scheduledCoursesCard/CourseHeader.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface Props {
  dateLabel: string;
  onAddPress: () => void;
}

export function CourseHeader({ dateLabel, onAddPress }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.dateText}>{dateLabel}</Text>
      <Pressable style={styles.addBtn} onPress={onAddPress}>
        <Text style={styles.addText}>+ Add Course</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateText: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  addBtn: { marginLeft: 'auto' },
  addText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});