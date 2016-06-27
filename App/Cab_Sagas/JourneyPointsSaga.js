import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import R from 'ramda'
import Types from '../Cab_Actions/Types'
import Actions from '../Cab_Actions/Creators'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default (api) => {
  function * getMapRegionDelta(latitudeDelta = 0.005) {
    const longitudeDelta = latitudeDelta * ASPECT_RATIO;
    return { latitudeDelta: latitudeDelta, longitudeDelta: longitudeDelta };
  }

  function * getJourneyInfo(position, placeData) {
    if (!placeData) {
      const response = yield call(api.getReverseGeocode, position);
      placeData = response.ok ? response.data : {};
    }
    return {position, placeData};
  }

  function * setJourneyStart(action, isThrottled=true) {
    isThrottled ? yield delay(500) : null;
    const payload = action.payload;
    const [ positionPayload , mapRegionDelta] = yield [
      call(getJourneyInfo, payload.position, payload.placeData),
      call(getMapRegionDelta, payload.latitudeDelta)
    ];
    yield put(Actions.setJourneyStart(positionPayload.position, positionPayload.placeData, mapRegionDelta));
  }

  function * setJourneyEnd(action) {
    const positionPayload = yield call(getJourneyInfo, action.payload.position, action.payload.placeData);
    yield put(Actions.setJourneyEnd(positionPayload.position, positionPayload.placeData));
  }

  function * watcher() {
    yield [
      takeLatest(Types._SET_JOURNEY_START, setJourneyStart),
      takeLatest(Types._SET_JOURNEY_END, setJourneyEnd)
    ];
  }

  return {
    watcher,
    setJourneyStart
  }
}