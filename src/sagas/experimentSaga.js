import { call, put, takeLatest } from 'redux-saga/effects';
import { EXPERIMENT_ACTIONS } from '../actions';
import { getExperiments } from '../firebase/utils';

function* fetchExperiments() {
  try {
    const dataExperiments = yield call(getExperiments);
    yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_SUCCES, payload: dataExperiments });
  } catch (e) {
    yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_FAIL, payload: e.message });
  }
}

export function* experimentSaga() {
  yield takeLatest(EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_REQUEST, fetchExperiments);
}

export default experimentSaga;
