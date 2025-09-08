// components/calendar/scheduledCoursesCard/CourseCard.tsx
import React, { useState, useRef } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { formatTime } from '../../../utils/formatTime';
import type { Course } from '../AddCourseModal';

interface Props {
  course: Course;
  onViewPrereqs: (preReq: Course[][]) => void;
  onDelete?: (programCode: string) => void;
}

export function CourseCard({ course, onViewPrereqs, onDelete }: Props) {
  const [showDelete, setShowDelete] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeDelete = useRef(new Animated.Value(0)).current;

  const toggleView = () => {
    if (showDelete) {
      Animated.parallel([
        Animated.timing(fadeDelete, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start(() => setShowDelete(false));
    } else {
      setShowDelete(true);
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(fadeDelete, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();
    }
  };

  return (
    <View style={styles.card}>
      {/* main content */}
      <Pressable style={StyleSheet.absoluteFill} onPress={toggleView}>
        <Animated.View style={[styles.absoluteFill, { opacity: fadeAnim }]}>
          <Text style={styles.line}>
            <Text style={styles.label}>Course: </Text>
            {course.programCode}
          </Text>
          <Text style={styles.line}>
            <Text style={styles.label}>Time: </Text>
            {formatTime(course.hour, course.minute)}
          </Text>
          <Text style={styles.line}>
            <Text style={styles.label}>Prof: </Text>
            {course.professor ?? 'N/A'}
          </Text>
          <Pressable
            style={styles.prereqBtn}
            onPress={(e) => {
              e.stopPropagation();
              onViewPrereqs(course.preReq);
            }}
          >
            <Text style={styles.prereqText}>View Pre-Reqs</Text>
          </Pressable>
        </Animated.View>
      </Pressable>

      {/* delete content */}
      <Animated.View
        style={[styles.absoluteFill, { opacity: fadeDelete, justifyContent: 'center', alignItems: 'center' }]}
        pointerEvents={showDelete ? 'auto' : 'none'}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={toggleView} />
        <Pressable
          style={styles.deleteBtn}
          onPress={(e) => {
            e.stopPropagation();
            onDelete?.(course.programCode);
          }}
        >
          <Ionicons name="trash" size={20} color="white" />
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2C2C2C',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    minHeight: 100,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    padding: 12,
  },
  line: { color: '#fff', fontSize: 14, marginBottom: 4 },
  label: { fontWeight: '600' },
  prereqBtn: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    zIndex: 999,
    elevation: 999,
  },
  prereqText: { color: '#9b59b6', fontSize: 14 },
  deleteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9b59b6',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    zIndex: 1000,
    elevation: 1000,
  },
  deleteText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
    fontSize: 14,
  },
});