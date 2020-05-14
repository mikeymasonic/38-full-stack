import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meme from './Meme';
import { getMemes } from '../../selectors/memesSelectors';
import { setMemes } from '../../actions/memeActions';


const Habits = () => {
  const dispatch = useDispatch();
  const memes = useSelector(getMemes);

  useEffect(() => {
    dispatch(setMemes());
  }, []);

  const habitElements = memes.map(meme => (
    <li key={meme._id}>
      <Meme {...meme}  />
    </li>
  ));

  return (
    <ul>
      {habitElements}
    </ul>
  );
};

export default Habits;
