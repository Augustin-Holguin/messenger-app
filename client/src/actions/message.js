export const UPDATE_MSG_INPUT = 'UPDATE_MSG_INPUT';
export const GET_ROOM_MESSAGES = 'GET_ROOM_MESSAGES';
export const UPDATE_MSG_LIST = 'UPDATE_MSG_LIST';
export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';

export const updateMsgInput = (payload) => ({
    type: UPDATE_MSG_INPUT,
    payload,
});

export const getRoomMessages = () => ({
    type: GET_ROOM_MESSAGES,
});

export const updateMsgList = (payload) => ({
    type: UPDATE_MSG_LIST,
    payload,
});

export const postMessage = () => ({
    type: POST_MESSAGE,
});

export const postMessageSuccess = (payload) => ({
    type: POST_MESSAGE_SUCCESS,
    payload,
});
