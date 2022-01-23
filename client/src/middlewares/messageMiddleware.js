import axios from 'axios';

import { GET_ROOM_MESSAGES, updateMsgList } from 'src/actions/message';

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
    default:
        break;
    }
    next(action);
};

export default messageMiddleware;
