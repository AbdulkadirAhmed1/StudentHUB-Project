// frontend/components/register/CancelModal.tsx
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CancelModal({ visible, onClose, onConfirm }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Clear Registration?</Text>
          <Text style={styles.modalMessage}>
            Are you sure you want to cancel? All entered data will be cleared.
          </Text>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalCancel]}
              onPress={onClose}
            >
              <Text style={styles.modalCancelText}>Keep Editing</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, styles.modalConfirm]}
              onPress={onConfirm}
            >
              <Text style={styles.modalConfirmText}>Yes, Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#1c1c1c',
    borderRadius: 20,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  modalMessage: { color: '#fff', fontSize: 14, textAlign: 'center', marginBottom: 20 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 25,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  modalCancel: { backgroundColor: '#333' },
  modalConfirm: { backgroundColor: '#FFD700' },
  modalCancelText: { color: '#fff', fontWeight: 'bold' },
  modalConfirmText: { color: '#000', fontWeight: 'bold' },
});