import { takeLatest } from 'redux-saga';
import {take, call, put, select} from 'redux-saga/effects'
import Types from '../Cab_Actions/Types'
import Actions from '../Cab_Actions/Creators'
import JourneyPointsSaga from './JourneyPointsSaga';

export default (api) => {

  function * resetMapPosition() {
    const response = yield call(api.getGeoPosition);

    if (response.ok) {
      yield put(Actions.setUserPosition(response.data.coords))
    } else {
      yield put(Actions.userPositionFailed(response.data))
      return;
    }

    //Fetch position from the state tree and dont use response.data else map doesnt starts at user location
    //Also yield call(JourneyPointsSaga(api).setJourneyStart) instead of yield put(Actions._setJourneyStart(position, undefined));
    //This is needed so that when user switches back location on, the current map events dont ovverride this event.
    const position = yield select((state) => state.ui.user_position);
    yield put(Actions._setJourneyStart(position, undefined));
    // yield call(JourneyPointsSaga(api).setJourneyStart, Actions._setJourneyStart(position, undefined), false);
  }

    // if (response.ok) {
    //   const coords = response.data.coords;
    //   yield put(Actions.setUserPosition(coords))
    //   yield put(Actions._setJourneyStart({ latitude: coords.latitude, longitude: coords.longitude}, undefined));
    // } else {
    //   yield put(Actions.userPositionFailed(response.data))
    //   return;
    // }


  function * watcher() {
    yield* takeLatest(Types._RESET_MAP_POSITION, resetMapPosition);
  }

  return {
    watcher,
    // resetMapPosition
  }
}