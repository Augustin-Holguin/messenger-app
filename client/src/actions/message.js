export const UPDATE_MSG_INPUT = 'UPDATE_MSG_INPUT';
export const POST_MESSAGE = 'POST_MESSAGE';

export const updateMsgInput = (payload) => ({
    type: UPDATE_MSG_INPUT,
    payload,
});

export const postMessage = () => ({
    type: POST_MESSAGE,
});
