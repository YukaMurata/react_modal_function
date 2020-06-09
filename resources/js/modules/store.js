import { createStore } from 'redux';

const initialState = {
  value: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.value++;
    default:
      return state;
  }
};

export const store = createStore(reducer);
