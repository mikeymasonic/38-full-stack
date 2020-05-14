import { postMeme, fetchMemes } from '../services/memerAPI';

export const ADD_MEME = 'ADD_MEME';
export const addMeme = meme => dispatch => {
  return postMeme(meme)
    .then(createdMeme => {
      dispatch({
        type: ADD_MEME,
        payload: createdMeme
      });
    });
};

export const SET_MEMES = 'SET_MEMES';
export const setMemes = () => dispatch => {
  return fetchMemes()
    .then(memes => {
      dispatch({
        type: SET_MEMES,
        payload: memes
      });
    });
};
