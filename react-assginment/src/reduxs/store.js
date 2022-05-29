import { combineReducers,legacy_createStore as createStore,applyMiddleware, compose, } from 'redux'
import { reducerdata } from '../reduxs/reducer'
import thunk from "redux-thunk"
import { reducergetdata } from '../components/reducer';

const rootReducer = combineReducers({
  reducerdata,
  reducergetdata
})
const composeEnhancers =
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
 ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
   // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })
 : compose;
 const enhancer = composeEnhancers(
     applyMiddleware(thunk)
 ) 
export const store = createStore(rootReducer,enhancer)
// reducerdata