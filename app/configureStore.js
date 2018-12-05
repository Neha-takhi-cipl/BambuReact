/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { Iterable, fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
// import filtersReducer from './factories/filters/reducer';
// import treecheckboxReducer from './factories/treecheckbox/reducer';
// import normalizrMiddleware from './middlewares/normalizrMiddleware';
// import locationParamMiddleware from './middlewares/locationParamMiddleware';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [
        sagaMiddleware,
        routerMiddleware(history),
        // locationParamMiddleware,
        // normalizrMiddleware,
    ];

    if (process.env.NODE_ENV === 'development') {
        const { createLogger } = require('redux-logger'); // eslint-disable-line
        const logger = createLogger({
            // Transform Immutable objects into JSON
            stateTransformer: state => {
                const newState = {};
                const stateObj = state.toObject();

                for (const i of Object.keys(stateObj)) { // eslint-disable-line
                    if (Iterable.isIterable(stateObj[i])) {
                        newState[i] = stateObj[i].toJS();
                    } else {
                        newState[i] = stateObj[i];
                    }
                }

                return newState;
            },
        });
        middlewares.push(logger);
    }

    const enhancers = [applyMiddleware(...middlewares)];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle, indent */
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
            typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
                // Prevent recomputing reducers for `replaceReducer`
                shouldHotReload: false,
            })
            : compose;
    /* eslint-enable */

    const store = createStore(
        createReducer(),
        fromJS(initialState),
        composeEnhancers(...enhancers),
    );

    console.log(store.getState().get("route").toJS());
    // // Extensions
    // store.runSaga = sagaMiddleware.run;
    // store.injectedReducers = {
    //   globalFilters: filtersReducer,
    //   treecheckbox: treecheckboxReducer,
    // }; // Reducer registry
    // store.injectedSagas = {}; // Saga registry

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }

    return store;
}
