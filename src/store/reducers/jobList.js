import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  jobList: null,
  jobDetail: null,
  success: false,
  error: false,
  loading: false,
};

const fetchJobListStart = (state, action) => {
  return updateObject(state, {
    error: false,
    loading: true
  });
}

const fetchJobListSuccess = (state, action) => {
  return updateObject(state, {
    jobList: action.fetchedJobList
  });
}

const fetchJobDetailSuccess = (state, action) => {
  return updateObject(state, {
    jobDetail: action.fetchedJobDetail
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JOBLIST_START: return fetchJobListStart(state);
    case actionTypes.JOBLIST_SUCCESS: return fetchJobListSuccess(state, action);
    case actionTypes.JOBLIST_DETAILSUCCESS: return fetchJobDetailSuccess(state, action);
    
    default: return state
  }
}

export default reducer;