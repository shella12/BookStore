import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/book';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  booksR: booksReducer,
  categoriesR: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
