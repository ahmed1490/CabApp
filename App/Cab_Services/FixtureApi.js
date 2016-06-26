import API from './Api'
const api =  API.create();

export default {

  getGeoPosition: async () => {
    const dataCall = await api.getGeoPosition();
    const data = dataCall.data;
    // const data = require('../Cab_Fixtures/geoPosition.json')
    return {
      ok: true,
      data
    }
  },


  getReverseGeocode: async (params) => {
    const dataCall = await api.getReverseGeocode(params);
    const data = dataCall.data;
    // const data = require('../Cab_Fixtures/reverseGeoCode.json');
    return {
      ok: true,
      data
    }
  },


}
