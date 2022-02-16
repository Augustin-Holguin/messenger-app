/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
import axios from 'axios';

import { GET_ROOM_MESSAGES, updateMsgList, POST_MESSAGE, postMessageSuccess } from 'src/actions/message';

const messageMiddleware = (store) => (next) => (action) => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    switch (action.type) {
    case GET_ROOM_MESSAGES:
        axios({
            method: 'get',
            url: `http://localhost:3000/room/${store.getState().settings.convSelected.id}/messages`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                store.dispatch(updateMsgList(res.data));
            })
            .catch((err) => console.log(err));
        break;
    case POST_MESSAGE:
        const room_id = store.getState().settings.convSelected.id;
        const content = store.getState().messages.inputText;

        axios({
            method: 'post',
            url: 'http://localhost:3000/messages',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                room_id,
                content,
            },
        })
            .then((res) => {
                console.log(res.data);
                store.dispatch(postMessageSuccess(Array(res.data)));
            })
            .catch((err) => console.log(err));
        break;
    default:
        break;
    }
    next(action);
};

export default messageMiddleware;
