import * as actionTypes from './actionTypes';

export const setAuthenticated = () => {
  return {
    type: actionTypes.LOGIN_SETAUTH
  };
};

export const unsetAuthenticated = () => {
  return {
    type: actionTypes.LOGIN_UNSETAUTH
  };
};