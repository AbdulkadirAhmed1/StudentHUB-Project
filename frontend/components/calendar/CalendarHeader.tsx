// frontend/components/CalendarHeader.tsx

import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface Props {
  month: string
  year: number
  onPrev: () => void
  onNext: () => void
}

export function CalendarHeader({ month, year, onPrev, onNext }: Props) {
  return (
    <View style={styles.header}>
      <Pressable onPress={onPrev} style={styles.arrow}>
        <Text style={styles.arrowText}>{'<'}</Text>
      </Pressable>

      <Text style={styles.title}>{month} {year}</Text>

      <Pressable onPress={onNext} style={styles.arrow}>
        <Text style={styles.arrowText}>{'>'}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  arrow: {
    backgroundColor: '#2C2C2C',
    borderRadius: 30,
    width: 30, height: 30,
    alignItems: 'center', justifyContent: 'center',
  },
  arrowText: { color: '#fff', fontWeight: '600' },
  title: { fontSize: 20, fontWeight: '700', color: '#fff' },
})
