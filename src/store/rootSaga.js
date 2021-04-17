import { all, takeLatest } from 'redux-saga/effects';

import { Types as authTypes } from './auth/reducer';

import * as auth from './auth/saga';

function* watchAsyncAuth() {
  yield takeLatest(authTypes.SIGN_IN_ASYNC, auth.signIn);
  yield takeLatest(authTypes.SIGN_UP_ASYNC, auth.signUp);
}

export default function* rootSaga() {
  yield all([watchAsyncAuth()]);
}
