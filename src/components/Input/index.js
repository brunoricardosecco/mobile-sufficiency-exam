import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./styles";

export default function Input({ label = "", ...rest }) {
  return (
    <View style={styles.container}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}
