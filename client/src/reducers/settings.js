import { DISPLAY_NEW_CONV, PANEL_INPUT_CHANGE } from 'src/actions/settings';

const initialState = {
    newConvToggle: false,
    searchFriendInput: '',
    searchConvInput: '',
};

const settings = (state = initialState, action = {}) => {
    switch (action.type) {
    case DISPLAY_NEW_CONV:
        return {
            ...state,
            newConvToggle: !state.newConvToggle,
        };
    case PANEL_INPUT_CHANGE:
        return {
            ...state,
            ...action.payload,
        };
    default:
        return state;
    }
};

export default settings;
