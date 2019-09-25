import { combineReducers } from 'redux';
import { experimentReducer } from './experimentReducer';

export const rootReducer = combineReducers({
  experiments: experimentReducer,
});

export default rootReducer;
