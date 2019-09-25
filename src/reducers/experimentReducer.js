import { EXPERIMENT_ACTIONS } from '../actions';

export const initialState = {
  experiments: {},
  error: '',
};

export function experimentReducer(state = initialState, action) {
  switch (action.type) {
    case EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_REQUEST:
      break;
    case EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_SUCCES:
      return { ...state, experiments: action.payload, error: '' };
    case EXPERIMENT_ACTIONS.EXPERIMENTS_LOAD_FAIL:
      return { ...state, error: action.payload };
    case EXPERIMENT_ACTIONS.EXPERIMENT_VARIANT_REQUEST:
      return { ...state };
    case EXPERIMENT_ACTIONS.EXPERIMENT_VARIANT_SUCCES: {
      const { experiments } = state;
      experiments[action.experimentLabel].variant = action.variant;
      return { ...state, experiments };
    }
    case EXPERIMENT_ACTIONS.EXPERIMENT_VARIANT_FAIL:
      return { ...state, test_fail: action.payload };
    case EXPERIMENT_ACTIONS.EXPERIMENT_RUN:
      break;
    default:
      break;
  }
  return state;
}
