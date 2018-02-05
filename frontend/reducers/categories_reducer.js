import {RECEIVE_CATEGORIES} from '../actions/recordings_actions';

const noCat = [];

const CategoriesReducer = (oldState=noCat, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories
    default:
      return oldState;
  }
};

export default CategoriesReducer;
