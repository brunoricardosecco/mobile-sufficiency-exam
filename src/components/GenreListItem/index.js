import React, { useCallback } from 'react';
import { View, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { deleteGenre } from '../../store/genres/reducer';

import Button from '../Button';
import { normalize } from '../../helpers';
import { colors, metrics } from '../../constants';
import styles from './styles';

export default function ListItem({ item, navigation }) {
  // * STATES
  const { isLoading } = useSelector((state) => state.genres);

  // * HOOKS
  const { t } = useTranslation();

  // * ACTIONS
  const dispatch = useDispatch();
  const deleteGenreAsync = useCallback(
    (value) => dispatch(deleteGenre(value)),
    [dispatch]
  );

  const cantDeleteItem = () => {
    Alert.alert(
      t('genres.item.cantDelete.title'),
      t('genres.item.cantDelete.message'),
      [
        {
          text: t('genres.item.cantDelete.confirmButton'),
          style: 'default',
        },
      ]
    );
  };

  const handleDeleteGenre = (genreId) => {
    Alert.alert(
      t('genres.item.confirmDelete.title'),
      t('genres.item.confirmDelete.message'),
      [
        {
          text: t('genres.item.confirmDelete.cancelButton'),
          style: 'cancel',
        },
        {
          text: t('genres.item.confirmDelete.confirmButton'),
          style: 'default',
          onPress: () => deleteGenreAsync({ genreId, cantDeleteItem }),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: normalize(metrics.spacing / 2),
        }}
      >
        <Button
          text={t('genres.item.deleteButton')}
          onPress={() => handleDeleteGenre(item.id)}
          style={{ width: '49%', backgroundColor: colors.red }}
          isLoading={isLoading}
        />
        <Button
          text={t('genres.item.editButton')}
          onPress={() => navigation.navigate('EditGenre', { genre: item })}
          style={{ width: '49%', backgroundColor: colors.yellow }}
          textStyle={{ color: colors.black }}
        />
      </View>
    </View>
  );
}
