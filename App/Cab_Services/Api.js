// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Reactotron from 'reactotron'
import RNGeocoder from 'react-native-geocoder';

// our "constructor"
const create = (baseURL = 'http://openweathermap.org/data/2.1') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000 // arriving in RN 0.25 though!
  })

  const addMonitor = api.addMonitor((response) => {
    Reactotron.apiLog(response) // Monitors are called passively after every request.
  })


  // const getCity = (city) => api.get('/find/name', {q: city});

  const getGeoPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve({ ok: true, data: position }),
        (error) => resolve({ problem: true, data: error }),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    });
  };

  const getReverseGeocode = (params) => {
    return new Promise((resolve, reject) => {
      
      const position = {
        lat: params.latitude, 
        lng: params.longitude
      }

      RNGeocoder.geocodePosition(position)
      .then(data => {
        const placeData = {
          name: data[0].formattedAddress,
          locality: data[0].locality
        };
        resolve({ ok: true, data: placeData });
      })
      .catch(err => resolve({ problem: true, data: err }));

    })
  };


  return {
    // getCity,
    getGeoPosition,
    getReverseGeocode,

    // additional utilities
    addMonitor
  }
}

export default {
  create
}
