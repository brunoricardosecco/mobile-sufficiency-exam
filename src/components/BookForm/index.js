import React, { useState, useCallback, useEffect } from 'react';
import { Alert, View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getGenres } from '../../store/genres/reducer';

import Input from '../Input';
import Button from '../Button';
import { normalize } from '../../helpers';
import { colors, metrics } from '../../constants';

export default function BookForm({
  handleSubmit,
  isLoading,
  mode = 'create',
  book = {},
}) {
  //* STATES
  const [fields, setFields] = useState({
    name: book.name || '',
    authorsName: book.authorsName || '',
    price: book.price?.toString() || '',
    qtdPages: book.qtdPages?.toString() || '',
    releaseDate: book.releaseDate || '',
    resume: book.resume || '',
    genreId: book.genreId || '',
  });
  const { genres } = useSelector((state) => state.genres);

  // * HOOKS
  const { t } = useTranslation();

  // * ACTIONS
  const dispatch = useDispatch();
  const getGenresAsync = useCallback(() => dispatch(getGenres()), [dispatch]);

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
      Alert.alert(t('bookForm.alert.title'), t('bookForm.alert.message'), [
        {
          text: t('bookForm.alert.confirmButton'),
        },
      ]);
      return;
    }

    handleSubmit(fields);
  }, [fields, handleSubmit]);

  useEffect(() => {
    getGenresAsync();
  }, []);

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Input
        name="name"
        label={t('bookForm.nameLabel')}
        autoCapitalize="words"
        onChangeText={handleFillField}
        defaultValue={fields.name}
      />
      <Input
        name="authorsName"
        label={t('bookForm.authorsNameLabel')}
        autoCapitalize="words"
        onChangeText={handleFillField}
        defaultValue={fields.authorsName}
      />
      <Input
        name="price"
        label={t('bookForm.priceLabel')}
        keyboardType="numeric"
        onChangeText={handleFillField}
        defaultValue={fields.price}
      />
      <Input
        name="qtdPages"
        label={t('bookForm.qtdPagesLabel')}
        keyboardType="number-pad"
        onChangeText={handleFillField}
        defaultValue={fields.qtdPages}
      />
      <Input
        name="releaseDate"
        label={t('bookForm.releaseDateLabel')}
        keyboardType="number-pad"
        onChangeText={handleFillField}
        defaultValue={fields.releaseDate}
      />
      <Input
        name="resume"
        label={t('bookForm.resumeLabel')}
        onChangeText={handleFillField}
        defaultValue={fields.resume}
      />
      <View>
        <Text
          style={{
            marginVertical: 5,
            color: colors.white,
          }}
        >
          {t('bookForm.bookGenreLabel')}
        </Text>
        <View
          style={{
            borderRadius: metrics.radius,
            borderColor: colors.primaryBlue,
            borderWidth: 2,
            color: colors.white,
            padding: 0,
          }}
        >
          <Picker
            selectedValue={fields.genreId}
            onValueChange={(value) => handleFillField('genreId', value)}
            dropdownIconColor={colors.primaryBlue}
            style={{
              borderRadius: metrics.radius,
              borderColor: colors.primaryBlue,
              borderWidth: 2,
              color: colors.white,
              padding: 0,
            }}
          >
            <Picker.Item label={t('bookForm.defaultGenreSelector')} value="" />
            {genres.map((genre) => (
              <Picker.Item key={genre.id} label={genre.name} value={genre.id} />
            ))}
          </Picker>
        </View>
      </View>

      <Button
        text={
          mode === 'create'
            ? t('bookForm.createButton')
            : t('bookForm.editButton')
        }
        style={{ marginTop: normalize(10) }}
        onPress={onSubmit}
        isLoading={isLoading}
      />
    </KeyboardAwareScrollView>
  );
}
