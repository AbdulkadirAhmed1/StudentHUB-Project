// frontend/components/login/RegisterForm.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Modularized parts
import UsernameInput from './register/UsernameInput';
import PasswordInput from './register/PasswordInput';
import YearDropdown from './register/YearDropdown';
import DepartmentDropdown from './register/DepartmentDropdown';
import MajorInput from './register/MajorInput';
import CancelModal from './register/CancelModal';
import RegisterButtons from './register/RegisterButtons';

interface Props {
  username: string;
  password: string;
  yearOfStudy: string;
  department: string;
  major: string;
  departments: string[];
  setUsername: (v: string) => void;
  setPassword: (v: string) => void;
  setYearOfStudy: (v: string) => void;
  setDepartment: (v: string) => void;
  setMajor: (v: string) => void;
  submitRegister: () => void;
  switchToLogin: () => void;
}

export default function RegisterForm({
  username,
  password,
  yearOfStudy,
  department,
  major,
  departments,
  setUsername,
  setPassword,
  setYearOfStudy,
  setDepartment,
  setMajor,
  submitRegister,
  switchToLogin,
}: Props) {
  const [openYear, setOpenYear] = useState(false);
  const [openDep, setOpenDep] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Default "clean" state snapshot
  const defaultState = {
    username: '',
    password: '',
    yearOfStudy: 'placeholder',
    department: 'placeholder',
    major: '',
  };

  // Reset all form fields
  const clearForm = () => {
    setUsername('');
    setPassword('');
    setYearOfStudy('placeholder');
    setDepartment('placeholder');
    setMajor('');
  };

  // Helper: check if form differs from default
  const isDirty = () => {
    return !(
      username === defaultState.username &&
      password === defaultState.password &&
      (yearOfStudy || 'placeholder') === defaultState.yearOfStudy &&
      (department || 'placeholder') === defaultState.department &&
      major === defaultState.major
    );
  };

  const handleCancel = () => {
    if (isDirty()) {
      setShowModal(true); // warn only if modified
    } else {
      switchToLogin(); // skip warning, nothing changed
    }
  };

  const confirmCancel = () => {
    clearForm();
    setShowModal(false);
    switchToLogin();
  };

  return (
    <View style={styles.card}>
      {/* Inputs */}
      <UsernameInput username={username} setUsername={setUsername} />
      <PasswordInput password={password} setPassword={setPassword} />
      <YearDropdown
        yearOfStudy={yearOfStudy}
        setYearOfStudy={setYearOfStudy}
        openYear={openYear}
        setOpenYear={setOpenYear}
      />
      <DepartmentDropdown
        department={department}
        setDepartment={setDepartment}
        departments={departments}
        openDep={openDep}
        setOpenDep={setOpenDep}
      />
      <MajorInput major={major} setMajor={setMajor} />

      {/* Buttons */}
      <RegisterButtons submitRegister={submitRegister} onCancel={handleCancel} />

      {/* Cancel Warning Modal */}
      <CancelModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmCancel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
});