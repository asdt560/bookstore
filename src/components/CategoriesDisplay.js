import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkState } from '../redux/categories/categories';

function Categories() {
  const message = useSelector((state) => state.status);
  const dispatch = useDispatch();
  return (
    <section>
      <div>
        {message[0]}
      </div>
      <button
        type="button"
        onClick={() => { dispatch(checkState()); }}
      >
        Check status
      </button>
    </section>
  );
}

export default Categories;
