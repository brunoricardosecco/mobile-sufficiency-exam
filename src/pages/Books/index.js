import React, { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import { getBooks } from '../../store/books/reducer';

import Button from '../../components/Button';
import ListItem from './components/ListItem';
import styles from './styles';

export default function Books({ navigation }) {
  const mock = [
    {
      id: '0',
      authorsName: 'Cleiton Costa',
      genreId: '1',
      name: 'Primeiro Livro',
      price: 10,
      qtdPages: 100,
      releaseDate: dayjs(new Date()).format('DD/MM/YYYY'),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '1',
      authorsName: 'Cleiton Costa',
      genreId: '1',
      name: 'Primeiro Livro',
      price: 10,
      qtdPages: 100,
      releaseDate: dayjs(new Date()).format('DD/MM/YYYY'),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '2',
      authorsName: 'Cleiton Costa',
      genreId: '1',
      name: 'Primeiro LivrAHDOASHDUOAHDUOHASODUHASUHASUDUOADo',
      price: 10,
      qtdPages: 100,
      releaseDate: dayjs(new Date()).format('DD/MM/YYYY'),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
  // * STATES
  const { books } = useSelector((state) => state.books);

  // * ACTIONS
  const dispatch = useDispatch();
  const getBooksAsync = useCallback(() => dispatch(getBooks()), [dispatch]);

  // * FUNCTIONS
  useEffect(() => {
    getBooksAsync();
  }, [getBooksAsync]);

  return (
    <View style={styles.container}>
      <Button
        text="Adicione um novo livro"
        onPress={() => navigation.navigate('AddBook')}
      />
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <ListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
