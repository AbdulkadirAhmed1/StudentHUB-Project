// frontend/app/(tabs)/calendar.tsx

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Modal,
  TextInput,
  FlatList
} from 'react-native';

interface CalendarCell {
  date: number;
  inCurrentMonth: boolean;
}
import { Picker } from '@react-native-picker/picker';
import { BACKEND_URL } from '../../constants/api';

export default function CalendarScreen() {
  // Start on March 2024 (month is 0-based)
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2));
  // Track which day is selected
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [departments, setDepartments] = useState<string[]>([]);
  const [department, setDepartment] = useState<string>('');
  const [courses, setCourses] = useState<any[]>([]);

  // 1) Load department names on mount
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/departments`)
      .then(r => r.json())
      .then(data => {
        setDepartments(data.departments);
        if (data.departments.length) {
          setDepartment(data.departments[0]);
        }
      })
      .catch(console.error);
  }, []);

  // 2) Whenever `department` changes, fetch that dept’s courses
  useEffect(() => {
    if (!department) return;
    fetch(`${BACKEND_URL}/api/departments/${department}/courses`)
      .then(r => r.json())
      .then(data => {
        setCourses(data.courses);
      })
      .catch(console.error);
  }, [department]);

  // Monday-based days of the week
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Extract current month & year
  const currentMonth = currentDate.getMonth();  // 0-based
  const currentYear = currentDate.getFullYear();

  // Navigation
  const goToPreviousMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    setCurrentDate(new Date(newYear, newMonth));
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setCurrentDate(new Date(newYear, newMonth));
    setSelectedDate(null);
  };

  /**
   * Build an array of 6 rows x 7 columns with { date, inCurrentMonth }.
   * Then trim rows at the end if they have no current-month days.
   */
  const getCalendarMatrix = (year: number, month: number) => {
    // Monday-based logic => transform JS day so Monday=0, Tuesday=1, ...
    const firstDayOfMonth = new Date(year, month, 1);
    let startDay = (firstDayOfMonth.getDay() + 6) % 7;

    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    const prevMonth = month - 1 < 0 ? 11 : month - 1;
    const prevMonthYear = month - 1 < 0 ? year - 1 : year;
    const daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate();

    const calendarDays: CalendarCell[] = [];

    // 1) Fill leading days from the previous month
    for (let i = 0; i < startDay; i++) {
      const dayFromPrev = daysInPrevMonth - (startDay - 1) + i;
      calendarDays.push({ date: dayFromPrev, inCurrentMonth: false });
    }

    // 2) Fill actual days of the current month
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      calendarDays.push({ date: day, inCurrentMonth: true });
    }

    // 3) Fill trailing cells from the next month (up to 6 rows total => 42 cells)
    const totalCellsSoFar = calendarDays.length;
    const cellsLeft = 42 - totalCellsSoFar;
    for (let i = 1; i <= cellsLeft; i++) {
      calendarDays.push({ date: i, inCurrentMonth: false });
    }

    // Chunk into 6 rows of 7
    const weeks: CalendarCell[][] = [];
    for (let i = 0; i < 42; i += 7) {
      weeks.push(calendarDays.slice(i, i + 7));
    }

    // Remove trailing rows if they contain *only* out-of-month days
    while (
      weeks.length > 0 &&
      weeks[weeks.length - 1].every(cell => !cell.inCurrentMonth)
    ) {
      weeks.pop();
    }

    return weeks;
  };

  const calendarMatrix = getCalendarMatrix(currentYear, currentMonth);

  // Press a day => select if in current month
  const handleDayPress = (cell: CalendarCell) => {
    if (!cell.inCurrentMonth) return;
    const chosen = new Date(currentYear, currentMonth, cell.date);
    setSelectedDate(chosen);
  };

  // Check if this cell is selected
  const isSelected = (cell: CalendarCell) => {
    if (!selectedDate || !cell.inCurrentMonth) return false;
    return (
      selectedDate.getFullYear() === currentYear &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getDate() === cell.date
    );
  };

  // Renders bottom card content: date or placeholder
  const renderCardContent = () => {
    if (!selectedDate) {
      return <Text style={styles.cardPlaceholder}>Select a date</Text>;
    }
    const day = selectedDate.getDate();
    const mon = monthNames[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();
    return (
      <Text style={styles.cardDateText}>
        {day} {mon} {year}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header: < April 2024 > */}
      <View style={styles.monthHeader}>
        <Pressable onPress={goToPreviousMonth} style={styles.arrowCircle}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </Pressable>

        <Text style={styles.monthText}>
          {monthNames[currentMonth]} {currentYear}
        </Text>

        <Pressable onPress={goToNextMonth} style={styles.arrowCircle}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </Pressable>
      </View>

      <View style={styles.divider} />

      {/* Days of the Week */}
      <View style={styles.daysOfWeekRow}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.dayOfWeekText}>
            {day}
          </Text>
        ))}
      </View>

      {/* The Calendar */}
      <View style={styles.calendarGrid}>
        {calendarMatrix.map((week, wIndex) => (
          <View style={styles.weekRow} key={wIndex}>
            {week.map((cell, dIndex) => {
              const selected = isSelected(cell);
              return (
                <Pressable
                  key={dIndex}
                  style={[
                    styles.dayContainer,
                    selected && styles.selectedDayContainer,
                  ]}
                  onPress={() => handleDayPress(cell)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      !cell.inCurrentMonth && styles.grayText,
                      selected && styles.selectedDayText,
                    ]}
                  >
                    {cell.date}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>

      {/* 
        Bottom card starts immediately after the calendar,
        extends toward the bottom of the screen 
      */}
      <View style={styles.bottomCard}>
        {/* “+Add Course” on the top-right of the card */}
        <Pressable
          style={styles.addCourseBtn}
          onPress={() => setShowAddModal(true)}
        >
          <Text style={styles.addCourseText}>+Add Course</Text>
        </Pressable>

        {/* Center content */}
        <View style={styles.centerContent}>{renderCardContent()}</View>
      </View>

      <Modal
        visible={showAddModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowAddModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Department picker */}
            <Picker
              selectedValue={department}
              onValueChange={setDepartment}
              style={styles.picker}
            >
              {departments.map(dep => (
                <Picker.Item key={dep} label={dep} value={dep} />
              ))}
            </Picker>

            {/* Search bar */}
            <TextInput
              placeholder="Search courses…"
              placeholderTextColor="#666"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />

            {/* Filtered course list */}
            <FlatList
              data={courses.filter(c =>
                c.programCode.toLowerCase().includes(searchQuery.toLowerCase())
              )}
              keyExtractor={c => c.programCode}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.courseItem}
                  onPress={() => {
                    /* TODO: add the course to your selected-date state */
                    setShowAddModal(false);
                  }}
                >
                  <Text style={styles.courseText}>
                    {item.programCode} – {item.description}
                  </Text>
                </Pressable>
              )}
              ListEmptyComponent={
                <Text style={styles.emptyText}>No matching courses</Text>
              }
            />

            {/* Close button */}
            <Pressable
              style={styles.closeBtn}
              onPress={() => setShowAddModal(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// -------------- STYLES ---------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingTop: 60,
  },

  // ~~~ HEADER ~~~
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  arrowCircle: {
    backgroundColor: '#2C2C2C',
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  monthText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginHorizontal: 20,
    marginBottom: 10,
  },

  // ~~~ DAYS OF WEEK ~~~
  daysOfWeekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  dayOfWeekText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    color: '#bbb',
    textTransform: 'uppercase',
  },

  // ~~~ CALENDAR GRID ~~~
  calendarGrid: {
    width: '100%',
    alignSelf: 'center',
    // We leave height flexible
    marginBottom: 10, // small gap before the card
  },
  weekRow: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  dayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    borderRadius: 20,
    paddingVertical: 8,
    marginHorizontal: 2,
  },
  dayText: {
    fontSize: 15,
    color: '#fff',
  },
  grayText: {
    color: '#666',
  },
  selectedDayContainer: {
    backgroundColor: '#fff',
  },
  selectedDayText: {
    color: '#000',
    fontWeight: '700',
  },

  // ~~~ BOTTOM CARD ~~~
  bottomCard: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    // Instead of marginTop: 'auto', we place the card right under the calendar
    // plus ensure it's above the tab bar if necessary
    marginHorizontal: 0,
    marginBottom: 90,           // keep above the tab bar
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    minHeight: 200,             // some fixed height or "auto"
    padding: 20,
  },
  addCourseBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  addCourseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardPlaceholder: {
    color: '#666',
    fontSize: 16,
    fontStyle: 'italic',
  },
  cardDateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
  },
  picker: {
    color: '#fff',
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#2C2C2C',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  courseItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#2A2A2A',
  },
  courseText: {
    color: '#fff',
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  closeBtn: {
    marginTop: 16,
    alignSelf: 'center',
  },
  closeText: {
    color: '#bbb',
    fontSize: 16,
  },  
});
