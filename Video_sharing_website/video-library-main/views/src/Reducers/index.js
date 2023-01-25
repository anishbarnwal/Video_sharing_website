import { combineReducers } from 'redux'

import authReducer from './AuthReducer'
import videoReducer from './VideoReducer'
import alretReducer from './AlretReducer'

export const reducers = combineReducers({ authReducer, videoReducer, alretReducer })