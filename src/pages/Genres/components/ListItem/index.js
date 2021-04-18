import React, { useCallback } from 'react';
import { View, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { deleteGenre } from '../../../../store/genres/reducer';

import Button from '../../../../components/Button';
import { normalize } from '../../../../helpers';
import { colors, metrics } from '../../../../constants';
import styles from './styles';

export default function ListItem({ item, navigation }) {
  // * STATES
  const { isLoading } = useSelector((state) => state.genres);

  // * ACTIONS
  const dispatch = useDispatch();
  const deleteGenreAsync = useCallback(
    (value) => dispatch(deleteGenre(value)),
    [dispatch]
  );

  const handleDeleteGenre = (genreId) => {
    Alert.alert(
      'Confirmação',
      'Você tem certeza que deseja excluir esse item?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          style: 'default',
          onPress: () => deleteGenreAsync(genreId),
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
          text="Excluir"
          onPress={() => handleDeleteGenre(item.id)}
          style={{ width: '49%', backgroundColor: colors.red }}
          isLoading={isLoading}
        />
        <Button
          text="Editar"
          onPress={() => navigation.navigate('EditGenre', { genre: item })}
          style={{ width: '49%', backgroundColor: colors.yellow }}
          textStyle={{ color: colors.black }}
        />
      </View>
    </View>
  );
}
