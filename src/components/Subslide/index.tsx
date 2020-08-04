import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import Button from '../Button';

interface SubslideProps {
  description: string;
  subtitle: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get Started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: '#0c0d34',
  },
  description: {
    fontSize: 16,
    lineHeight: 25,
    color: '#0c0d34',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default Subslide;
