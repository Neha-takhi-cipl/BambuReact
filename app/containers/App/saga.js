import { fork, take, call, put, select, all } from 'redux-saga/effects';
import request from 'utils/request';

import * as actions from './actions';
import config from './config';
import {
  GET_CHART_DATA_PANDDING,
} from './constants';
import {
  makeSelectApp,
} from './selectors';

function* getAllAPIData() {
  const requestURL = `${config.endpoint.timeHighLowVolume}`;
  const requestOptions = {
    method: 'GET'
  }
  
  try {
    const response = yield call(request, requestURL, requestOptions);
     yield put(actions.getChartAllDataFullFill(response));
  } catch (error) {
    yield put(actions.getChartAllDataRejected(error.message));
  }
}

function* watchgetAllAPIData() {
  while (true) {
    yield take(GET_CHART_DATA_PANDDING);
    yield fork(getAllAPIData);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield fork(watchgetAllAPIData);
}
