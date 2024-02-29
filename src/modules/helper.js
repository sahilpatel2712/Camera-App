/* eslint-disable prettier/prettier */
import RNFS from 'react-native-fs';

export const generateID = () => {
  const idAlphaNum =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';

  let id = '';
  for (let i = 0; i < 16; i += 1) {
    id += idAlphaNum[parseInt(Math.random() * idAlphaNum.length)];
  }
  return id;
};

export const saveImage = async (uri) => {
  if (uri.startsWith('file://')) {
    const pathSplitter = '/';
    const filePath = uri.replace('file://', '');
    const pathSegments = filePath.split(pathSplitter);
    const fileName = pathSegments[pathSegments.length - 1];
    await RNFS.moveFile(filePath, `${RNFS.DocumentDirectoryPath}/${fileName}`);
    uri = `file://${RNFS.DocumentDirectoryPath}/${fileName}`;
    return uri;
  }
};
