import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meme from './Meme';
import { getMemes } from '../../selectors/memesSelectors';
import { setMemes } from '../../actions/memeActions';
import styles from './Memes.css';

const Habits = () => {
  const dispatch = useDispatch();
  const memes = useSelector(getMemes);

  useEffect(() => {
    dispatch(setMemes());
  }, []);

  const memeElements = memes.map(meme => (
    <li key={meme._id} className={styles.Memes}>
      <Meme {...meme}  />
    </li>
  ));

  return (
    <ul>
      {memeElements}
    </ul>
  );
};

export default Habits;
