import { take, put } from 'redux-saga/effects'
import Types from '../Cab_Actions/Types'
import Actions from '../Cab_Actions/Creators'

export function * makeStartup (api) {
  yield take(Types.STARTUP);
  yield put(Actions._resetMapPosition());
}