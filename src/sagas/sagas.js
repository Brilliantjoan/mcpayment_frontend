import { call, put, takeLatest } from 'redux-saga/effects'

import DataActions, { DataTypes } from '../reducer/DataRedux'

import {
  fetchAllData
} from './getApi'

function * getAllData (action) {
  try {
    const data = yield call(fetchAllData, action)
    yield put(DataActions.dataSuccess(data))
  } catch (e) {
    console.log(e)
  }
}

export default function * sagas () {
  yield takeLatest(DataTypes.DATA_REQUEST, getAllData)
}
