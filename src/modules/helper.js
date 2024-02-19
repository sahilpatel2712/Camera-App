/* eslint-disable prettier/prettier */
export const generateID = () => {
  const idAlphaNum =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';

  let id = '';
  for (let i = 0; i < 16; i += 1) {
    id += idAlphaNum[parseInt(Math.random() * idAlphaNum.length)];
  }
  return id;
};
