import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  isAuth: false
};

const setAuth = (state, action) => {
  return updateObject(state, {
    isAuth: true
  });
}

const unsetAuth = (state, action) => {
  return updateObject(state, {
    isAuth: false
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SETAUTH: return setAuth(state, action);
    case actionTypes.LOGIN_UNSETAUTH: return unsetAuth(state, action);
    default: return state
  }
}

export default reducer;