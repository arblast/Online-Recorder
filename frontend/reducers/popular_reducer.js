import {RECEIVE_POPULAR} from '../actions/recordings_actions';

const noPopular = {
  "Music": [],
  "Lecture": [],
  "Meeting": [],
  "Other": []
}

const PopularReducer = (oldState=noPopular, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_POPULAR:
      return action.popular
    default:
      return oldState;
  }
};

export default PopularReducer;
