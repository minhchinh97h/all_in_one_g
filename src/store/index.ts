import { applyMiddleware, createStore } from 'redux'
import Thunk from 'redux-thunk'
import rootReducer from './reducers/root-reducer'

const middlewares = [Thunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
