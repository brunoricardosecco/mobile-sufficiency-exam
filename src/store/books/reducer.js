export const Types = {
  ADD_BOOK_ASYNC: 'books/ADD_BOOK_ASYNC',
  ADD_BOOK_SUCCESS: 'books/ADD_BOOK_SUCCESS',
  ADD_BOOK_ERROR: 'books/ADD_BOOK_ERROR',

  UPDATE_BOOK_ASYNC: 'books/UPDATE_BOOK_ASYNC',
  UPDATE_BOOK_SUCCESS: 'books/UPDATE_BOOK_SUCCESS',
  UPDATE_BOOK_ERROR: 'books/UPDATE_BOOK_ERROR',

  DELETE_BOOK_ASYNC: 'books/DELETE_BOOK_ASYNC',
  DELETE_BOOK_SUCCESS: 'books/DELETE_BOOK_SUCCESS',
  DELETE_BOOK_ERROR: 'books/DELETE_BOOK_ERROR',
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
        books: [action.payload.book, ...state.books],
      };
    case Types.ADD_BOOK_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case Types.UPDATE_BOOK_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case Types.UPDATE_BOOK_SUCCESS: {
      const { updatedBook } = action.payload;

      const newList = state.books.map((book) => {
        if (book.id === updatedBook) {
          return updatedBook;
        }

        return book;
      });

      return {
        ...state,
        isLoading: false,
        books: newList,
      };
    }
    case Types.UPDATE_BOOK_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case Types.DELETE_BOOK_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case Types.DELETE_BOOK_SUCCESS: {
      const { deletedBookId } = action.payload;

      const newList = state.books.filter((book) => book.id === deletedBookId);

      return {
        ...state,
        isLoading: false,
        books: newList,
      };
    }
    case Types.DELETE_BOOK_ERROR:
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

export const updateBook = (values) => ({
  type: Types.UPDATE_BOOK_ASYNC,
  payload: {
    ...values,
  },
});

export const deleteBook = (values) => ({
  type: Types.DELETE_BOOK_ASYNC,
  payload: {
    ...values,
  },
});
