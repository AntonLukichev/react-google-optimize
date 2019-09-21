import { combineReducers } from 'redux';
import { experimentReducer } from './experiments';

export const rootReducer = combineReducers({
  experiments: experimentReducer,
});

export default rootReducer;
