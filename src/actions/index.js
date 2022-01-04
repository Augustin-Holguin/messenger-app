export const NEW_MSG_INPUT = 'NEW_MSG_INPUT';
export const POST_MESSAGE = 'POST_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const DISPLAY_MSG_MENU = 'DISPLAY_MSG_MENU';
export const DISPLAY_LOGIN = 'DISPLAY_LOGIN';
export const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO';

export const updateMsgInput = (payload) => ({
  type: NEW_MSG_INPUT,
  payload,
});

export const postMessage = () => ({
  type: POST_MESSAGE,
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
