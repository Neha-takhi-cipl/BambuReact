import { normalize } from 'normalizr';

const normalizrMiddleware = () => (next) => (action) => {
  if (action.hasOwnProperty('schemas')) { // eslint-disable-line
    const normalized = normalize(action.payload, action.schemas);
    action = Object.assign({}, action, { payload: normalized }); // eslint-disable-line
  }

  return next(action);
};

export default normalizrMiddleware;
