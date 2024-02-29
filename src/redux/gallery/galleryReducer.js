/* eslint-disable prettier/prettier */
const initialValue = {images: []};

const galleryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'IMAGE_ACTION':
      return {images: action.payload};

    default:
      return state;
  }
};

export default galleryReducer;
