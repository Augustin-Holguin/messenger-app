import { UPDATE_AUTH_INFO, EXISTING_USER_TOGGLE } from 'src/actions/user';

const initialState = {
    loggedIn: false, // change to logged
    existingUser: true,
    name: '',
    email: 'bouclierman@herocorp.io',
    password: '',
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
    default:
        return state;
    }
};

export default reducer;
