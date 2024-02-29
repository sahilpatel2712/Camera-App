/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import contactReducer from './contacts/contactsReducer';
import galleryReducer from './gallery/galleryReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  images: galleryReducer,
});

export default rootReducer;
