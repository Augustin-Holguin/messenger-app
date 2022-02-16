import { UPDATE_MSG_INPUT, UPDATE_MSG_LIST, POST_MESSAGE_SUCCESS } from 'src/actions/message';

const initialState = {
    inputText: '',
    messages: [],
    lastSender: null,
    messageMenu: false,
    loginToggle: false,
};

const messages = (state = initialState, action = {}) => {
    switch (action.type) {
    case UPDATE_MSG_INPUT:
        return {
            ...state,
            inputText: action.payload,
        };
    case UPDATE_MSG_LIST:
        return {
            ...state,
            messages: action.payload,
        };
    case POST_MESSAGE_SUCCESS:
        return {
            ...state,
            inputText: '',
            messages: [...state.messages, ...action.payload],
        };
    default:
        return state;
    }
};

export default messages;
