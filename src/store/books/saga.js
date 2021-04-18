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
    const booksSnapshot = yield firebase.db.collectionGroup('books').get();

    booksSnapshot.forEach((doc) => {
      const { genreId } = doc.data();
      /* const genre = call(getGenre, genreId);
        console.log({ genre }); */

      books.push({
        ...doc.data(),
        id: doc.id,
        releaseDate: dayjs(doc.data().releaseDate).format('DD/MM/YYYY'),
        /* genre: genre.exists ? genre.data().name : 'Erro ao carregar gênero', */
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
