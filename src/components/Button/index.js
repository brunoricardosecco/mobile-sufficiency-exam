import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { colors } from "../../constants";
import styles from "./styles";

export default function Button({
  clear = false,
  text,
  textStyle,
  children,
  isLoading,
  style,
  ...rest
}) {
  return (
    <TouchableOpacity style={[styles.button(clear), style]} {...rest}>
      {!isLoading ? (
        children ? (
          children
        ) : (
          <Text style={[styles.buttonText(clear), textStyle]}>{text}</Text>
        )
      ) : (
        <ActivityIndicator
          size="small"
          color={clear ? colors.primaryBlue : colors.white}
        />
      )}
    </TouchableOpacity>
  );
}
