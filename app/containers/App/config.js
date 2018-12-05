/**
 * config file
 * 
 */

const BASE_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo';

export default {
  name: 'appConfig',
  reducer: {
    name: 'app',
    path: 'app/lineChart/',
  },
  endpoint: {
    timeHighLowVolume: `${BASE_URL}`,
  },
  constant: {
  }
};
