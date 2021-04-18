import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Input from '../Input';
import Button from '../Button';
import { normalize } from '../../helpers';

export default function GenreForm({
  handleSubmit,
  isLoading,
  mode = 'create',
  genre = {},
}) {
  //* STATES
  const [fields, setFields] = useState({
    name: genre.name || '',
  });

  // * FUNCTIONS
  const handleFillField = useCallback((name, value) => {
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(() => {
    let error = false;
    const keys = Object.keys(fields);

    keys.forEach((key) => {
      if (fields[key] === '') {
        error = true;
      }
    });

    if (error) {
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

    handleSubmit(fields);
  }, [fields, handleSubmit]);

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Input
        name="name"
        label="Nome"
        autoCapitalize="words"
        onChangeText={handleFillField}
        defaultValue={fields.name}
      />
      <Button
        text={mode === 'create' ? 'Adicionar' : 'Atualizar'}
        style={{ marginTop: normalize(10) }}
        onPress={onSubmit}
        isLoading={isLoading}
      />
    </KeyboardAwareScrollView>
  );
}
