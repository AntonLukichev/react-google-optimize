import {
  fork,
  call,
  put,
  take,
  takeEvery,
  delay,
} from 'redux-saga/effects';
import { EXPERIMENT_ACTIONS } from '../actions';
import { getExperiments } from '../firebase/utils';

function* fetchExperiments() {
  while (true) {
    try {
      yield take(EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_REQUEST);
      const dataExperiments = yield call(getExperiments);
      yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_SUCCES, payload: dataExperiments });
    } catch (e) {
      yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_FAIL, payload: e.message });
    }
  }
}

function* getVariant(key) {
  const dataLayer = window.dataLayer || [];
  dataLayer.push({ event: 'optimize.activate' });
  yield delay(100);

  for (let i = 0; i < 10; i += 1) {
    try {
      console.log('check', i);
      if (window.google_optimize !== undefined) {
        const variant = window.google_optimize.get(key);

        if (variant === undefined) {
          console.log('experiment not found');
          return null;
        }

        console.log('get experiment', parseInt(variant, 10));
        return parseInt(variant, 10);
      }
      yield delay(200);
    } catch (e) {
      console.log(e);
    }
  }
  throw new Error('google optimize failed');
}

function* getVariantSaga(action) {
  try {
    const { experimentLabel, experimentKey } = action;
    const variant = yield call(getVariant, experimentKey);
    yield put({
      type: EXPERIMENT_ACTIONS.EXPERIMENT_VARIANT_SUCCES,
      experimentLabel,
      experimentKey,
      variant,
    });
  } catch (e) {
    yield put({ type: EXPERIMENT_ACTIONS.EXPERIMENT_VARIANT_FAIL, payload: e.message });
  }
}

export function* experimentSaga() {
  yield fork(fetchExperiments);
  yield takeEvery(EXPERIMENT_ACTIONS.EXPERIMENT_VARIANT_REQUEST, getVariantSaga);
}

export default experimentSaga;
