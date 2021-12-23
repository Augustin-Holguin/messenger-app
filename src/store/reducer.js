import { v4 as uuidv4 } from 'uuid';
import {
  NEW_INPUT,
  POST_MESSAGE,
  DISPLAY_MSG_MENU,
  DELETE_MESSAGE,
} from 'src/actions';

const initialState = {
  inputText: '',
  user: {
    pseudo: 'John Doe',
    avatar: 'https://lh3.googleusercontent.com/zDDxQC7M_4H4Tdg1KKzY5ob7vGdii90EPQ7_X12FNsfRtIwuCiB35QxkRzndEmXegaVhUiCQdSdeSAJRY1_kkoCDKrsmtogSygATSQ=w1400-k',
  },
  messages: [
    {
      id: 1,
      author: 'John Doe',
      content: 'Hello World !',
    },
  ],
  messageMenu: false,
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
        messages: [
          ...state.messages,
          {
            id: uuidv4(),
            author: state.user.pseudo,
            avatar: state.user.avatar,
            content: state.inputText,
          },
        ],
      };
    case DISPLAY_MSG_MENU:
      return {
        ...state,
        messageMenu: action.payload,
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
