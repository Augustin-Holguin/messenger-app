import { UPDATE_MSG_INPUT } from 'src/actions/message';

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
    default:
        return state;
    }
};

export default messages;
