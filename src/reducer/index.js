import CreateStore from './CreateStore'
import sagas from '../sagas/sagas'
import { combineReducers } from 'redux'

import { reducer as DataRedux } from './DataRedux'

const reducers = {
  data: DataRedux
}

export default CreateStore(combineReducers(reducers), sagas)
