import isEmpty from 'lodash/isEmpty';

/**
 * Get the value after key index key
 *
 * @param {string} path | path url from 'location' state
 * @returns string | the value after 'key' index
 * @example getParamId('/memberships/manage/team/id/a06p0000003x0IbAAI/players') ~ a06p0000003x0IbAAI
 */
export const getParamId = (path, key = 'id') => {
  const arrayParams = path.split('/').filter((d) => !isEmpty(d));
  const paramIndex = arrayParams.indexOf(key);

  if (paramIndex === -1) {
    return 0;
  }

  return arrayParams[paramIndex + 1];
};
