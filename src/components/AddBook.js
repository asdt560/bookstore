import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  return (
    <form
      className="addform"
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const author = e.target[1].value;
        e.target[0].value = '';
        e.target[1].value = '';
        dispatch(addBook(title, author, uuidv4()));
      }}
    >
      <input type="text" name="title" placeholder="Book Title" required />
      <input type="text" name="author" placeholder="Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddBook;
