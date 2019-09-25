import { combineReducers } from 'redux';
import { experimentReducer } from './experimentReducer';

export const rootReducer = combineReducers({
  experiment: experimentReducer,
});

export default rootReducer;
