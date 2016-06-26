import {take, call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Cab_Actions/Types'
import Actions from '../Cab_Actions/Creators'
import I18n from '../I18n/I18n.js'


export default (api) => {

  function * worker () {
    const response = yield call(api.getGeoPosition);
    console.log('getGeoPosition', JSON.stringify(response.data))

    if (response.ok) {
      yield put(Actions.setUserPosition(response.data.coords))
    } else {
      yield put(Actions.userPositionFailed(response.data))
    }
  }

  // function * watcher () {
  //   while (true) {
  //     const action = yield take(Types.TEMPERATURE_REQUEST)
  //     yield call(worker)
  //   }
  // }

  return {
    // watcher,
    worker
  }
}



// function* currentLocation() {
//   const channel = yield actionChannel('location');
//   yield take(channel);

//   let response = yield call(Api.getCurrentPosition);
//   yield put(Actions.setCurrentPosition(response.data));
//   yield put(Actions.setStart(response.data));

//   channel.close();

//   fork(watchCurrentLocation); //check without fork
// }

// function* watchCurrentLocation() {
//   while(true) {
//     delay(1000);
//     let response = yield call(Api.getCurrentPosition);
//     yield put(Actions.setCurrentPosition(response.data));
//   }
// }

