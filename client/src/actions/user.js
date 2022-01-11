export const UPDATE_AUTH_INFO = 'UPDATE_AUTH_INFO';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const EXISTING_USER_TOGGLE = 'EXISTING_USER_TOGGLE';

export const updateAuthInfo = (payload) => ({
    type: UPDATE_AUTH_INFO,
    payload,
});

export const submitRegister = () => ({
    type: SUBMIT_REGISTER,
});

export const submitLogin = () => ({
    type: SUBMIT_LOGIN,
});

export const existingUserToggle = () => ({
    type: EXISTING_USER_TOGGLE,
});
