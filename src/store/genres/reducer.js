export const Types = {
  GET_GENRES_ASYNC: 'genres/GET_GENRES_ASYNC',
  GET_GENRES_SUCCESS: 'genres/GET_GENRES_SUCCESS',
  GET_GENRES_ERROR: 'genres/GET_GENRES_ERROR',

  ADD_GENRE_ASYNC: 'genres/ADD_GENRE_ASYNC',
  ADD_GENRE_SUCCESS: 'genres/ADD_GENRE_SUCCESS',
  ADD_GENRE_ERROR: 'genres/ADD_GENRE_ERROR',

  UPDATE_GENRE_ASYNC: 'genres/UPDATE_GENRE_ASYNC',
  UPDATE_GENRE_SUCCESS: 'genres/UPDATE_GENRE_SUCCESS',
  UPDATE_GENRE_ERROR: 'genres/UPDATE_GENRE_ERROR',

  DELETE_GENRE_ASYNC: 'genres/DELETE_GENRE_ASYNC',
  DELETE_GENRE_SUCCESS: 'genres/DELETE_GENRE_SUCCESS',
  DELETE_GENRE_ERROR: 'genres/DELETE_GENRE_ERROR',
};

const INITIAL_STATE = {
  isLoading: false,
  genres: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_GENRES_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case Types.GET_GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genres: action.payload.genres,
      };
    case Types.GET_GENRES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case Types.ADD_GENRE_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case Types.ADD_GENRE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genres: [action.payload.genre, ...state.genres],
      };
    case Types.ADD_GENRE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case Types.UPDATE_GENRE_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case Types.UPDATE_GENRE_SUCCESS: {
      const { updatedGenre } = action.payload;

      const newList = state.genres.map((genre) => {
        if (genre.id === updatedGenre.id) {
          return updatedGenre;
        }

        return genre;
      });

      return {
        ...state,
        isLoading: false,
        genres: newList,
      };
    }
    case Types.UPDATE_GENRE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case Types.DELETE_GENRE_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case Types.DELETE_GENRE_SUCCESS: {
      const { deletedGenreId } = action.payload;

      const newList = state.genres.filter(
        (genre) => genre.id !== deletedGenreId
      );

      return {
        ...state,
        isLoading: false,
        genres: newList,
      };
    }
    case Types.DELETE_GENRE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export const getGenres = () => ({
  type: Types.GET_GENRES_ASYNC,
});

export const addGenre = (values) => ({
  type: Types.ADD_GENRE_ASYNC,
  payload: {
    ...values,
  },
});

export const updateGenre = (values) => ({
  type: Types.UPDATE_GENRE_ASYNC,
  payload: {
    ...values,
  },
});

export const deleteGenre = (values) => ({
  type: Types.DELETE_GENRE_ASYNC,
  payload: {
    ...values,
  },
});
