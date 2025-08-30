// frontend/components/register/YearDropdown.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

interface Props {
  yearOfStudy: string;
  setYearOfStudy: (v: string) => void;
  openYear: boolean;
  setOpenYear: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function YearDropdown({
  yearOfStudy,
  setYearOfStudy,
  openYear,
  setOpenYear,
}: Props) {
  return (
    <View style={[styles.inputContainer, { zIndex: 3000 }]}>
      <Ionicons name="calendar-outline" style={styles.icon} />
      <View style={styles.dropdownWrapper}>
        <DropDownPicker
          open={openYear}
          value={yearOfStudy || 'placeholder'}
          items={[
            { label: 'Select Year', value: 'placeholder' },
            ...['1', '2', '3', '4'].map((y) => ({ label: y, value: y })),
          ]}
          setOpen={setOpenYear}
          setValue={(callback) => {
            const val = callback(yearOfStudy) as string;
            setYearOfStudy(val === 'placeholder' ? 'placeholder' : val);
          }}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={
            yearOfStudy && yearOfStudy !== 'placeholder'
              ? styles.dropdownText
              : styles.placeholderText
          }
          listItemLabelStyle={styles.dropdownListItem}
          placeholder="Select Year"
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