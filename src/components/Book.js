import React from 'react';

export default function Book(props) {
  const propsHolder = props;
  return (
    <li className="bookelement">
      <div className="leftdiv">
        <div>
          <p>{propsHolder.book.category}</p>
          <p>{propsHolder.book.title}</p>
          <p>{propsHolder.book.author}</p>
        </div>
        <div>
          <button type="button">comments</button>
          <button type="button">remove</button>
          <button type="button">edit</button>
        </div>
      </div>
      <div className="rightdiv">
        <div>
          completed:
          {propsHolder.book.completed}
        </div>
        <div>
          <p>CURRENT CHAPTER</p>
          <p>{propsHolder.book.chapter}</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
}
