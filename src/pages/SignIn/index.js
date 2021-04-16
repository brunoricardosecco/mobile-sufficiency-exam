import React from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Input from "../../components/Input";
import Button from "../../components/Button";

import styles from "./styles";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>LibApp</Text>
        <KeyboardAwareScrollView style={{ flex: 1, width: "100%" }}>
          <Input label="E-mail" />
          <Input label="Password" />
          <Button text="Login" />
          <Button text="I need to signup" clear />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
