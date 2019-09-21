import { EXPERIMENT_ACTIONS } from '../actions';

export const initialState = {
  experiments: null,
};

export function experimentReducer(state = initialState, action) {
  switch (action.type) {
    case EXPERIMENT_ACTIONS.EXPERIMENT_LOAD:
      break;
    case EXPERIMENT_ACTIONS.EXPERIMENT_RUN:
      break;
    default:
      break;
  }
  return state;
}
