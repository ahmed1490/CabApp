import React, { PropTypes, Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {requestPermission} from 'react-native-android-permissions';
import Modal from './Libs/react-native-modalbox';

class GeoPermission extends React.Component {

  componentDidMount() {
    requestPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
      console.log("Granted!", result);
      // now you can set the listenner to watch the user geo location
    }, (result) => {
      console.log("Not Granted!");
      console.log(result);
    });
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  _closeModal () {
    this.props.setVisiblePlaceCard()
  }

  render() {

    return (
      <Modal style={styles.modal}
        backdrop={false}
        isOpen={this.state.isOpen}
        position={"top"}
        ref={"autocompleteModal"}
        onClosed={this._closeModal.bind(this)}>
        <View style={styles.vertical_center}>
          <Text>Test</Text>
        </View>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({

  modal: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },

  header: {
    backgroundColor: '#EFEFF4',
    padding: 10,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  vertical_center: { //vertical center the content inside
    flexDirection: 'column',
    justifyContent: 'center',
  },

  // buttonPrimary: {
  //   height: 60,
  //   // backgroundColor: '#FFE550',
  //   borderWidth: 1,
  //   borderColor: '#EFEFF4',
  // },

  // buttonPrimary_text: {
  //   fontSize: 22,
  //   textAlign: 'center',
  //   alignSelf: 'center'
  // }
});

export default GeoPermission;