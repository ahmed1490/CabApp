import { createTypes } from 'reduxsauce'

export default createTypes(`
  STARTUP

  SET_USER_POSITION
  USER_POSITION_FAILED

  _SET_JOURNEY_START
  SET_JOURNEY_START

  _SET_JOURNEY_END  
  SET_JOURNEY_END

  SET_OPTIONS_VISIBLE
  SET_VISIBLE_PLACE_CARD
`)

/*
only for watchers
_SOMETHING
*/