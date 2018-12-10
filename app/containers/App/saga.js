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

  const { chartListFilter } = yield select(makeSelectApp());
  console.log("chartListFilter", chartListFilter);
  let requestURL = '';
  let responseStr = '';
  switch (chartListFilter.id) {
    case 'intc': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=INTC&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'msft': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'aapl': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'nflx': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=NFLX&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'orcl': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=ORCL&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'cmcsa': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=CMCSA&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'goog': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=GOOG&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'luv': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=LUV&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'hog': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=HOG&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'googl': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=GOOGL&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;
    case 'amzn': {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=AMZN&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
      break;

    default: {
      requestURL = `${config.endpoint.timeHighLowVolume}?function=TIME_SERIES_DAILY&symbol=INTC&apikey=4HK3VCU91FQNJEZG'`;
      responseStr = 'Time Series (Daily)';
    }
  }

  const requestOptions = {
    method: 'GET'
  }

  try {
    const response = yield call(request, requestURL, requestOptions);
    const res = response[responseStr];
    yield put(actions.getChartAllDataFullFill(res));
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
