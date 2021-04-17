import React from 'react';
import { FlatList, View } from 'react-native';

import Button from '../../components/Button';
import ListItem from './components/ListItem';
import styles from './styles';

export default function Books() {
  const mock = [
    {
      id: '0',
      authorName: 'Cleiton Costa',
      genreId: '1',
      name: 'Primeiro Livro',
      price: 10,
      qtdPages: 100,
      releaseDate: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <View style={styles.container}>
      <Button text="Adicione um novo livro" />
      <FlatList
        data={mock}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
}
