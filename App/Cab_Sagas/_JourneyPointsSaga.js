import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import R from 'ramda'
import Types from '../Cab_Actions/Types'
import Actions from '../Cab_Actions/Creators'

export default (api) => {

  function * setJourneyInfo(action) {
    // console.log('debousning jouney info', action.type === Types._SET_JOURNEY_START)
    action.type === Types._SET_JOURNEY_START ? yield delay(500) : null;

    let { position, placeData } = action.payload;

    if (!placeData) {
      const response = yield call(api.getReverseGeocode, position);
      placeData = response.ok ? response.data : {};
    }

    console.log('debousning jouney info DONE', position, placeData)

    if (!R.isEmpty(placeData)) {
      yield action.type === Types._SET_JOURNEY_START
          ? put(Actions.setJourneyStart(position, placeData))
          : put(Actions.setJourneyEnd(placeData));
    }
  }
  
  function * watcher() {
    yield [
      takeLatest(Types._SET_JOURNEY_START, setJourneyInfo),
      takeLatest(Types._SET_JOURNEY_END, setJourneyInfo)
    ];
  }

  return {
    watcher,
    setJourneyInfo
  }
}