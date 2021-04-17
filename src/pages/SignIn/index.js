import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Input from "../../components/Input";
import Button from "../../components/Button";

import styles from "./styles";
import { normalize } from "../../helpers";

export default function SignIn({ navigation }) {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleFillField = (name, value) => {
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (fields.email === "" || fields.password === "") {
      Alert.alert(
        "Campo vazio",
        "Por favor, preencha todos os campos para entrar no aplicativo.",
        [
          {
            text: "Beleza",
          },
        ]
      );
      return;
    }

    console.log({ fields });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>LibApp</Text>
          <Input
            name="email"
            label="E-mail"
            autoCapitalize="none"
            onChangeText={handleFillField}
          />
          <Input
            name="password"
            label="Senha"
            secureTextEntry
            onChangeText={handleFillField}
          />
          <Button
            text="Bora"
            style={{ marginTop: normalize(10) }}
            onPress={handleSubmit}
          />
          <Button
            text="Preciso me cadastrar"
            clear
            style={{ marginTop: normalize(10) }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
