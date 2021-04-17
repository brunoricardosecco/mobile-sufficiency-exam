import React, { useState, useCallback } from 'react';
import { Text, View, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';

import { signIn } from '../../store/auth/reducer';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { normalize } from '../../helpers';

import styles from './styles';

export default function SignIn({ navigation }) {
  //* STATES
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  // * ACTIONS
  const dispatch = useDispatch();
  const signInAsync = useCallback((values) => dispatch(signIn(values)), [
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
    if (fields.email === '' || fields.password === '') {
      Alert.alert(
        'Campo vazio',
        'Por favor, preencha todos os campos para entrar no aplicativo.',
        [
          {
            text: 'Beleza',
          },
        ]
      );
      return;
    }

    console.log({ fields });
  }, [fields]);

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
          <Button
            text="Bora"
            style={{ marginTop: normalize(10) }}
            onPress={handleSubmit}
          />
          <Button
            text="Preciso me cadastrar"
            clear
            style={{ marginTop: normalize(10) }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
