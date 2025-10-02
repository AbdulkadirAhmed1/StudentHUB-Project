// components/profile/ProfileOptionItem.tsx
import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

interface Props {
  label: string;
  icon: string;
  danger?: boolean;
  onPress: () => void;
  onActiveChange?: (active: boolean) => void;
}

export default function ProfileOptionItem({
  label,
  icon,
  danger,
  onPress,
  onActiveChange,
}: Props) {
  const progress = useSharedValue(0);
  const fillHeight = useSharedValue(0); // keep for arrow fill

  const handlePressIn = () => {
    onActiveChange?.(true);
    progress.value = withTiming(1, { duration: 600 });
    fillHeight.value = withTiming(100, { duration: 500 }); // arrow fill
  };

  const handlePressOut = () => {
    onActiveChange?.(false);
    progress.value = withTiming(0, { duration: 600 });
    fillHeight.value = withTiming(0, { duration: 500 }); // arrow unfill
  };

  const activeColor = danger ? '#e74c3c' : '#9b59b6';

  return (
    <Pressable
      style={styles.row}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      {/* Left Icon */}
      <Ionicons
        name={icon as any}
        size={22}
        color={danger ? '#e74c3c' : '#9b59b6'}
        style={styles.icon}
      />

      {/* Animated label (fills right → left) */}
      <View style={styles.textRow}>
        {label.split('').map((char, index) => {
          const animatedStyle = useAnimatedStyle(() => {
            // Right → left stagger
            const delay = (label.length - index - 1) / label.length;
            const staggered = Math.min(
              Math.max((progress.value - delay) * (label.length + 1), 0),
              1
            );

            const color = interpolateColor(
              staggered,
              [0, 1],
              ['#ffffff', activeColor]
            );

            return { color };
          });

          return (
            <Animated.Text key={index} style={[styles.label, animatedStyle]}>
              {char}
            </Animated.Text>
          );
        })}
      </View>

      {/* Right Arrow with fill animation */}
      <View style={styles.arrowWrapper}>
        <Animated.View
          style={[
            styles.fill,
            useAnimatedStyle(() => ({
              height: `${fillHeight.value}%`,
              backgroundColor: activeColor,
            })),
          ]}
        />
        <Ionicons
          name="chevron-forward"
          size={18}
          color="#bbb"
          style={styles.arrowIcon}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    position: 'relative',
  },
  icon: {
    marginRight: 15,
  },
  textRow: {
    flexDirection: 'row',
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
  },
  arrowWrapper: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.06)',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  fill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  arrowIcon: {
    position: 'absolute',
  },
});