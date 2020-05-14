import { getMemes } from './memesSelectors';

describe('memes selectors', () => {
  it('selects all memes from state', () => {
    const state = {
      memes: [
        { 
          top: 'this thing',
          image: 'http://placekitten.com/100/100',
          bottom: 'other thing'
        },
        { 
          top: 'yet another thing',
          image: 'http://placekitten.com/200/200',
          bottom: 'yes, another thing'
        }
      ]
    };

    const memes = getMemes(state);

    expect(memes).toEqual([
      { 
        top: 'this thing',
        image: 'http://placekitten.com/100/100',
        bottom: 'other thing'
      },
      { 
        top: 'yet another thing',
        image: 'http://placekitten.com/200/200',
        bottom: 'yes, another thing'
      }
    ]);
  });
});
