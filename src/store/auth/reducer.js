export const Types = {
  LOGIN_ASYNC: "auth/LOGIN_ASYNC",
  LOGIN_SUCCESS: "auth/LOGIN_SUCCESS",
  LOGIN_ERROR: "auth/LOGIN_ERROR",
};

const INITIAL_STATE = {
  isLogged: false,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_ASYNC:
      return {
        ...state,
        loading: true,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
      };
    case Types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export const signIn = ({ email, password }) => ({
  type: Types.LOGIN_ASYNC,
  payload: {
    email,
    password,
  },
});
