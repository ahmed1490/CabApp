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

  function * getJourneyInfo(payload) {
    if (!payload.placeData) {
      const response = yield call(api.getReverseGeocode, payload.position);
      console.log('getReverseGeocode', JSON.stringify(response.data))
      payload.placeData = response.ok ? response.data : {};
    }
    return payload;
  }

  function * setJourneyStart(action) {
    yield delay(500);
    const [ positionPayload , mapRegionDelta] = yield [
      call(getJourneyInfo, action.payload),
      call(getMapRegionDelta, action.payload.latitudeDelta)
    ];
    yield put(Actions.setJourneyStart(positionPayload.position, positionPayload.placeData, mapRegionDelta));
  }

  function * setJourneyEnd(action) {
    const positionPayload = yield call(getJourneyInfo, action.payload);
    yield put(Actions.setJourneyEnd(positionPayload.position, positionPayload.placeData));
  }

  function * watcher() {
    yield [
      takeLatest(Types._SET_JOURNEY_START, setJourneyStart),
      takeLatest(Types._SET_JOURNEY_END, setJourneyEnd)
    ];
  }

  return {
    watcher
  }
}