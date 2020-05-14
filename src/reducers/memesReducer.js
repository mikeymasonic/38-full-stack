import { ADD_MEME, SET_MEMES } from '../actions/memeActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_MEME:
      return [...state, action.payload];
    case SET_MEMES:
      return action.payload;
    default:
      return state;
  }
}
