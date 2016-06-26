import { take, select, call, put } from 'redux-saga/effects'
import Types from '../Cab_Actions/Types'
import Actions from '../Cab_Actions/Creators'
import UserPositionSaga from './UserPositionSaga';
import JourneyPointsSaga from './JourneyPointsSaga'

import { Dimensions } from 'react-native';

export function * makeStartup (api) {
  yield take(Types.STARTUP);

  yield call(UserPositionSaga(api).worker);

  const position = yield select((state) => state.ui.user_position);
  yield put(Actions._setJourneyStart(position, undefined));
}