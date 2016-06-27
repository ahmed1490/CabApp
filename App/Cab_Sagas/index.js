import { fork } from 'redux-saga/effects'
import API from '../Cab_Services/Api'
import FixtureAPI from '../Cab_Services/FixtureApi'
import DebugSettings from '../Config/DebugSettings'

import { makeStartup } from './StartupSaga'
import JourneyPointsSaga from './JourneyPointsSaga'
import uiSaga from './UISaga'
import MapPositionSaga from './MapPositionSaga'

// Feed sagas createed API so there's only 1 copy app-wide!
const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

// start the daemons
export default function * root () {
  yield fork(makeStartup, api);
  yield fork(MapPositionSaga(api).watcher);
  yield fork(JourneyPointsSaga(api).watcher);
  // yield fork(uiSaga);
}

//saga > api
//saga > action/creator > action/types > reducers