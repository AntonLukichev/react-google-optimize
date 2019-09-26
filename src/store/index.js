import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

const middleWares = [];
const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});
const sagaMiddleware = createSagaMiddleware();
middleWares.push(loggerMiddleware);
middleWares.push(sagaMiddleware);

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

export default store;
