const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const initialState = [
  {
    id: 1,
    title: 'book',
    author: 'author',
    completed: false,
  },
  {
    id: 12,
    title: 'book2',
    author: 'author2',
    completed: false,
  },
  {
    id: 123,
    title: 'book23',
    author: 'author23',
    completed: false,
  },
];

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
    type: REMOVE_BOOK,
    id,
  };
}
