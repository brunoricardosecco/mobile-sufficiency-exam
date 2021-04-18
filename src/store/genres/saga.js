import { all, put, call } from 'redux-saga/effects';
import dayjs from 'dayjs';
import firebase from '../../configs/firebase';

import { Types as genresTypes } from './reducer';

import { navigationRef } from '../../routes/NavigationRef';

export function* getGenres() {
  try {
    const genres = [];
    const genresSnapshot = yield firebase.db.collectionGroup('genres').get();

    genresSnapshot.forEach((doc) => {
      genres.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    yield put({
      type: genresTypes.GET_GENRES_SUCCESS,
      payload: {
        genres,
      },
    });
  } catch (error) {
    yield put({
      type: genresTypes.GET_GENRES_ERROR,
    });
  }
}

export function* addGenre({ payload }) {
  try {
    const res = yield firebase.db.collection('genres').add({
      ...payload,
    });

    yield put({
      type: genresTypes.ADD_GENRE_SUCCESS,
      payload: {
        genre: {
          name: payload.name,
          id: res.id,
        },
      },
    });
    navigationRef.current.goBack();
  } catch (error) {
    yield put({
      type: genresTypes.ADD_GENRE_ERROR,
    });
  }
}

export function* updateGenre({ payload }) {
  try {
    yield firebase.db.collection('genres').doc(payload.id).update({
      name: payload.name,
    });

    yield put({
      type: genresTypes.UPDATE_GENRE_SUCCESS,
      payload: {
        updatedGenre: payload,
      },
    });
    navigationRef.current.goBack();
  } catch (error) {
    yield put({
      type: genresTypes.UPDATE_GENRE_ERROR,
    });
  }
}

export function* deleteGenre({ payload }) {
  try {
    const booksSnapshot = yield firebase.db
      .collection('books')
      .where('genreId', '==', payload.genreId)
      .get();

    if (!booksSnapshot.empty) {
      payload.cantDeleteItem();
      throw 'ERROR';
    }

    yield firebase.db.collection('genres').doc(payload.genreId).delete();

    yield put({
      type: genresTypes.DELETE_GENRE_SUCCESS,
      payload: {
        deletedGenreId: payload.genreId,
      },
    });
  } catch (error) {
    yield put({
      type: genresTypes.DELETE_GENRE_ERROR,
    });
  }
}
