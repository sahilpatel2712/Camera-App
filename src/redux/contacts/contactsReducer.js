/* eslint-disable prettier/prettier */
const initialValue = {contacts: []};

const contactReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'CONTACTS_CHANGE':
      return {contacts: action.payload};

    default:
      return state;
  }
};

export default contactReducer;
