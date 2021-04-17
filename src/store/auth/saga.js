import { put } from 'redux-saga/effects';

import { Types as authTypes } from './reducer';

export function* signIn({ payload }) {
  try {
    console.log({ payload });
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
    console.log({ payload });
    yield put({
      type: authTypes.SIGN_UP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: authTypes.SIGN_UP_ERROR,
    });
  }
}
