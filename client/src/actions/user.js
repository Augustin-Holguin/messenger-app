export const UPDATE_AUTH_INFO = 'UPDATE_AUTH_INFO';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const REGISTER_OR_LOGIN_SUCCESS = 'REGISTER_OR_LOGIN_SUCCESS';
export const EXISTING_USER_TOGGLE = 'EXISTING_USER_TOGGLE';
export const GET_FRIENDS = 'GET_FRIENDS';

export const updateAuthInfo = (payload) => ({
    type: UPDATE_AUTH_INFO,
    payload,
});

export const submitRegister = () => ({
    type: SUBMIT_REGISTER,
});

export const registerOrLoginSuccess = (payload) => ({
    type: REGISTER_OR_LOGIN_SUCCESS,
    payload,
});

export const submitLogin = () => ({
    type: SUBMIT_LOGIN,
});

export const existingUserToggle = () => ({
    type: EXISTING_USER_TOGGLE,
});

export const getFriends = () => ({
    type: GET_FRIENDS,
});
