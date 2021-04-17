import { put } from 'redux-saga/effects';

import { Types as authTypes } from './reducer';

export function* signIn({ payload }) {
  try {
    yield put({
      type: authTypes.LOGIN_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: authTypes.LOGIN_ERROR,
    });
  }
}
