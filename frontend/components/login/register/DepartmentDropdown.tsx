// frontend/components/register/DepartmentDropdown.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

interface Props {
  department: string;
  setDepartment: (v: string) => void;
  departments: string[];
  openDep: boolean;
  setOpenDep: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DepartmentDropdown({
  department,
  setDepartment,
  departments,
  openDep,
  setOpenDep,
}: Props) {
  return (
    <View style={[styles.inputContainer, { zIndex: 2000 }]}>
      <Ionicons name="school-outline" style={styles.icon} />
      <View style={styles.dropdownWrapper}>
        <DropDownPicker
          open={openDep}
          value={department || 'placeholder'}
          items={[
            { label: 'Select Department', value: 'placeholder' },
            ...departments.map((dep) => ({ label: dep, value: dep })),
          ]}
          setOpen={setOpenDep}
          setValue={(callback) => {
            const val = callback(department) as string;
            setDepartment(val === 'placeholder' ? 'placeholder' : val);
          }}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={
            department && department !== 'placeholder'
              ? styles.dropdownText
              : styles.placeholderText
          }
          listItemLabelStyle={styles.dropdownListItem}
          placeholder="Select Department"
          placeholderStyle={styles.placeholderText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },
  icon: { fontSize: 20, color: '#bbb', marginRight: 10 },
  dropdownWrapper: { flex: 1, justifyContent: 'center' },
  dropdown: {
    backgroundColor: '#2A2A2A',
    borderRadius: 30,
    borderWidth: 0,
    height: 48,
    paddingHorizontal: 10,
    marginTop: -2,
    justifyContent: 'center',
  },
  dropdownContainer: {
    backgroundColor: '#2A2A2A',
    borderWidth: 0,
    borderRadius: 15,
    marginTop: -1,
  },
  dropdownText: { color: '#FFD700', fontSize: 15 },
  dropdownListItem: { color: '#fff', fontSize: 15 },
  placeholderText: { color: '#bbb', fontSize: 15 },
});