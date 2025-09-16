// components/profile/ProfileOptionsGroup.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileOptionItem from './ProfileOptionItem';

interface Item {
  label: string;
  icon: string;
  danger?: boolean;
  onPress: () => void;
}

interface Props {
  items: Item[];
}

export default function ProfileOptionsGroup({ items }: Props) {
  return (
    <View style={styles.group}>
      {items.map((item, idx) => (
        <View key={idx}>
          <ProfileOptionItem
            label={item.label}
            icon={item.icon}
            danger={item.danger}
            onPress={item.onPress}
          />
          {/* Divider line between items */}
          {idx < items.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 30, // bigger gap between groups
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginLeft: 50, // align divider under text, not under icon
  },
});