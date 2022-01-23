import { DISPLAY_NEW_CONV, PANEL_INPUT_CHANGE, UPDATE_CONV_SELECTED } from 'src/actions/settings';

const initialState = {
    newConvToggle: false,
    searchFriendInput: '',
    searchConvInput: '',
    convSelected: {
        isSelected: false,
        id: null,
    },
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
    case UPDATE_CONV_SELECTED:
        return {
            ...state,
            convSelected: {
                isSelected: true,
                id: action.payload,
            },
        };
    default:
        return state;
    }
};

export default settings;
