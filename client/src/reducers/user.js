import { UPDATE_AUTH_INFO, EXISTING_USER_TOGGLE, REGISTER_OR_LOGIN_SUCCESS } from 'src/actions/user';

const initialState = {
    logged: true,
    existingUser: true,
    username: 'gus',
    email: 'gus@gmail.com',
    password: '',
    token: '',
    friends: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case UPDATE_AUTH_INFO:
        return {
            ...state,
            ...action.payload,
        };
    case EXISTING_USER_TOGGLE:
        return {
            ...state,
            existingUser: !state.existingUser,
        };
    case REGISTER_OR_LOGIN_SUCCESS:
        return {
            ...state,
            ...action.payload,
        };
    default:
        return state;
    }
};

export default reducer;
