import { createReducer, createActions } from 'reduxsauce'

// Types and Action Creators
const { Types, Creators } = createActions({
  dataRequest: ['payload'],
  dataSuccess: ['data'],
  deleteRequest: ['payload'],
  deleteSuccess: ['data'],
  submitRequest: ['payload'],
  submitSuccess: ['data']
})

export const DataTypes = Types
export default Creators

// Initial State
const INITIAL_STATE = {
  data: null,
  fetching: false,
  submitResponse: null
}

export const dataRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    fetching: true
  }
}

export const dataSuccess = (state = INITIAL_STATE, { data }) => {
  return {
    ...state,
    data: data,
    fetching: false
  }
}

export const submitRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    fetching: true
  }
}

export const submitSuccess = (state = INITIAL_STATE, { data }) => {
  return {
    ...state,
    submitResponse: data,
    fetching: false
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DATA_REQUEST]: dataRequest,
  [Types.DATA_SUCCESS]: dataSuccess,
  [Types.SUBMIT_REQUEST]: submitRequest,
  [Types.SUBMIT_SUCCESS]: submitSuccess
})
