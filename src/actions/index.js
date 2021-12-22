export const NEW_INPUT = 'NEW_INPUT';
export const POST_MESSAGE = 'POST_MESSAGE';

export const updateInput = (payload) => ({
  type: NEW_INPUT,
  payload,
});

export const postMessage = (payload) => ({
  type: POST_MESSAGE,
  payload,
});
