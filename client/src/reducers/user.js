import {
    UPDATE_AUTH_INFO, EXISTING_USER_TOGGLE, REGISTER_OR_LOGIN_SUCCESS, UPDATE_USER_ROOMS,
} from 'src/actions/user';

const initialState = {
    logged: false,
    existingUser: true,
    // id: null,
    username: 'gus',
    email: 'gus@gmail.com',
    password: '',
    token: '',
    friends: [{ name: 'AH' }, { name: 'Oh' }],
    rooms: [],
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
    case UPDATE_USER_ROOMS:
        return {
            ...state,
            rooms: action.payload,
        };
    default:
        return state;
    }
};

export default reducer;
