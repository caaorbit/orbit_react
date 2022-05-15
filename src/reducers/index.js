import { combineReducers } from 'redux'
import counterReducer from './count'
import isLoggedReducer from './isLogged'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer
});

export default allReducers;