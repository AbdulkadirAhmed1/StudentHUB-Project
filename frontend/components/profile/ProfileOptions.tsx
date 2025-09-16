import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileOptionsGroup from './ProfileOptionsGroup';

export default function ProfileOptions() {
  return (
    <View style={styles.container}>
      {/* First Group: Settings */}
      <ProfileOptionsGroup
        items={[
          { label: 'Settings', icon: 'settings-outline', onPress: () => console.log('Settings pressed') },
          { label: 'User Management', icon: 'people-outline', onPress: () => console.log('User Mgmt pressed') },
        ]}
      />

      {/* Second Group: Info */}
      <ProfileOptionsGroup
        items={[
          { label: 'Information', icon: 'information-circle-outline', onPress: () => console.log('Info pressed') },
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