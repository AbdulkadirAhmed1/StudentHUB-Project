// frontend/components/CalendarGrid.tsx

import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { CalendarCell } from '../../utils/calendarUtils'

interface CalendarGridProps {
  weeks: CalendarCell[][]
  onDayPress: (c: CalendarCell) => void
  isSelected: (c: CalendarCell) => boolean
  markedDates?: number[]                // ← new prop
}
export function CalendarGrid({
  weeks,
  onDayPress,
  isSelected,
  markedDates = []
}: CalendarGridProps) {
  return (
    <View style={styles.grid}>
      <View style={styles.weekRow}>
        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>(
          <Text key={d} style={styles.weekday}>{d}</Text>
        ))}
      </View>


      {weeks.map((week, wi) => (
        <View key={wi} style={styles.weekRow}>
          {week.map((cell, di) => {
            const selected = isSelected(cell)
            const hasEvent = cell.inCurrentMonth && markedDates.includes(cell.date)

            return (
              <Pressable
                key={di}
                style={[
                  styles.dayContainer,
                  selected && styles.dayContainer
                ]}
                onPress={() => onDayPress(cell)}
              >
                <Text
                  style={[
                    styles.dayText,
                    !cell.inCurrentMonth && styles.gray,
                    selected && styles.selectedText,
                  ]}
                >
                  {cell.date}
                </Text>

                {hasEvent && (
                  <View style={styles.dot} />
                )}
              </Pressable>
            )
          })}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  grid: { marginBottom: 10, width:'100%' },
  weekRow: { flexDirection:'row', marginVertical:2 },
  weekday: { flex:1, textAlign:'center', fontSize:13, fontWeight:'600', color:'#bbb', textTransform:'uppercase' },
  dayContainer: { flex:1, marginHorizontal:2, marginVertical:4, paddingVertical:8, borderRadius:20, alignItems:'center' },
  dayText: { color:'#fff', fontSize:15 },
  gray: { color:'#666' },
  selectedDay: { backgroundColor:'#fff' },
  selectedText: { color:'#FFF', fontWeight:'700' },
  dot: {width: 6,height: 6,borderRadius: 3,backgroundColor: '#9b59b6', marginTop: 4,},
})
