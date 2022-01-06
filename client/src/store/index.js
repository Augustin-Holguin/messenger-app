/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';

import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
import socketMiddleware from 'src/middlewares/socketMiddleware';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      ajaxMiddleware,
      socketMiddleware,
    ),
  ),
);

export default store;
