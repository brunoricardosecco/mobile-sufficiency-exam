import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Input from '../Input';
import Button from '../Button';
import { normalize } from '../../helpers';

export default function BookForm({
  handleSubmit,
  isLoading,
  mode = 'create',
  book,
}) {
  //* STATES
  const [fields, setFields] = useState({
    name: book.name || '',
    authorsName: book.authorsName || '',
    price: book.price.toString() || '',
    qtdPages: book.qtdPages.toString() || '',
    releaseDate: book.releaseDate || '',
    resume: book.resume || '',
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
      <Input
        name="authorsName"
        label="Nome do autor"
        autoCapitalize="words"
        onChangeText={handleFillField}
        defaultValue={fields.authorsName}
      />
      <Input
        name="price"
        label="Preço"
        keyboardType="numeric"
        onChangeText={handleFillField}
        defaultValue={fields.price}
      />
      <Input
        name="qtdPages"
        label="Quantidade de páginas"
        keyboardType="number-pad"
        onChangeText={handleFillField}
        defaultValue={fields.qtdPages}
      />
      <Input
        name="releaseDate"
        label="Data de lançamento"
        keyboardType="number-pad"
        onChangeText={handleFillField}
        defaultValue={fields.releaseDate}
      />
      <Input
        name="resume"
        label="Resumo do livro"
        onChangeText={handleFillField}
        defaultValue={fields.resume}
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
