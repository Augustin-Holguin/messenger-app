export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const DISPLAY_MSG_MENU = 'DISPLAY_MSG_MENU';
export const DISPLAY_LOGIN = 'DISPLAY_LOGIN';
export const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const messageReceived = (payload) => ({
    type: MESSAGE_RECEIVED,
    payload,
});

export const deleteMessage = (element) => ({
    type: DELETE_MESSAGE,
    payload: element,
});

export const displayMsgMenu = (payload) => ({
    type: DISPLAY_MSG_MENU,
    payload,
});

export const displayLogin = () => ({
    type: DISPLAY_LOGIN,
});

export const updateLoginInfo = (email, pwd) => ({
    type: UPDATE_LOGIN_INFO,
    payload: {
        email,
        pwd,
    },
});

export const loginSubmit = () => ({
    type: LOGIN_SUBMIT,
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});
