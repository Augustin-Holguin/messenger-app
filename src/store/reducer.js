import { NEW_INPUT, POST_MESSAGE } from 'src/actions';

const initialState = {
  inputText: '',
  messages: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_INPUT:
      return {
        ...state,
        inputText: action.payload,
      };
    case POST_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
