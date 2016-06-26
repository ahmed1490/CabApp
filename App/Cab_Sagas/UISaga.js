import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import R from 'ramda'
import Types from '../Cab_Actions/Types'
import Actions from '../Cab_Actions/Creators'

// export default (api) => {
  export default function * watcher() {
    // yield [
    //   takeLatest(Types._SET_MAP_REGION_DELTA, setMapRegionDelta)
    // ]
  }

//   return {
//     watcher,
//     setMapRegionDelta
//   }
// }