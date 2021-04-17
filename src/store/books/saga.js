import { put } from 'redux-saga/effects';

import { Types as booksTypes } from './reducer';

export function* addBook({ payload }) {
  try {
    console.log({ payload });
    yield put({
      type: booksTypes.ADD_BOOK_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: booksTypes.ADD_BOOK_ERROR,
    });
  }
}
