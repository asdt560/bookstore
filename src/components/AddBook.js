import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  return (
    <form
      className="addform"
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const author = e.target[1].value;
        const category = e.target[2].value;
        const id = uuidv4();
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        dispatch(addBooks(
          {
            title,
            author,
            category,
            id,
          },
        ));
      }}
    >
      <input type="text" name="title" placeholder="Book Title" required />
      <input type="text" name="author" placeholder="Author" required />
      <input type="text" name="category" placeholder="Category" required />
      <button className="addbutton" type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddBook;
