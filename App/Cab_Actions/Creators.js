import Types from './Types'

const startup = () => ({ type: Types.STARTUP })

const setUserPosition = (position) => ({ type: Types.SET_USER_POSITION, payload: position })
const userPositionFailed = (err) => ({ type: Types.USER_POSITION_FAILED, payload: err })

const _setJourneyStart = (position, placeData, latitudeDelta) =>
			({ type: Types._SET_JOURNEY_START, payload: {position, placeData, latitudeDelta} })
const setJourneyStart = (position, placeData, mapRegionDelta) =>
			({ type: Types.SET_JOURNEY_START, payload: {position, placeData, mapRegionDelta} })

const _setJourneyEnd = (position, placeData) => ({ type: Types._SET_JOURNEY_END, payload: {position, placeData} })
const setJourneyEnd = (position, placeData) => ({ type: Types.SET_JOURNEY_END, payload: {position, placeData} })

const _resetMapPosition = () => ({ type: Types._RESET_MAP_POSITION })

const setOptionsVisible = (isOptionsVisible) => ({ type: Types.SET_OPTIONS_VISIBLE, payload: isOptionsVisible })
const setVisiblePlaceCard = (visibleCard) => ({ type: Types.SET_VISIBLE_PLACE_CARD, payload: visibleCard })

export default {
  startup,

  setUserPosition,
  userPositionFailed,

  _setJourneyStart, //watch by saga
  setJourneyStart,

  _setJourneyEnd, //watch by saga
  setJourneyEnd,

  _resetMapPosition, //watch by saga

  setOptionsVisible,
  setVisiblePlaceCard
}

//component > setstartsaga (has to be one) > region_data to reducer >  (has to be one) sets start and region
// places card select > 
