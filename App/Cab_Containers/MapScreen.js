// An All Components Screen is a great way to dev and quick-test components
import React, { PropTypes } from 'react'
import { View, ScrollView, Text, LayoutAnimation, DeviceEventEmitter } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Cab_Actions/Creators'
// import Routes from '../Navigation/Routes'
// import { Metrics } from '../Themes'

// internal components
import MapBlock from '../Cab_Components/Map/MapBlock';
import MyLocationBtn from '../Cab_Components/Map/MyLocationBtn';
import ActionCard from '../Cab_Components/ActionCard/ActionCard';
import PlacesCard from '../Cab_Components/PlacesCard';

import { bindActionCreators } from 'redux';

import styles from './Styles/MapScreenStyle'
import I18n from '../I18n/I18n.js'


export default class MapScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object,
    dispatch: PropTypes.func
  }

  render () {
    const { actions, ui, journey } = this.props;

    return (
      <View style={styles.container}>
        <MapBlock
          cars={ui.cars}
          startPosition={journey.startPosition}
          mapRegionDelta={ui.mapRegionDelta}

          setStart={actions._setJourneyStart}
        />

        <MyLocationBtn
          setStart={actions._setJourneyStart}
        />

        <ActionCard
          isOptionsVisible={ui.isOptionsVisible}
          start={journey.startInfo}
          end={journey.endInfo}

          setOptionsVisible={actions.setOptionsVisible}
          setVisiblePlaceCard={actions.setVisiblePlaceCard}
        />
        <PlacesCard
          visiblePlaceCard={ui.visiblePlaceCard}

          setVisiblePlaceCard={actions.setVisiblePlaceCard}
          setStart={actions._setJourneyStart}
          setEnd={actions._setJourneyEnd}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen)



  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     visibleHeight: Metrics.screenHeight
  //   }
  // }

  // componentWillMount () {
  //   // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
  //   // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
  //   DeviceEventEmitter.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
  //   DeviceEventEmitter.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))

  //   // Configure nav button
  //   this.props.navigator.state.tapHamburger = () => {
  //     this.props.navigator.drawer.toggle()
  //   }
  // }

  // componentWillUnmount () {
  //   DeviceEventEmitter.removeAllListeners('keyboardDidShow')
  //   DeviceEventEmitter.removeAllListeners('keyboardDidHide')
  // }

  // keyboardDidShow (e) {
  //   // Animation types easeInEaseOut/linear/spring
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  //   let newSize = Metrics.screenHeight - e.endCoordinates.height
  //   this.setState({
  //     visibleHeight: newSize
  //   })
  // }

  // keyboardDidHide (e) {
  //   // Animation types easeInEaseOut/linear/spring
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  //   this.setState({
  //     visibleHeight: Metrics.screenHeight
  //   })
  // }