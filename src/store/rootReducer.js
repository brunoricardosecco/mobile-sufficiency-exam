import { combineReducers } from 'redux';

import auth, { Types as authTypes } from './auth/reducer';
import books from './books/reducer';

const reducers = combineReducers({
  auth,
  books,
});

const rootReducer = (state, action) => {
  if (action.type === authTypes.SIGN_OUT) {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
