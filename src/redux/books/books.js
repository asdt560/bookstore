const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const initialState = [];

export default function bookList(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          completed: false,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

export function addBook(title, author, id) {
  return {
    type: ADD_BOOK,
    id,
    title,
    author,
    completed: false,
  };
}

export function deleteBook(id) {
  return {
    type: ADD_BOOK,
    id,
  };
}
