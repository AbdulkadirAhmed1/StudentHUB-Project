import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileOptionsGroup from './ProfileOptionsGroup';

export default function ProfileOptions() {
  return (
    <View style={styles.container}>
      {/* Main Options */}
      <ProfileOptionsGroup
        showTopDivider
        items={[
          { label: 'Settings', icon: 'settings-outline', onPress: () => console.log('Settings pressed') },
          { label: 'User Management', icon: 'people-outline', onPress: () => console.log('User Mgmt pressed') },
          { label: 'Notifications', icon: 'notifications-outline', onPress: () => console.log('Notifications pressed') },
          { label: 'Privacy & Security', icon: 'lock-closed-outline', onPress: () => console.log('Privacy pressed') },
        ]}
      />

      {/* Support Section */}
      <ProfileOptionsGroup
        showTopDivider
        items={[
          { label: 'About App', icon: 'information-circle-outline', onPress: () => console.log('About pressed') },
          { label: 'Logout', icon: 'log-out-outline', danger: true, onPress: () => console.log('Logout pressed') },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
});