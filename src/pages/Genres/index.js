import React, { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getGenres } from '../../store/genres/reducer';

import Button from '../../components/Button';
import ListItem from '../../components/GenreListItem';
import styles from './styles';

export default function Genres({ navigation }) {
  // * STATES
  const { genres } = useSelector((state) => state.genres);

  // * ACTIONS
  const dispatch = useDispatch();
  const getGenresAsync = useCallback(() => dispatch(getGenres()), [dispatch]);

  // * FUNCTIONS
  useEffect(() => {
    getGenresAsync();
  }, [getGenresAsync]);

  return (
    <View style={styles.container}>
      <Button
        text="Adicione um novo gênero"
        onPress={() => navigation.navigate('AddGenre')}
      />
      <FlatList
        data={genres}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
