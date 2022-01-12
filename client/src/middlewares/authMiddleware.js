import axios from 'axios';

import { SUBMIT_REGISTER, registerSuccess, SUBMIT_LOGIN } from 'src/actions/user';

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
                store.dispatch(registerSuccess(res.data));
            })
            .catch((err) => {
                console.log(err.message);
                // update state with error message to display it
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
