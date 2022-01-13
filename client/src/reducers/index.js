import { combineReducers } from 'redux';

import user from './user';
import messages from './messages';
import settings from './settings';

const rootReducer = combineReducers({
    user,
    messages,
    settings,
});

export default rootReducer;
