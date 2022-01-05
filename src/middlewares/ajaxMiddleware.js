import axios from 'axios';
import { LOGIN_SUBMIT, loginSuccess } from 'src/actions';

const ajaxMiddleware = (store) => (next) => (action) => {
  const { email, pwd } = store.getState().login;

  switch (action.type) {
    case LOGIN_SUBMIT:
      axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: {
          email,
          password: pwd,
        },
      })
        .then((res) => {
          const userData = res.data;
          store.dispatch(loginSuccess(userData));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      break;
  }
  next(action);
};

export default ajaxMiddleware;
