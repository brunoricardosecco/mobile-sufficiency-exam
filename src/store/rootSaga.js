import { all, takeLatest } from 'redux-saga/effects';

import { Types as authTypes } from './auth/reducer';
import { Types as booksTypes } from './books/reducer';

import * as auth from './auth/saga';
import * as books from './books/saga';

function* watchAsyncAuth() {
  yield takeLatest(authTypes.SIGN_IN_ASYNC, auth.signIn);
  yield takeLatest(authTypes.SIGN_UP_ASYNC, auth.signUp);
}

function* watchAsyncBooks() {
  yield takeLatest(booksTypes.ADD_BOOK_ASYNC, books.addBook);
}

export default function* rootSaga() {
  yield all([watchAsyncAuth(), watchAsyncBooks()]);
}
