import { put, select } from 'redux-saga/effects';
import dayjs from 'dayjs';
import firebase from '../../configs/firebase';

import { Types as booksTypes } from './reducer';

import { navigationRef } from '../../routes/NavigationRef';

export function* getBooks() {
  try {
    const books = [];
    const genres = [];
    const booksSnapshot = yield firebase.db.collection('books').get();
    const genresSnapshot = yield firebase.db.collection('genres').get();

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

    yield put({
      type: booksTypes.GET_BOOKS_SUCCESS,
      payload: {
        books,
      },
    });
  } catch (error) {
    yield put({
      type: booksTypes.GET_BOOKS_ERROR,
    });
  }
}

export function* addBook({ payload }) {
  try {
    const res = yield firebase.db.collection('books').add({
      ...payload,
    });

    const { genres } = yield select((state) => state.genres);

    const selectedGenre = genres.find((g) => g.id === payload.genreId);

    yield put({
      type: booksTypes.ADD_BOOK_SUCCESS,
      payload: {
        book: {
          ...payload,
          id: res.id,
          genre: {
            ...selectedGenre,
          },
        },
      },
    });
    navigationRef.current.goBack();
  } catch (error) {
    yield put({
      type: booksTypes.ADD_BOOK_ERROR,
    });
  }
}

export function* updateBook({ payload }) {
  try {
    const { id, ...rest } = payload;
    yield firebase.db
      .collection('books')
      .doc(id)
      .update({
        ...rest,
      });
    yield put({
      type: booksTypes.UPDATE_BOOK_SUCCESS,
      payload: {
        updatedBook: payload,
      },
    });
  } catch (error) {
    yield put({
      type: booksTypes.UPDATE_BOOK_ERROR,
    });
  }
}

export function* deleteBook({ payload }) {
  try {
    yield firebase.db.collection('books').doc(payload.bookId).delete();

    yield put({
      type: booksTypes.DELETE_BOOK_SUCCESS,
      payload: {
        deletedBookId: payload.bookId,
      },
    });
  } catch (error) {
    yield put({
      type: booksTypes.DELETE_BOOK_ERROR,
    });
  }
}
