import React, { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getBooks } from '../../store/books/reducer';

import Button from '../../components/Button';
import ListItem from '../../components/BookListItem';
import styles from './styles';

export default function Books({ navigation }) {
  // * STATES
  const { books } = useSelector((state) => state.books);

  // * HOOKS
  const { t } = useTranslation();

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
        text={t('books.addBookButton')}
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
