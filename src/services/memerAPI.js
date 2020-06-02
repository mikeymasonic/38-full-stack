export const postMeme = meme => {
  return fetch(`${process.env.API_URL}/api/v1/memes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(meme)
  })
    .then(res => res.json());
};

export const fetchMemes = () => {
  return fetch(`${process.env.API_URL}/api/v1/memes`)
    .then(res => res.json());
};
