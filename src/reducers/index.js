import { combineReducers } from 'redux'
import formReducer from './formReducer'
import listReducer from './listReducer'

const rootReducer = combineReducers({
  form: formReducer,
  list: listReducer,
})

export default rootReducer
