// calendar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      {/* Calender Header */}
      <Text style={styles.header}>Welcome to the Calender!</Text>
      <View style={styles.calendarContainer}>
        {/* Time Column */}
        <View style={styles.timeColumn}>
          {[...Array(15)].map((_,index) => (<Text key={index} style={styles.timeSlot}>{index + 8}:00</Text>))}
        </View>
        {/* Calender Content */}
        <View style={styles.calendarContent}>
      <View style={styles.header}>
        {[ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day,index) => (<Text key={index} style={styles.day}>{day}</Text>))}
      </View>
    </View>
   </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    marginBottom: 20,
    textAlignVertical: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'lightblue',
  },
  day: {
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  calendarContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  timeColumn: {
    flexDirection: 'column',
    width: 50,
    backgroundColor: 'lightblue',
    marginTop: 30,
  },
  timeSlot: {
    fontSize: 15,
    paddingVertical: 10,
    textAlign: 'center',
  },
  calendarContent: {
    flexDirection: 'row',
    flex: 1,
  },
});
