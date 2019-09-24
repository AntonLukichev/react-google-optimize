import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers';

const middleWares = [];
const loggerMiddleware = createLogger({ collapsed: true });
middleWares.push(loggerMiddleware);

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
