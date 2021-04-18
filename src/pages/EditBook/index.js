import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import { updateBook } from '../../store/books/reducer';

import BookForm from '../../components/BookForm';
import styles from './styles';

export default function EditBook() {
  // * STATES
  const { isLoading } = useSelector((state) => state.books);
  const route = useRoute();
  const {
    params: { book },
  } = route;

  // * ACTIONS
  const dispatch = useDispatch();
  const updateBookAsync = useCallback(
    (values) => dispatch(updateBook(values)),
    [dispatch]
  );

  // * FUNCTIONS
  const handleSubmit = useCallback(
    (values) => {
      updateBookAsync({ ...values, id: book.id });
    },
    [book.id, updateBookAsync]
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
