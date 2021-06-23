import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

const CreateStore = (reducer, sagas) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(sagas)

  return store
}

export default CreateStore
