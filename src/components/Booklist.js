import React from 'react';
import store from '../redux/configureStore';
import Book from './Book';

export default function Booklist() {
  const object = store.getState();
  return (
    <ul>
      {object.bookList.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}
