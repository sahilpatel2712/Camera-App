/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
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

export const removeImage = id => {
  return async (dispatch, getState) => {
    let state = getState();
    let newData = state.images.images.filter(value => value.id !== id);
    await AsyncStorage.setItem('imageList', JSON.stringify(newData));
    dispatch(imageAction(newData));
  };
};
