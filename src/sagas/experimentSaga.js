import { call, put, takeLatest } from 'redux-saga/effects';
import { EXPERIMENT_ACTIONS } from '../actions';

const fetchExperiment = () => {
  console.log('saga fetchExperiment');
  return {
    key: 'KPOowLzGS42RosiLqFKuIA',
    name: 'test_experiment1',
    type: 0,
  };
};

function* fetchExperiments() {
  try {
    const dataExperiments = yield call(fetchExperiment);
    yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENT_SUCCES, payload: dataExperiments });
  } catch (e) {
    yield put({type: EXPERIMENT_ACTIONS.EXPERIMENT_FAIL, payload: e.message});
  }
}

export function* experimentSaga() {
  yield takeLatest(EXPERIMENT_ACTIONS.EXPERIMENT_LOAD, fetchExperiments);
}

export default experimentSaga;
