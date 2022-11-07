import { createStore, combineReducers } from '@reduxjs/toolkit';
import bookList from './books/books';
import status from './categories/categories';

const rootReducer = combineReducers({ bookList, status });
const store = createStore(rootReducer);

export default store;
