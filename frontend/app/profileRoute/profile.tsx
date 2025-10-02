// app/profileRoute/profile.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileAvatar from '../../components/profile/ProfileAvatar';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileOptions from '../../components/profile/ProfileOptions'; 
import ProfileEditButton from '../../components/profile/ProfileEditButton'; 

export default function ProfileScreen() {
  return (
    <LinearGradient
      colors={['#2C2C2C', '#000000']}
      style={styles.gradientBackground}
    >
      <SafeAreaView style={styles.container}>
        <ProfileHeader />
        <ProfileAvatar />
        <ProfileInfo />  
        <ProfileEditButton />
        <ProfileOptions />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});