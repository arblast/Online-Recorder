import { combineReducers } from 'redux';
import SessionReducer from "./session_reducer.js";


export default combineReducers({
  session: SessionReducer
})
