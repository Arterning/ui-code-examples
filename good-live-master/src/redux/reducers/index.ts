// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

// todolist
// 对外统一的 reducer
// export const todoApp = combineReducers({
//   todos,
//   visibilityFilter,
// })

// goodlive

import { combineReducers } from 'redux'
import city from './city'
import search from './search'
import collect from './collect'
import login from './login'
const rootReducer = combineReducers({
  city,
  search,
  collect,
  login,
})

export default rootReducer
