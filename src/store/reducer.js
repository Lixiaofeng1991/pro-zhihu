import {combineReducers} from 'redux'

import homeReducer from '../pages/home/store'

export default combineReducers({
    home: homeReducer
})