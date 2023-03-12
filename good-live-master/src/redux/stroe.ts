// import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import { todoApp } from './reducers/index'

// todolist
// export const todoStore = createStore(todoApp, composeWithDevTools())

// goodlive
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools())

export default store
