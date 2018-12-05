import { 
GET_CHART_DATA_PANDDING,
GET_CHART_DATA_FULLFILL,
GET_CHART_DATA_REJECTED
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
