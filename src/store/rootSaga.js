import { all, takeLatest } from 'redux-saga/effects';

import { Types as authTypes } from './auth/reducer';
import { Types as booksTypes } from './books/reducer';
import { Types as genresTypes } from './genres/reducer';

import * as auth from './auth/saga';
import * as books from './books/saga';
import * as genres from './genres/saga';

function* watchAsyncAuth() {
  yield takeLatest(authTypes.SIGN_IN_ASYNC, auth.signIn);
  yield takeLatest(authTypes.SIGN_UP_ASYNC, auth.signUp);
}

function* watchAsyncBooks() {
  yield takeLatest(booksTypes.ADD_BOOK_ASYNC, books.addBook);
  yield takeLatest(booksTypes.UPDATE_BOOK_ASYNC, books.updateBook);
  yield takeLatest(booksTypes.DELETE_BOOK_ASYNC, books.deleteBook);
  yield takeLatest(booksTypes.GET_BOOKS_ASYNC, books.getBooks);
}

function* watchAsyncGenres() {
  yield takeLatest(genresTypes.ADD_GENRE_ASYNC, genres.addGenre);
  yield takeLatest(genresTypes.UPDATE_GENRE_ASYNC, genres.updateGenre);
  yield takeLatest(genresTypes.DELETE_GENRE_ASYNC, genres.deleteGenre);
  yield takeLatest(genresTypes.GET_GENRES_ASYNC, genres.getGenres);
}

export default function* rootSaga() {
  yield all([watchAsyncAuth(), watchAsyncBooks(), watchAsyncGenres()]);
}
