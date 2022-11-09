import { /* createAsyncThunk */ createSlice } from '@reduxjs/toolkit';
/*
const getBooks = createAsyncThunk('books/getBooks', async () => fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/B0GjVOSnEbK9WCUJ1ENb/books', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json()));
*/
const booksSlice = createSlice(({
  name: 'books',
  initialState: {
    books: [
      {
        item_id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
    ],
    loading: false,
  },
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    deleteBook(state, action) {
      console.log(action.payload);
      const target = state.books.findIndex((item) => item.item_id === action.payload);
      state.books.splice(target, 1);
    },
  },
}));

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
