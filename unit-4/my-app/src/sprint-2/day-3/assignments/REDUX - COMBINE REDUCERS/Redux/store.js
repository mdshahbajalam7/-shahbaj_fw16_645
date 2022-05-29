import { combineReducers, legacy_createStore as  createStore } from 'redux'
import { Authreducer } from '../Auth/reducer'
import { reducer } from './reducer'



const rootreducer = combineReducers({
    auth:Authreducer,
    app:reducer
})


export const store = createStore(rootreducer)