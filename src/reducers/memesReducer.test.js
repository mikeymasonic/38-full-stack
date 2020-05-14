import reducer from './memesReducer';
import { addMeme, setMemes } from '../actions/memeActions';

describe('memes reducer', () => {
  it('handle the ADD_MEME action', () => {
    const state = [];
    const action = addMeme({
      _id: '12345',
      top: 'This is a thing',
      image: 'http://placekitten.com/100/100',
      bottom: 'This is another thing'
    });
    console.log(action);
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
    const action = setMemes([{
      _id: '12345',
      top: 'This is a thing',
      image: 'http://placekitten.com/100/100',
      bottom: 'This is another thing'
    }]);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      _id: '12345',
      top: 'This is a thing',
      image: 'http://placekitten.com/100/100',
      bottom: 'This is another thing'
    }]);
  });
});
