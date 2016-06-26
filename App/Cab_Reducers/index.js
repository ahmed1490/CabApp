import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutablejs';
// import user from './user'
import ui from './ui'
import journey from './journey'

export default combineReducers({
	// user,
	ui,
	journey
})