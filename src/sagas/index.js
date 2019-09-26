import { all } from 'redux-saga/effects';
import { experimentSaga } from './experimentSaga';

export function* rootSaga() {
  yield all([
    experimentSaga(),
  ]);
}

export default rootSaga;
