import { put } from 'redux-saga/effects';

import firebase from '../../configs/firebase';
import { Types as authTypes } from './reducer';
import { navigationRef } from '../../routes/NavigationRef';

export function* signIn({ payload }) {
  try {
    yield firebase.auth.signInWithEmailAndPassword(
      payload.email,
      payload.password
    );
    yield put({
      type: authTypes.SIGN_IN_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: authTypes.SIGN_IN_ERROR,
    });
  }
}

export function* signUp({ payload }) {
  try {
    yield firebase.auth.createUserWithEmailAndPassword(
      payload.email,
      payload.password
    );
    yield put({
      type: authTypes.SIGN_UP_SUCCESS,
    });
    navigationRef.current.goBack();
  } catch (error) {
    yield put({
      type: authTypes.SIGN_UP_ERROR,
    });
  }
}
