import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileOptionItem from './ProfileOptionItem';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface Item {
  label: string;
  icon: string;
  danger?: boolean;
  onPress: () => void;
}

interface Props {
  items: Item[];
  showTopDivider?: boolean;
}

export default function ProfileOptionsGroup({ items, showTopDivider }: Props) {
  return (
    <View style={styles.group}>
      {items.map((item, idx) => {
        const dividerColor = useSharedValue('#333');

        const dividerStyle = useAnimatedStyle(() => ({
          backgroundColor: dividerColor.value,
        }));

        return (
          <View key={idx}>
            {/* Divider ABOVE the item */}
            {(idx > 0 || showTopDivider) && (
              <Animated.View
                style={[
                  idx === 0 && showTopDivider ? styles.fullDivider : styles.divider,
                  dividerStyle,
                ]}
              />
            )}

            {/* Item */}
            <ProfileOptionItem
              label={item.label}
              icon={item.icon}
              danger={item.danger}
              onPress={item.onPress}
              onActiveChange={(active) => {
                dividerColor.value = withTiming(
                  active ? (item.danger ? '#e74c3c' : '#9b59b6') : '#333',
                  { duration: 300 }
                );
              }}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 15,
  },
  fullDivider: {
    height: 1,
    backgroundColor: '#333',
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginLeft: 50, // keeps alignment under text, not under icon
  },
});