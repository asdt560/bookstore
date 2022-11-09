import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/books';

export default function Book(props) {
  const propsHolder = props;
  const dispatch = useDispatch();
  return (
    <li className="bookelement" id={propsHolder.book[0]}>
      <div className="leftdiv">
        <div>
          <p>{propsHolder.book[1][0].category}</p>
          <p>{propsHolder.book[1][0].title}</p>
          <p>{propsHolder.book[1][0].author}</p>
        </div>
        <div>
          <button type="button">comments</button>
          <button
            type="button"
            onClick={() => {
              dispatch(deleteBooks(propsHolder.book[0]));
            }}
          >
            remove
          </button>
          <button type="button">edit</button>
        </div>
      </div>
      <div className="rightdiv">
        <div>
          completed:
        </div>
        <div>
          <p>CURRENT CHAPTER</p>
          <p>placeholder</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
}
