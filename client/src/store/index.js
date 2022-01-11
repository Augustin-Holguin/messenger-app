/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';

// import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
// import socketMiddleware from 'src/middlewares/socketMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            authMiddleware,
        //     ajaxMiddleware,
        //     socketMiddleware,
        ),
    ),
);

export default store;
