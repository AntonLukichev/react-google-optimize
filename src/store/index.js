import { createStore } from 'redux';
import { rootReducer, initialState } from '../reducers';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, initialState);
