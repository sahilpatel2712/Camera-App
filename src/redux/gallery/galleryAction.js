/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deleteImage} from '../../modules/helper';
const imageAction = data => {
  return {
    type: 'IMAGE_ACTION',
    payload: data,
  };
};

export const setImageInitialState = data => {
  return async dispatch => {
    await AsyncStorage.setItem('imageList', JSON.stringify(data));
    dispatch(imageAction(data));
  };
};

export const addImage = data => {
  return async (dispatch, getState) => {
    let state = getState();
    let newData = [data, ...state.images.images];
    await AsyncStorage.setItem('imageList', JSON.stringify(newData));
    dispatch(imageAction(newData));
  };
};

export const removeImage = listId => {
  return async (dispatch, getState) => {
    let state = getState();
    let newData = state.images.images.filter(value => {
      if (listId.includes(value.name)) {
        deleteImage(value.uri).then(res => {
          if (res) {
            return !listId.includes(value.name);
          }
        });
      } else {
        return true;
      }
    });

    await AsyncStorage.setItem('imageList', JSON.stringify(newData));
    dispatch(imageAction(newData));
  };
};
