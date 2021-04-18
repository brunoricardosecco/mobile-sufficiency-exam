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

    console.log({ genres });
    yield put({
      type: genresTypes.GET_GENRES_SUCCESS,
      payload: {
        genres,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: genresTypes.GET_GENRES_ERROR,
    });
  }
}

export function* addGenre({ payload }) {
  try {
    console.log('CHEGEEEEEU');
    const res = yield firebase.db.collection('genres').add({
      ...payload,
    });

    console.log({
      id: res.id,
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
    console.log({ payload });
    yield put({
      type: genresTypes.UPDATE_GENRE_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: genresTypes.UPDATE_GENRE_ERROR,
    });
  }
}

export function* deleteGenre({ payload }) {
  try {
    console.log({ payload });
    yield put({
      type: genresTypes.DELETE_GENRE_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: genresTypes.DELETE_GENRE_ERROR,
    });
  }
}
