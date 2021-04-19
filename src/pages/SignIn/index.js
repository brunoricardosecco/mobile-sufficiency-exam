import React, { useState, useCallback } from 'react';
import { Text, View, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
  const { isLoading } = useSelector((states) => states.auth);

  // * HOOKS
  const { t } = useTranslation();

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
      Alert.alert(t('signIn.alert.title'), t('signIn.alert.message'), [
        {
          text: t('signIn.alert.confirmButton'),
        },
      ]);
      return;
    }

    signInAsync(fields);
  }, [fields, signInAsync]);

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
            label={t('signIn.emailLabel')}
            autoCapitalize="none"
            onChangeText={handleFillField}
          />
          <Input
            name="password"
            label={t('signIn.passwordLabel')}
            secureTextEntry
            onChangeText={handleFillField}
          />
          <Button
            text={t('signIn.submitButton')}
            style={{ marginTop: normalize(10) }}
            onPress={handleSubmit}
            isLoading={isLoading}
          />
          <Button
            text={t('signIn.signUpButton')}
            clear
            style={{ marginTop: normalize(10) }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
