import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import addBooksApi, { deleteBooksApi, getBooksApi } from '../../Apis/api';

const ADD_BOOK = 'bookstore/booksReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/booksReducer/REMOVE_BOOK';
const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};
export const fetchBooks = createAsyncThunk('FetchBooks', async () => {
  const response = await getBooksApi();
  return response;
});
export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  const response = await addBooksApi(book);
  return response;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (bookId) => {
  const response = await deleteBooksApi(bookId);
  return response;
});

const usersSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      console.log('Inside pending fetch');
      return {
        ...state,
        status: 'pending',
      };
    }).addCase(fetchBooks.fulfilled, (state, action) => {
      const newBookList = Object.entries(action.payload).map((item) => ({
        id: item[0],
        title: item[1][0].title,
        author: item[1][0].author,
      }));
      console.log('Inside success fetch');
      return {
        ...state,
        status: 'success',
        books: newBookList,
      };
    }).addCase(addBook.fulfilled, (state) => {
      console.log('Inside fullfilled addbooks');
      return {
        ...state,
        status: 'idle',
      };
    }).addCase(removeBook.pending, (state) => ({
      ...state,
      status: 'idle',
    }))
      .addCase(removeBook.fulfilled, (state) => {
        console.log('Inside delete');
        return {
          ...state,
          status: 'idle',
        };
      })
      .addCase(removeBook.rejected, (state, action) => {
        console.log('Inside delete');
        return {
          ...state,
          error: action.error.message,
          status: 'failed',
        };
      });
  },
});

// const booksReducer = (books = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return [
//         ...books,
//         {
//           id: action.id,
//           title: action.title,
//           author: action.author,
//         },
//       ];

//     case REMOVE_BOOK:
//       return books.filter((book) => book.id !== action.id);
//     default:
//       return books;
//   }
// };

export default usersSlice.reducer;
