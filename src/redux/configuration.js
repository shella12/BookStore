import { configureStore, combineReducers } from '@reduxjs/toolkit';
import usersSlice from './books/book';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  booksR: usersSlice,
  categoriesR: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
