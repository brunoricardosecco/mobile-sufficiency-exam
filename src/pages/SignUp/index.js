import React, { useState, useCallback } from 'react';
import { Text, View, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../../store/auth/reducer';

import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles';
import { normalize } from '../../helpers';

export default function SignUp({ navigation }) {
  //* STATES
  const [fields, setFields] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { isLoading } = useSelector((states) => states.auth);

  // * ACTIONS
  const dispatch = useDispatch();
  const signUpAsync = useCallback((values) => dispatch(signUp(values)), [
    dispatch,
  ]);

  // * FUNCTIONS
  const handleFillField = useCallback((name, value) => {
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (
      fields.email === '' ||
      fields.password === '' ||
      fields.confirmPassword === ''
    ) {
      Alert.alert(
        'Campo vazio',
        'Por favor, preencha todos os campos para entrar no aplicativo',
        [
          {
            text: 'Beleza',
          },
        ]
      );
      return;
    }

    if (fields.password !== fields.confirmPassword) {
      Alert.alert(
        'Campo diferentes',
        'A confirmação de senha deve ser igual a senha',
        [
          {
            text: 'Beleza',
          },
        ]
      );
      return;
    }

    signUpAsync(fields);
  }, [fields, signUpAsync]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
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
          <Input
            name="confirmPassword"
            label="Confirme a senha"
            secureTextEntry
            onChangeText={handleFillField}
          />
          <Button
            text="Pronto"
            style={{ marginTop: normalize(10) }}
            onPress={handleSubmit}
            isLoading={isLoading}
          />
          <Button
            text="Não quero me cadastrar"
            clear
            style={{ marginTop: normalize(10) }}
            onPress={() => navigation.goBack()}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
