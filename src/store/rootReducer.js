import { combineReducers } from 'redux';

import auth from './auth/reducer';

const reducers = combineReducers({
  auth,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
