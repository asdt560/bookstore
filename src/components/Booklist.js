import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/books';

export default function Booklist() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.reducer.books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const contents = Object.entries(bookList);
  return (
    <ul>
      {contents.map((content) => (
        <Book
          key={content[0]}
          book={content}
        />
      ))}
    </ul>
  );
}
