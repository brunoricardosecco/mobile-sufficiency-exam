import { combineReducers } from 'redux';

import auth, { Types as authTypes } from './auth/reducer';
import books from './books/reducer';
import genres from './genres/reducer';

const reducers = combineReducers({
  auth,
  books,
  genres,
});

const rootReducer = (state, action) => {
  if (action.type === authTypes.SIGN_OUT) {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
