import { combineReducers } from 'redux';
import user from './UserReducer';
import flight from './FlightReducer';

const rootReducers = combineReducers({
  user,
  flight
});

export default rootReducers;
