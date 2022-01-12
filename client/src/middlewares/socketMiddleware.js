/* eslint-disable no-case-declarations */
import { LOGIN_SUBMIT, POST_MESSAGE, messageReceived } from 'src/actions';

let socket;

const socketMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
    case POST_MESSAGE:
        const { inputText, user } = store.getState();

        socket.emit('send_message', {
            author: user.username,
            content: inputText,
        });

        next(action);
        break;
    case LOGIN_SUBMIT:
        socket = window.io('http://localhost:3001');

        socket.on('send_message', (message) => {
            store.dispatch(messageReceived(message));
        });

        next(action);
        break;
    default:
        break;
    }
    next(action);
};

export default socketMiddleware;
