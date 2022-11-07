const STATUS_CHECK = 'STATUS_CHECK';

const initialState = [];

export default function status(state = initialState, action) {
  switch (action.type) {
    case STATUS_CHECK:
      return [
        'Under construction',
      ];
    default:
      return state;
  }
}

export function checkState() {
  return {
    type: STATUS_CHECK,
  };
}
