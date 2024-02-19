/* eslint-disable prettier/prettier */
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import contactReducer from './contacts/contactsReducer';
import {thunk} from 'redux-thunk';

const store = createStore(contactReducer, applyMiddleware(thunk));
export default store;
