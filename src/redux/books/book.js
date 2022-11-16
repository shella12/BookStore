let nextBookid = 0;
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = [];

const booksReducer = (books = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...books,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVE_BOOK:
      return books.filter((book) => book.id !== action.id);
    default:
      return books;
  }
};

export const addBook = (bookTitle, bookAuthor) => {
  nextBookid += 1;
  return {
    id: nextBookid,
    type: ADD_BOOK,
    title: bookTitle,
    author: bookAuthor,
  };
};

export const removeBook = (bookId) => ({
  id: bookId,
  type: REMOVE_BOOK,
});

export default booksReducer;
