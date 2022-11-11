import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/books';

export default function Book(props) {
  const propsHolder = props;
  const dispatch = useDispatch();
  return (
    <li className="bookelement" id={propsHolder.book[0]}>
      <div className="leftdiv">
        <div className="infodiv">
          <p className="category">{propsHolder.book[1][0].category}</p>
          <p className="title">{propsHolder.book[1][0].title}</p>
          <p className="author">{propsHolder.book[1][0].author}</p>
        </div>
        <div className="buttondiv">
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => {
              dispatch(deleteBooks(propsHolder.book[0]));
            }}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="rightdiv">
        <div className="completebar">
          <div className="circle" />
          <div className="completediv">
            <p className="completenumber">0%</p>
            <p className="completetext">Completed</p>
          </div>
        </div>
        <span className="divider" />
        <div className="chapterdiv">
          <div className="chaptername">
            <p className="current">CURRENT CHAPTER</p>
            <p className="nameofcurrent">Chapter 1</p>
          </div>
          <button className="bookbutton" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
}
