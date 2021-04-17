import { combineReducers } from 'redux';

import auth, { Types as authTypes } from './auth/reducer';

const reducers = combineReducers({
  auth,
});

const rootReducer = (state, action) => {
  if (action.type === authTypes.SIGN_OUT) {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
