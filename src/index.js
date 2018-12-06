import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import configureStore from '../app/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import App from '../app/containers/App';

const initialState = {};
const history = createBrowserHistory();

const store = configureStore(initialState, history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div> 
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </ConnectedRouter> 
  </Provider>,
  document.getElementById('app')
)