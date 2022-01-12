import axios from 'axios';

import { SUBMIT_REGISTER, registerOrLoginSuccess, SUBMIT_LOGIN } from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
    const { username, email, password } = store.getState().user;

    switch (action.type) {
    case SUBMIT_REGISTER:
        axios({
            method: 'post',
            url: 'http://localhost:3000/register',
            data: {
                username,
                email,
                password,
            },
        })
            .then((res) => {
                store.dispatch(registerOrLoginSuccess(res.data));
                const { user } = store.getState();
                localStorage.setItem('userToken', JSON.stringify(user.token));
            })
            .catch((err) => {
                console.log(err.message);
                // update state with error message to display it
            });
        break;
    case SUBMIT_LOGIN:
        axios({
            method: 'post',
            url: 'http://localhost:3000/login',
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                store.dispatch(registerOrLoginSuccess(res.data));
                const { user } = store.getState();
                localStorage.setItem('userToken', JSON.stringify(user.token));
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

export default authMiddleware;
