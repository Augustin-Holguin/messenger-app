import axios from 'axios';
import { GET_ROOMS, updateUserRooms } from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    switch (action.type) {
    case GET_ROOMS:
        axios({
            method: 'get',
            url: 'http://localhost:3000/rooms',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                const rooms = res.data;
                store.dispatch(updateUserRooms(rooms));
            })
            .catch((err) => {
                console.log(err.message);
            });
        break;
    default:
        break;
    }
    next(action);
};

export default userMiddleware;
