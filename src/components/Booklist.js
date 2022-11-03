import React from 'react';
import Book from './Book';

export default function Booklist(props) {
  const propsHolder = props;
  return (
    <ul>
      {propsHolder.books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}
