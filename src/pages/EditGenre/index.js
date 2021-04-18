import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import { updateGenre } from '../../store/genres/reducer';

import GenreForm from '../../components/GenreForm';
import styles from './styles';

export default function EditGenre() {
  // * STATES
  const { isLoading } = useSelector((state) => state.genres);
  const route = useRoute();
  const {
    params: { genre },
  } = route;

  // * ACTIONS
  const dispatch = useDispatch();
  const updateGenreAsync = useCallback(
    (values) => dispatch(updateGenre(values)),
    [dispatch]
  );

  // * FUNCTIONS
  const handleSubmit = useCallback(
    (values) => {
      updateGenreAsync({ ...values, id: genre.id });
    },
    [genre.id, updateGenreAsync]
  );

  return (
    <View style={styles.container}>
      <GenreForm
        mode="update"
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        genre={genre}
      />
    </View>
  );
}
