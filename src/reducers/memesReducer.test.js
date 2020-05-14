import reducer from './memesReducer';
import { SET_MEMES, ADD_MEME } from '../actions/memeActions';

describe('memes reducer', () => {
  it('handle the ADD_MEME action', () => {
    const state = [];
    const action = {
      type: ADD_MEME,
      payload: {
        _id: '12345',
        top: 'This is a thing',
        image: 'http://placekitten.com/100/100',
        bottom: 'This is another thing'
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        _id: '12345',
        top: 'This is a thing',
        image: 'http://placekitten.com/100/100',
        bottom: 'This is another thing'
      }
    ]);
  });

  it('handles the SET_MEMES action', () => {
    const state = [];
    const action = {
      type: SET_MEMES,
      payload: [{
        _id: '12345',
        top: 'This is a thing',
        image: 'http://placekitten.com/100/100',
        bottom: 'This is another thing'
      }]
    };

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      _id: '12345',
      top: 'This is a thing',
      image: 'http://placekitten.com/100/100',
      bottom: 'This is another thing'
    }]);
  });
});
