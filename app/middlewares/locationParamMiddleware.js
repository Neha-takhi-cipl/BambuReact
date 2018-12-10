import { getParamId } from 'utils/core';

const locationParamMiddleware = () => (next) => (action) => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    const location = Object.assign({}, action.payload, {
      params: {
        id: getParamId(action.payload.pathname, 'id'),
      },
    });

    action = Object.assign({}, action, { payload: location }); // eslint-disable-line
  }
  return next(action);
};

export default locationParamMiddleware;
