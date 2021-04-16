import { all, takeLatest } from "redux-saga/effects";

import { Types as authTypes } from "./auth/reducer";

import * as auth from "./auth/saga";

function* watchAsyncAuth() {
  yield takeLatest(authTypes.LOGIN_ASYNC, auth.signIn);
}

export default function* rootSaga() {
  yield all([watchAsyncAuth()]);
}
