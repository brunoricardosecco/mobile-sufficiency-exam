import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addGenre } from '../../store/genres/reducer';

import GenreForm from '../../components/GenreForm';
import styles from './styles';

export default function AddGenre() {
  // * STATES
  const { isLoading } = useSelector((state) => state.genres);

  // * ACTIONS
  const dispatch = useDispatch();
  const addGenreAsync = useCallback((values) => dispatch(addGenre(values)), [
    dispatch,
  ]);

  // * FUNCTIONS
  const handleSubmit = useCallback(
    (values) => {
      addGenreAsync(values);
    },
    [addGenreAsync]
  );

  return (
    <View style={styles.container}>
      <GenreForm
        mode="create"
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </View>
  );
}
