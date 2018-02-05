import { FETCH_CATEGORIES, receiveCategories } from '../actions/recordings_actions';
import { fetchCategories } from '../util/recordings_api_util';

const CategoriesMiddleware = store => next => action => {

  let success = (data) => store.dispatch(receiveCategories(data));
  let error = (data) => console.log(data);
  switch(action.type) {
    case FETCH_CATEGORIES:
      fetchCategories(success, error);
      return next(action);
    default:
      return next(action);
  }

}

export default CategoriesMiddleware;
