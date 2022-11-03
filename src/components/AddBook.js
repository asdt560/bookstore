import React from 'react';

export default function AddBook() {
  return (
    <form className="addform">
      <input type="text" name="book" placeholder="Book Title" />
      <input type="text" name="author" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}
