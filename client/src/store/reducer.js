// import { v4 as uuidv4 } from 'uuid';
import {
    NEW_MSG_INPUT,
    DISPLAY_MSG_MENU,
    DELETE_MESSAGE,
    DISPLAY_LOGIN,
    UPDATE_LOGIN_INFO,
    LOGIN_SUCCESS,
    MESSAGE_RECEIVED,
} from 'src/actions';

const initialState = {
    inputText: '',
    // user: {
    //     logged: false,
    //     existingUser: undefined,
    //     username: null,
    // },
    messages: [],
    lastSender: null,
    messageMenu: false,
    loginToggle: false,
    // login: {
    //     email: 'bouclierman@herocorp.io',
    //     pwd: '',
    // },
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case NEW_MSG_INPUT:
        return {
            ...state,
            inputText: action.payload,
        };
    case MESSAGE_RECEIVED:
        return {
            ...state,
            inputText: '',
            messages: [
                ...state.messages,
                {
                    ...action.payload,
                    isGroupMsg: state.lastSender === action.payload.author,
                },
            ],
            lastSender: action.payload.author,
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
    case DISPLAY_LOGIN:
        return {
            ...state,
            loginToggle: !state.loginToggle,
        };
    case UPDATE_LOGIN_INFO:
        return {
            ...state,
            login: {
                email: action.payload.email !== null ? action.payload.email : state.login.email,
                pwd: action.payload.pwd !== null ? action.payload.pwd : state.login.pwd,
            },
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            login: {
                email: '',
                pwd: '',
            },
            loginToggle: false,
            user: {
                ...action.payload,
            },
        };
    default:
        return state;
    }
};

export default reducer;
