import axios from 'axios';

import { SUBMIT_REGISTER, SUBMIT_LOGIN } from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
    const { name, email, password } = store.getState().user;

    switch (action.type) {
    case SUBMIT_REGISTER:
        axios({
            method: 'post',
            url: 'http://localhost:3000/register',
            data: {
                name,
                email,
                password,
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        break;
    case SUBMIT_LOGIN:
        console.log('login submit');
        break;
    default:
        break;
    }
    next(action);
};

export default authMiddleware;
