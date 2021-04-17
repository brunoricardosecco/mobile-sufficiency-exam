import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addBook } from '../../store/books/reducer';

import BookForm from '../../components/BookForm';
import styles from './styles';

export default function AddBook() {
  // * STATES
  const { isLoading } = useSelector((state) => state.books);

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
        mode="create"
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </View>
  );
}
