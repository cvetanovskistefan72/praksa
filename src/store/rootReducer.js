import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import FilterReducer from './FilterReducer';






const rootReducer = combineReducers({
    auth:AuthReducer,
    filter:FilterReducer
   
})

export default rootReducer;