import { configureStore } from '@reduxjs/toolkit';
import bookList from './books/books';
import status from './categories/categories';

const store = configureStore({
  reducer: {
    bookList,
    status,
  },
});

export default store;
