import * as actionTypes from './actionTypes';


export const getJobList = () => {
  return {
    type: actionTypes.JOBLIST_ALL
  }
}

export const fetchJobListStart = () => {
  return {
    type: actionTypes.JOBLIST_START
  }
}

export const getAllJobListSuccess = (fetchedJobList) => {
  return {
    type: actionTypes.JOBLIST_SUCCESS,
    fetchedJobList: fetchedJobList
  }
}

export const getJobDetail = (detailId) => {
  return {
    type: actionTypes.JOBLIST_DETAIL,
    detailId: detailId
  }
}

export const getListDetailSuccess = (fetchedJobDetail) => {
  return {
    type: actionTypes.JOBLIST_DETAILSUCCESS,
    fetchedJobDetail: fetchedJobDetail
  }
}

