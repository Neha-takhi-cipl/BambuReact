import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import createHistory from 'history/createBrowserHistory';
import configureStore from '../app/configureStore';
// import rootReducer from './reducers'
import App from '../app/containers/App';

//const store = createStore(rootReducer)
// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)