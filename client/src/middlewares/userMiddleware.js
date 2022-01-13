import axios from 'axios';
import { GET_FRIENDS } from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
    const token = JSON.parse(localStorage.getItem('userToken'));

    switch (action.type) {
    case GET_FRIENDS:
        axios({
            method: 'get',
            url: 'http://localhost:3000/friends',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                const friends = res.data;
                console.log(friends);
                // store.dispatch(loginSuccess(userData));
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
