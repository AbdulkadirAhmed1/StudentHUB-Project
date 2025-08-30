import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  Animated,
} from 'react-native';
import type { Course } from './AddCourseModal';
import { formatTime } from '../../utils/formatTime';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  dateLabel: string;
  courses: Course[];
  onAddPress: () => void;
  onViewPrereqs: (preReq: Course[][]) => void;
  onDelete?: (programCode: string) => void;
}

export function ScheduledCoursesCard({
  dateLabel,
  courses,
  onAddPress,
  onViewPrereqs,
  onDelete,
}: Props) {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.dateText}>{dateLabel}</Text>
        <Pressable style={styles.addBtn} onPress={onAddPress}>
          <Text style={styles.addText}>+ Add Course</Text>
        </Pressable>
      </View>

      {/* course list */}
      {courses.length > 0 ? (
        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.programCode}
              course={course}
              onViewPrereqs={onViewPrereqs}
              onDelete={onDelete}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Your added courses will appear here.
          </Text>
        </View>
      )}
    </View>
  );
}

function CourseCard({ course, onViewPrereqs, onDelete }: any) {
  const [showDelete, setShowDelete] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeDelete = useRef(new Animated.Value(0)).current;

  const toggleView = () => {
    if (showDelete) {
      Animated.parallel([
        Animated.timing(fadeDelete, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => setShowDelete(false));
    } else {
      setShowDelete(true);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeDelete, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
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
          {/* prereq button stays above card press */}
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
        style={[
          styles.absoluteFill,
          { opacity: fadeDelete, justifyContent: 'center', alignItems: 'center' },
        ]}
        pointerEvents={showDelete ? 'auto' : 'none'}
      >
        {/* tap outside delete button → close */}
        <Pressable style={StyleSheet.absoluteFill} onPress={toggleView} />

        {/* delete button */}
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
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    padding: 20,
    marginBottom: 90,
  },
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
  list: { flex: 1 },
  listContent: { paddingBottom: 16 },

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
    backgroundColor: '#9b59b6', // new purple color
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,           // make it pill-shaped like Close
    zIndex: 1000,
    elevation: 1000,
  },
  deleteText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
    fontSize: 14,               // slightly bigger for balance
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  emptyText: { color: '#666', fontSize: 16, fontStyle: 'italic' },
});