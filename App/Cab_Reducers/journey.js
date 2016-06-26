import Types from '../Cab_Actions/Types';

// state in Redux
// journey: {...}

const initialState = {
    startInfo: {},
    endInfo: {},
    startPosition: {},
    endPosition: {}
};

export default function setJourney(state = initialState, action) {
  // console.log('SEARCHING for action in journey reducer', action)
  switch (action.type) {
    case Types.SET_JOURNEY_START:
      return {
        ...state,
        startPosition: action.payload.position,
        startInfo: action.payload.placeData
      }

    case Types.SET_JOURNEY_END:
      return {
        ...state,
        endInfo: action.payload,
        endPosition: action.payload
      }

    default:
      return state
  }
}