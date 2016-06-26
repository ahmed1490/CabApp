import React, { PropTypes, Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
// import PureRenderMixin from 'react-addons-pure-render-mixin';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import Pin from './Pin';

class MapBlock extends React.Component {

  static propTypes = {
    cars: PropTypes.array,
    startPosition: PropTypes.object,
    mapRegionDelta: PropTypes.object,

    setStart: PropTypes.func
  };
  static defaultProps = {};
  state = {};

  componentWillReceiveProps(nextProps) {}

  _onRegionChange(region) {
    this.props.setStart({latitude: region.latitude, longitude: region.longitude}, undefined, region.latitudeDelta);
  }

  _onRegionChangeComplete(region) {}

  renderMarker() {
    const { position } = this.props;
    return(
      <MapView.Marker ref="m1"
        style={{}}
        pinColor={'green'}
        coordinate={{...position}}
      />
    );
  }

  render() {
    const { startPosition, mapRegionDelta } = this.props;

    if( typeof(startPosition.latitude) === 'undefined'
      || typeof(mapRegionDelta.latitudeDelta) === 'undefined'
      ) {
      //fallback to using ip and show google address bar
      return null;
    }

    const mapRegion = { ...startPosition, ...mapRegionDelta };

    return (
      <View style={styles.map}>
        <MapView
          showsCompass={true}
          showsScale={true}
          showsUserLocation={true}
          ref="map"
          style={styles.map}
          region={mapRegion}

          onRegionChange={this._onRegionChange.bind(this)}
          onRegionChangeComplete={this._onRegionChangeComplete.bind(this)}
        >
          {/*this.renderMarker()*/}
          {this.props.cars.map(car => (
            <MapView.Marker.Animated key={car.id}
              coordinate={{latitude: car.latitude, longitude: car.longitude}}
              title={car.duration}
            >
              <Icon name="ios-car" size={24} style={{}} />
            </MapView.Marker.Animated>
          ))}
        </MapView>

      <Pin />
      </View>
    );
  }
};

var styles = StyleSheet.create({
 map: {
  flex: 1
 }
});


export default MapBlock;