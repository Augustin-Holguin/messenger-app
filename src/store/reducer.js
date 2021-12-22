const initialState = {
  inputText: '',
  messages: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
