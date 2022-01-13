export const DISPLAY_NEW_CONV = 'DISPLAY_NEW_CONV';
export const PANEL_INPUT_CHANGE = 'SEARCH_FRIEND_INPUT_CHANGE';

export const displayNewConv = () => ({
    type: DISPLAY_NEW_CONV,
});

export const panelInputChange = (payload) => ({
    type: PANEL_INPUT_CHANGE,
    payload,
});
