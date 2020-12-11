import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  getAllJobList,
  getListDetail
} from './jobList';

export function* watchSaga() {
  yield all([
    takeEvery(actionTypes.JOBLIST_ALL, getAllJobList),
    takeEvery(actionTypes.JOBLIST_DETAIL, getListDetail)
    // takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    // takeEvery(actionTypes.AUTH_USERS, authUserSaga)
  ])
}