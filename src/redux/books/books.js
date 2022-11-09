/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/B0GjVOSnEbK9WCUJ1ENb/books', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  return response;
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (parameter) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/B0GjVOSnEbK9WCUJ1ENb/books/${parameter}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  return {
    type: REMOVE_BOOK,
    parameter,
  };
});

export const addBooks = createAsyncThunk('books/addBooks', async (parameters) => {
  const {
    title,
    author,
    category,
    id,
  } = parameters;
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/B0GjVOSnEbK9WCUJ1ENb/books', {
    method: 'POST',
    body: JSON.stringify({
      title,
      author,
      category,
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  return {
    type: ADD_BOOK,
    id,
    title,
    author,
    category,
    completed: false,
  };
});

export function bookList(state, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          category: action.category,
          completed: false,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

export function addBook(title, author, category, id) {
  return addBooks({
    title,
    author,
    category,
    id,
  });
}

export function deleteBook(id) {
  return deleteBooks(id);
}

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });
    builder.addCase(addBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBooks.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBooks.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default booksSlice.reducer;
