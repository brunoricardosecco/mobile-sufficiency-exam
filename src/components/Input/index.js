import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';

export default function Input({
  label = '',
  name = '',
  onChangeText,
  ...rest
}) {
  return (
    <View style={styles.container}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        onChangeText={(value) => onChangeText(name, value)}
        style={styles.input}
        {...rest}
      />
    </View>
  );
}
