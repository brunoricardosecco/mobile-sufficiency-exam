import { all, put, call } from 'redux-saga/effects';
import dayjs from 'dayjs';
import firebase from '../../configs/firebase';

import { Types as booksTypes } from './reducer';

import { navigationRef } from '../../routes/NavigationRef';

function* getGenre(genreId) {
  const genreRef = firebase.db.collection('genres');
  const genre = yield call(genreRef.doc(genreId).get);
  return genre.data();
}

export function* getBooks() {
  try {
    const books = [];
    const genres = [];
    const booksSnapshot = yield firebase.db.collectionGroup('books').get();
    const genresSnapshot = yield firebase.db.collectionGroup('genres').get();

    genresSnapshot.forEach((doc) => {
      genres.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    booksSnapshot.forEach((doc) => {
      const { genreId } = doc.data();
      const genre = genres.find((g) => g.id === genreId);

      books.push({
        ...doc.data(),
        id: doc.id,
        releaseDate: dayjs(doc.data().releaseDate).format('DD/MM/YYYY'),
        genre,
      });
    });

    console.log({ books });
    yield put({
      type: booksTypes.GET_BOOKS_SUCCESS,
      payload: {
        books,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: booksTypes.GET_BOOKS_ERROR,
    });
  }
}

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
