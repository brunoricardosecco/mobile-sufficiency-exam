import React, { useState, useCallback } from 'react';
import { Text, View, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

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

  // * HOOKS
  const { t } = useTranslation();

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
      Alert.alert(t('signUp.alert.title'), t('signUp.alert.message'), [
        {
          text: t('signUp.alert.confirmButton'),
        },
      ]);
      return;
    }

    if (fields.password !== fields.confirmPassword) {
      Alert.alert(
        t('signUp.alertDifferentPasswords.title'),
        t('signUp.alertDifferentPasswords.message'),
        [
          {
            text: t('signUp.alertDifferentPasswords.confirmButton'),
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
            label={t('signUp.emailLabel')}
            autoCapitalize="none"
            onChangeText={handleFillField}
          />
          <Input
            name="password"
            label={t('signUp.passwordLabel')}
            secureTextEntry
            onChangeText={handleFillField}
          />
          <Input
            name="confirmPassword"
            label={t('signUp.confirmPasswordLabel')}
            secureTextEntry
            onChangeText={handleFillField}
          />
          <Button
            text={t('signUp.submitButton')}
            style={{ marginTop: normalize(10) }}
            onPress={handleSubmit}
            isLoading={isLoading}
          />
          <Button
            text={t('signUp.cancelButton')}
            clear
            style={{ marginTop: normalize(10) }}
            onPress={() => navigation.goBack()}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
