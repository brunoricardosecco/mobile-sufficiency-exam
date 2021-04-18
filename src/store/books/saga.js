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

export function* updateBook({ payload }) {
  try {
    console.log({ payload });
    yield put({
      type: booksTypes.UPDATE_BOOK_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: booksTypes.UPDATE_BOOK_ERROR,
    });
  }
}

export function* deleteBook({ payload }) {
  try {
    console.log({ payload });
    yield put({
      type: booksTypes.DELETE_BOOK_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: booksTypes.DELETE_BOOK_ERROR,
    });
  }
}
