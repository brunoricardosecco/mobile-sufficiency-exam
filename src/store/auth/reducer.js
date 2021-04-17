export const Types = {
  SIGN_IN_ASYNC: 'auth/SIGN_IN_ASYNC',
  SIGN_IN_SUCCESS: 'auth/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'auth/SIGN_IN_ERROR',

  SIGN_UP_ASYNC: 'auth/SIGN_UP_ASYNC',
  SIGN_UP_SUCCESS: 'auth/SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'auth/SIGN_UP_ERROR',

  SIGN_OUT: 'auth/SIGN_OUT',
};

const INITIAL_STATE = {
  isLogged: false,
  isLoading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
      };
    case Types.SIGN_IN_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case Types.SIGN_UP_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case Types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
      };
    case Types.SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}

export const signIn = ({ email, password }) => ({
  type: Types.SIGN_IN_ASYNC,
  payload: {
    email,
    password,
  },
});

export const signUp = ({ email, password, confirmPassword }) => ({
  type: Types.SIGN_UP_ASYNC,
  payload: {
    email,
    password,
    confirmPassword,
  },
});

export const signOut = () => ({
  type: Types.SIGN_OUT,
});
