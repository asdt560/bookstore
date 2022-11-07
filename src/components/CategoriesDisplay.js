import React from 'react';
import store from '../redux/configureStore';
import { checkState } from '../redux/categories/categories';

export default function categories() {
  const message = store.getState();
  return (
    <section>
      <div>
        {message.status[0]}
      </div>
      <button
        type="button"
        onClick={
          store.dispatch(checkState())
        }
      >
        Check status
      </button>
    </section>
  );
}
