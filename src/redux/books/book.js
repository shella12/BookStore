import { v4 as uuidv4 } from 'uuid';

let nextBookId = 0;
const ADD_BOOK = 'bookstore/booksReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/booksReducer/REMOVE_BOOK';
const initialState = [
  {
    id: uuidv4(),
    title: 'book1',
    author: 'John doe',
  },
  {
    id: uuidv4(),
    title: 'book2',
    author: 'John doe2',
  },
];

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
  nextBookId = uuidv4();
  return {
    id: nextBookId,
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
