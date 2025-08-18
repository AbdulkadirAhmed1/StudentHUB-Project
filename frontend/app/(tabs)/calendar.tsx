// frontend/app/(tabs)/calendar.tsx

import React, { useState, useMemo } from 'react'
import { SafeAreaView, View, StyleSheet, Text, Pressable, ScrollView, Modal } from 'react-native'
import { getCalendarMatrix, CalendarCell } from '../../utils/calendarUtils'
import { CalendarHeader } from '../../components/calendar/CalendarHeader'
import { CalendarGrid } from '../../components//calendar/CalendarGrid'
import { AddCourseModal } from '../../components/calendar/AddCourseModal'
import { PrereqModal } from '../../components/calendar/PrereqModal'
import type { Course } from '../../components/calendar/AddCourseModal'
import { ScheduledCoursesCard } from '../../components/calendar/ScheduledCoursesCard'

// month names…
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default function CalendarScreen() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2))
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [scheduledCourses, setScheduledCourses] = useState<Record<string, Course[]>>({})

  const month = monthNames[currentDate.getMonth()]
  const year = currentDate.getFullYear()
  const weeks = getCalendarMatrix(year, currentDate.getMonth())

  const handleDayPress = (cell: CalendarCell) => {
    if (!cell.inCurrentMonth) return
    setSelectedDate(new Date(year, currentDate.getMonth(), cell.date))
  }

  const dateKey = selectedDate
    ? selectedDate.toISOString().split('T')[0]
    : ''

  // inside CalendarScreen(), alongside your other useState calls:
  const [showPreReqModal, setShowPreReqModal] = useState(false)
  const [currentPreReq, setCurrentPreReq] = useState<Course[][]>([])

  // helper to turn hour/minute into “10:30 AM” style
  const formatTime = (hour: number, minute: number) => {
    const h = hour % 12 === 0 ? 12 : hour % 12
    const ampm = hour < 12 ? 'AM' : 'PM'
    const m = minute.toString().padStart(2, '0')
    return `${h}:${m} ${ampm}`
  }

  const goToPreviousMonth = () => {
    const prevMonth = currentDate.getMonth() - 1
    const yearAdjust = prevMonth < 0 ? year - 1 : year
    const monthAdjust = (prevMonth + 12) % 12

    setCurrentDate(new Date(yearAdjust, monthAdjust))
    setSelectedDate(null)   // ← clear any selection
  }

  const goToNextMonth = () => {
    const nextMonth = currentDate.getMonth() + 1
    const yearAdjust = nextMonth > 11 ? year + 1 : year
    const monthAdjust = nextMonth % 12

    setCurrentDate(new Date(yearAdjust, monthAdjust))
    setSelectedDate(null)   // ← clear any selection
  }

  const markedDates = useMemo(() => {
    // build a “YYYY-MM-” prefix for the current month
    const monthIdx = currentDate.getMonth() + 1
    const prefix =
      `${currentDate.getFullYear()}-${String(monthIdx).padStart(2, '0')}-`

    return Object
      .keys(scheduledCourses)
      .filter(dateStr => dateStr.startsWith(prefix))
      .map(dateStr => Number(dateStr.split('-')[2]))
  }, [currentDate, scheduledCourses])

  return (
    <SafeAreaView style={styles.container}>
      <CalendarHeader
        month={month}
        year={year}
        onPrev={goToPreviousMonth}
        onNext={goToNextMonth}
      />


      <CalendarGrid
        weeks={weeks}
        onDayPress={handleDayPress}
        isSelected={c => selectedDate?.getDate() === c.date && c.inCurrentMonth}
        markedDates={markedDates}
      />

      <ScheduledCoursesCard
        dateLabel={
          selectedDate
            ? `${selectedDate.getDate()} ${month} ${year}`
            : 'Select a date'
        }
        courses={[...(scheduledCourses[dateKey] ?? [])].sort(
          (a, b) => a.hour * 60 + a.minute - (b.hour * 60 + b.minute)
        )}
        onAddPress={() => setShowModal(true)}
        onViewPrereqs={(pr) => {
          setCurrentPreReq(pr)
          setShowPreReqModal(true)
        }}
      />

      <AddCourseModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSelect={course => {
          if (!selectedDate) return

          const today = scheduledCourses[dateKey] || []

          // Check if exact course already exists
          const isDuplicate = today.some(c => c.programCode === course.programCode)
          if (isDuplicate) {
            alert("Course in given time has already been added")
            return
          }

          // Check if any other course shares same time
          const isConflict = today.some(c => c.hour === course.hour && c.minute === course.minute)
          if (isConflict) {
            alert(`Time conflict detected: Another course is already scheduled at ${formatTime(course.hour, course.minute)}.`)
            return
          }

          setScheduledCourses(prev => {
            const updated = [...(prev[dateKey] || []), course]
            return { ...prev, [dateKey]: updated }
          })
        }}
      />

      <PrereqModal
        visible={showPreReqModal}
        onClose={() => setShowPreReqModal(false)}
        preReq={currentPreReq}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingTop: 60,
  },
})
