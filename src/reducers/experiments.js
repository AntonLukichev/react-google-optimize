import { EXPERIMENT_ACTIONS } from '../actions';

export const initialState = {
  experiments: null,
  error: '',
};

export function experimentReducer(state = initialState, action) {
  switch (action.type) {
    case EXPERIMENT_ACTIONS.EXPERIMENT_LOAD:
      break;
    case EXPERIMENT_ACTIONS.EXPERIMENT_SUCCES:
      return { ...state, experiments: action.payload, error: '' };
    case EXPERIMENT_ACTIONS.EXPERIMENT_FAIL:
      return { ...state, error: action.payload };
    case EXPERIMENT_ACTIONS.EXPERIMENT_RUN:
      break;
    default:
      break;
  }
  return state;
}
