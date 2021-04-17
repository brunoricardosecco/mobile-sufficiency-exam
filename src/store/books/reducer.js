export const Types = {
  ADD_BOOK_ASYNC: 'books/ADD_BOOK_ASYNC',
  ADD_BOOK_SUCCESS: 'books/ADD_BOOK_SUCCESS',
  ADD_BOOK_ERROR: 'books/ADD_BOOK_ERROR',
};

const INITIAL_STATE = {
  isLoading: false,
  books: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_BOOK_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case Types.ADD_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: [...state.books, action.payload.book],
      };
    case Types.ADD_BOOK_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export const addBook = (values) => ({
  type: Types.ADD_BOOK_ASYNC,
  payload: {
    ...values,
  },
});
