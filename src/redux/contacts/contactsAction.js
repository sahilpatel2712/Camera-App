/* eslint-disable prettier/prettier */

import AsyncStorage from '@react-native-async-storage/async-storage';
export const contactsAction = data => {
  return {
    type: 'CONTACTS_CHANGE',
    payload: data,
  };
};

export const setInitialState = data => {
  return async dispatch => {
    await AsyncStorage.setItem('contactList', JSON.stringify(data));
    dispatch(contactsAction(data));
  };
};

export const addContact = data => {
  return async (dispatch, getState) => {
    let state = getState();
    let newData = [...state.contacts.contacts, data];
    await AsyncStorage.setItem('contactList', JSON.stringify(newData));
    dispatch(contactsAction(newData));
  };
};

export const removeContact = id => {
  return async (dispatch, getState) => {
    let state = getState();
    let newData = state.contacts.contacts.filter(value => value.id !== id);
    await AsyncStorage.setItem('contactList', JSON.stringify(newData));
    dispatch(contactsAction(newData));
  };
};

export const updateContact = data => {
  return async (dispatch, getState) => {
    let state = getState();
    let contactIndex;
    const newContactList = [...state.contacts.contacts];
    state.contacts.find((value, index) => {
      if (value.id === data.id) {
        contactIndex = index;
        return value;
      }
    });
    newContactList[contactIndex] = data;
    await AsyncStorage.setItem('contactList', JSON.stringify(newContactList));
    dispatch(contactsAction(newContactList));
  };
};
