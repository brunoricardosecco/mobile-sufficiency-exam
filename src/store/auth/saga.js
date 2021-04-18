import { put } from 'redux-saga/effects';
import firebase from '../../configs/firebase';
import { Types as authTypes } from './reducer';

export function* signIn({ payload }) {
  /* const bookRef = yield firebase.db
    .collection('books')
    .doc('MswAkIMU31P3LIR6rxTe')
    .collection('genres')
    .doc()
    .set({
      name: 'genreTest',
    }); */
  try {
    yield put({
      type: authTypes.SIGN_IN_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: authTypes.SIGN_IN_ERROR,
    });
  }
}

export function* signUp({ payload }) {
  try {
    yield put({
      type: authTypes.SIGN_UP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: authTypes.SIGN_UP_ERROR,
    });
  }
}
