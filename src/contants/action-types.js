const asyncActionType = type => {
  return {
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`
  };
};

export const FETCH_FLIGHT = asyncActionType('FETCH_FLIGHT');

export const FETCH_USER = asyncActionType('FETCH_USER');
