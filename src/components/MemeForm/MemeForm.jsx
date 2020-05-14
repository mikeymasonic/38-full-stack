import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeme } from '../../actions/memeActions';

const MemeForm = () => {
  const dispatch = useDispatch();
  const [top, setTop] = useState('');
  const [image, setImage] = useState('');
  const [bottom, setBottom] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addMeme({ top, image, bottom }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={top} onChange={({ target }) => setTop(target.value)} placeholder="Meme Top Text" />

      <input type="text" value={image} onChange={({ target }) => setImage(target.value)} placeholder="Meme Image URL" />

      <input type="text" value={bottom} onChange={({ target }) => setBottom(target.value)} placeholder="Meme Bottom Text" />

      <button>Create Meme</button>
    </form>
  );
};


export default MemeForm;
