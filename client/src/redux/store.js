import { createStore, applyMiddleware, compose } from 'redux'
import {reducer} from './reducer/reducer'
import thunk from 'redux-thunk'

const middleware = [thunk ]
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(...middleware)) )

export default store