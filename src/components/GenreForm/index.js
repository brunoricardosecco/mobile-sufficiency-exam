import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';

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

  // * HOOKS
  const { t } = useTranslation();

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
      Alert.alert(t('genreForm.alert.title'), t('genreForm.alert.message'), [
        {
          text: t('genreForm.alert.confirmButton'),
        },
      ]);
      return;
    }

    handleSubmit(fields);
  }, [fields, handleSubmit]);

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Input
        name="name"
        label={t('genreForm.nameLabel')}
        autoCapitalize="words"
        onChangeText={handleFillField}
        defaultValue={fields.name}
      />
      <Button
        text={
          mode === 'create'
            ? t('genreForm.createButton')
            : t('genreForm.editButton')
        }
        style={{ marginTop: normalize(10) }}
        onPress={onSubmit}
        isLoading={isLoading}
      />
    </KeyboardAwareScrollView>
  );
}
