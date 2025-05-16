import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import type { Course } from './AddCourseModal';
import { formatTime } from '../../utils/formatTime';

interface Props {
  /** e.g. "8 March 2024" or "Select a date" */
  dateLabel: string;
  /** list of courses for that day */
  courses: Course[];
  /** tapped “+ Add Course” */
  onAddPress: () => void;
  /** tapped “View Pre-Reqs” on a course */
  onViewPrereqs: (preReq: Course[][]) => void;
}

export function ScheduledCoursesCard({
  dateLabel,
  courses,
  onAddPress,
  onViewPrereqs,
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
          showsVerticalScrollIndicator={false}   // ← hide the vertical bar
          showsHorizontalScrollIndicator={false} // ← if you ever scroll sideways
        >
          {courses.map((course) => (
            <View key={course.programCode} style={styles.card}>
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
                onPress={() => onViewPrereqs(course.preReq)}
              >
                <Text style={styles.prereqText}>View Pre-Reqs</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your added courses will appear here.</Text>
        </View>
      )}
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
    textAlign: 'left',
  },
  addBtn: {
    marginLeft: 'auto',
  },
  addText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },

  card: {
    backgroundColor: '#2C2C2C',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  line: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  label: {
    fontWeight: '600',
  },

  prereqBtn: {
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  prereqText: {
    color: '#00A3FF',
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,     // adjust as needed
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
