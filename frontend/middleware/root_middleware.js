import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RecordingsMiddleware from './recordings_middleware';

export default applyMiddleware(
  SessionMiddleware,
  RecordingsMiddleware
);
