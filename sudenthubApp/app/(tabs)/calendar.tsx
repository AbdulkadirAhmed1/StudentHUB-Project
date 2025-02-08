// calendar.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
        {[ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day,index) => (<View key={index} style={styles.dayContainer}>
          <Text key={index} style={styles.day}>{day}</Text>{index < 4 && <View style={styles.separator} />} 
          </View>))}
      </View>
    </View>
   </View>
   <TouchableOpacity style={styles.addButton}>
    <Text style={styles.buttonText}>+ Add Course</Text>
   </TouchableOpacity>
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
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
    position: 'absolute',
    top: 10,
  
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'lightblue',
    alignSelf: 'flex-start',
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
  dayContainer: {
     flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center',
      flex: 1,
    
  },
  separator: {
    width: 1,
    backgroundColor: 'black',
    height: '80%',
    marginHorizontal: 5,
  },

  addButton: {
    backgroundColor: 'lightblue',
    position: 'absolute',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    bottom: 85,
    alignSelf: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
