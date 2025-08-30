// frontend/components/PrereqModal.tsx
import React from 'react'
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native'

import type { Course } from '../calendar/AddCourseModal'

interface PrereqModalProps {
  visible: boolean
  onClose: () => void
  preReq: Course[][]
}

export function PrereqModal({ visible, onClose, preReq }: PrereqModalProps) {
  const hasPreReqs = preReq && preReq.length > 0

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Prerequisites</Text>

          {hasPreReqs ? (
            preReq.map((group, i) => {
              const codes = group.map(c => c.programCode).join(' OR ')
              return (
                <View key={i} style={styles.card}>
                  <Text style={styles.code}>{codes}</Text>
                </View>
              )
            })
          ) : (
            <Text style={styles.emptyText}>
              No prerequisites for this course.
            </Text>
          )}

          {/* Close button */}
          <Pressable
            style={({ pressed }) => [
              styles.closeBtn,
              pressed && { opacity: 0.7 }
            ]}
            onPress={onClose}
          >
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '85%',
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  // Modern card style (matches calendar cards)
  card: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  code: {
    color: '#bb86fc', // purple highlight for codes
    fontSize: 15,
    fontWeight: '600',
  },
  emptyText: {
    color: '#666',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeBtn: {
    marginTop: 16,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: '#9b59b6', // purple accent
    borderRadius: 25,
  },
  closeText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
})