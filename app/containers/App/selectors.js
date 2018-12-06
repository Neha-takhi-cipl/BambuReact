import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.get('app', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by app
 */

const makeSelectApp = () =>
  createSelector(selectAppDomain, substate => substate.toJS());

export { selectAppDomain, makeSelectApp };
