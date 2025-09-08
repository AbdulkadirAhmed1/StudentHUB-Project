// components/calendar/scheduledCoursesCard/ScheduledCoursesCard.tsx
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import type { Course } from './AddCourseModal';
import { CourseHeader } from './scheduledCoursesCard/CourseHeader';
import { CourseCard } from './scheduledCoursesCard/CourseCard';
import { EmptyState } from './scheduledCoursesCard/EmptyState';

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
      <CourseHeader dateLabel={dateLabel} onAddPress={onAddPress} />

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
        <EmptyState />
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
  list: { flex: 1 },
  listContent: { paddingBottom: 16 },
});