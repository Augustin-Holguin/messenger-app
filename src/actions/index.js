export const NEW_INPUT = 'NEW_INPUT';
export const POST_MESSAGE = 'POST_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const DISPLAY_MSG_MENU = 'DISPLAY_MSG_MENU';

export const updateInput = (payload) => ({
  type: NEW_INPUT,
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
