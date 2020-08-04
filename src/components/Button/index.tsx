import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  variant: 'default' | 'primary';
  label?: string;
  onPress: () => void;
}
const Button = ({ label, onPress, variant = 'default' }: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? '#2cb9b0' : 'rgba(12,13,52,0.05)';
  const color = variant === 'primary' ? '#fff' : '#0c0d34';

  return (
    <RectButton
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {},
});
export default Button;
