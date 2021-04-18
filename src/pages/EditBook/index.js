import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import { addBook } from '../../store/books/reducer';

import BookForm from '../../components/BookForm';
import styles from './styles';

export default function EditBook() {
  // * STATES
  const { isLoading } = useSelector((state) => state.books);
  const route = useRoute();
  const {
    params: { book },
  } = route;
  console.log(book);

  // * ACTIONS
  const dispatch = useDispatch();
  const addBookAsync = useCallback((values) => dispatch(addBook(values)), [
    dispatch,
  ]);

  // * FUNCTIONS
  const handleSubmit = useCallback(
    (values) => {
      addBookAsync(values);
    },
    [addBookAsync]
  );

  return (
    <View style={styles.container}>
      <BookForm
        mode="update"
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        book={book}
      />
    </View>
  );
}
