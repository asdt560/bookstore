import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

export default function Booklist() {
  const bookList = useSelector((state) => state.reducer.books);
  console.log(bookList);
  return (
    <ul>
      {bookList.map((book) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
    </ul>
  );
}
