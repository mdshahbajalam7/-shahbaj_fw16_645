import {combineReducers, legacy_createStore as createStore} from "redux"
import {reducer} from "./Components/reducer"
import {todosreducer} from "./Todos/reducer"

const rootReducer = combineReducers({
    reducer,
    todosreducer
})
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

