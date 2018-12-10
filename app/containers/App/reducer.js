
import { fromJS } from 'immutable';
import {
  GET_CHART_DATA_PANDDING,
  GET_CHART_DATA_FULLFILL,
  GET_CHART_DATA_REJECTED,
  SET_ID_TO_STORE
} from './constants';

export const initialState = fromJS(Object.assign(
  {},
  {
    chartLists: {},
    chartListFilter: { id: '' }
  }, {}));

function resetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHART_DATA_PANDDING:
      return state
        .setIn(['chartLists', 'result'], null)
        .setIn(['chartLists', 'isFetching'], true)
        .setIn(['chartLists', 'isError'], false)
    case GET_CHART_DATA_FULLFILL:
      return state
        .setIn(['chartLists', 'result'], action.payload.data)
        .setIn(['chartLists', 'isFetching'], false)
        .setIn(['chartLists', 'isError'], false)
    case GET_CHART_DATA_REJECTED:
      return state
        .setIn(['chartLists', 'result'], null)
        .setIn(['chartLists', 'isFetching'], false)
        .setIn(['chartLists', 'isError'], true)
    case SET_ID_TO_STORE:
      return state
        .setIn(['chartListFilter', 'id'], action.payload.data)
        .setIn(['chartLists', 'isFetching'], true);
    default:
      return state;
  }
}

export default resetPasswordReducer;
