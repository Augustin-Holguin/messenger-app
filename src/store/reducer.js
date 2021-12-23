import { v4 as uuidv4 } from 'uuid';
import { NEW_INPUT, POST_MESSAGE, DELETE_MESSAGE } from 'src/actions';

const initialState = {
  inputText: '',
  user: {
    pseudo: 'John Doe',
  },
  messages: [
    {
      id: 1,
      author: 'John Doe',
      content: 'Hello World !',
    },
  ],
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
        inputText: '',
        messages: [...state.messages, { id: uuidv4(), author: state.user.pseudo, content: state.inputText }],
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.content !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
