export const UPDATE_AUTH_INFO = 'UPDATE_AUTH_INFO';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const EXISTING_USER_TOGGLE = 'EXISTING_USER_TOGGLE';

export const updateAuthInfo = (payload) => ({
    type: UPDATE_AUTH_INFO,
    payload,
});

export const submitRegister = () => ({
    type: SUBMIT_REGISTER,
});

export const existingUserToggle = () => ({
    type: EXISTING_USER_TOGGLE,
});
