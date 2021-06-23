import { call, put, takeLatest } from 'redux-saga/effects'

import DataActions, { DataTypes } from '../reducer/DataRedux'

import {
  fetchAllData, fetchDeleteData, fetchSubmitData
} from './getApi'

function * getAllData (action) {
  try {
    const data = yield call(fetchAllData, action)
    yield put(DataActions.dataSuccess(data))
  } catch (e) {
    console.log(e)
  }
}

function * deleteData (action) {
  try {
    yield call(fetchDeleteData, action)
  } catch (e) {
    console.log(e)
  }
}

function * submitData (action) {
  try {
    const data = yield call(fetchSubmitData, action)
    yield put(DataActions.submitSuccess(data))
  } catch (e) {
    console.log(e)
  }
}

export default function * sagas () {
  yield takeLatest(DataTypes.DATA_REQUEST, getAllData)
  yield takeLatest(DataTypes.DELETE_REQUEST, deleteData)
  yield takeLatest(DataTypes.SUBMIT_REQUEST, submitData)
}
