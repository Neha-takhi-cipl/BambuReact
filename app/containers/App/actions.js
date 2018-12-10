import {
  GET_CHART_DATA_PANDDING,
  GET_CHART_DATA_FULLFILL,
  GET_CHART_DATA_REJECTED,
  SET_ID_TO_STORE
} from './constants';

export function getChartAllData() {
  return {
    type: GET_CHART_DATA_PANDDING,
  };
}

export function getChartAllDataFullFill(data) {
  return {
    type: GET_CHART_DATA_FULLFILL,
    payload: { data }
  };
}

export function getChartAllDataRejected(errorMessage) {
  return {
    type: GET_CHART_DATA_REJECTED,
    payload: new Error(errorMessage || 'Something went wrong!'),
  };
}

export function setIdToStore(data) {
  console.log("in actionbs", data);
  return {
    type: SET_ID_TO_STORE,
    payload: { data },
  };
}
