import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './books/books';
import status from './categories/categories';

const store = configureStore({
  reducer: {
    reducer,
    status,
  },
}, applyMiddleware(thunk));

export default store;
