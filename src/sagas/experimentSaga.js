import { all, call, put, takeLatest } from 'redux-saga/effects';
import { EXPERIMENT_ACTIONS } from '../actions';
import { getExperiments } from '../firebase/utils';
import { getVariant } from '../components/experiments';

function* fetchExperiments() {
  try {
    const dataExperiments = yield call(getExperiments);
    yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_SUCCES, payload: dataExperiments });
  } catch (e) {
    yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_FAIL, payload: e.message });
  }
}

function* getVariantSaga(action) {
  try {
    const variant = getVariant(action.payload); // TODO refactoring loop  https://ru.redux-saga.js.org/soderzhanie/recipes
    yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENT_VARIANT_SUCCES, payload: variant });
  } catch (e) {
    yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENT_VARIANT_FAIL, payload: e.message });
  }
}

export function* experimentSaga() {
  yield all([
    yield takeLatest(EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_REQUEST, fetchExperiments),
    yield takeLatest(EXPERIMENT_ACTIONS.EXPERIMENT_VARIANT_REQUEST, getVariantSaga),
  ]);
}

export default experimentSaga;
