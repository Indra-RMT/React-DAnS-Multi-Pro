import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* getAllJobList() {
  yield put(actions.fetchJobListStart());
  try {
    const response = yield axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json');
    const fetchedJobList = [];
    for ( let key in response.data ) {
      fetchedJobList.push( {
        ...response.data[key],
        id: key
      } );
    }
    yield put(actions.getAllJobListSuccess(fetchedJobList));
  } catch (error) {
    // yield put(actions.getAllJobListFailed(error));
  }
}

export function* getListDetail(action) {
  yield put(actions.fetchJobListStart());
  try {
    const response = yield axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${action.detailId}.json`);
    yield put(actions.getListDetailSuccess(response.data));
  } catch (error) {
    // yield put(actions.getListDetailFailed(error));
  }
}