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
          {preReq.map((group, i) => {
             const codes = group.map(c => c.programCode).join(' OR ')
             return (
               <Text key={i} style={styles.line}>
                 • {codes}
               </Text>
             )
          })}
          <Pressable style={styles.closeBtn} onPress={onClose}>
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
    width: '80%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  groupText: {
    color: '#DDD',
    marginBottom: 8,
    fontSize: 14,
  },
  closeBtn: {
    marginTop: 12,
    alignSelf: 'center',
  },
  closeText: {
    color: '#AAA',
    fontSize: 14,
  },
  line: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
})
