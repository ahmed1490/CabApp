import React, { PropTypes, Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../Libs/react-native-modalbox';

class GeoPermission extends React.Component {

  render() {
    return (

      <Modal style={[styles.modal]}
        swipeToClose={false}
        isOpen={true || this.props.isOpen}
      >
        <Text style={styles.text}>No location permissions granted. Please check your settings to give location permissions</Text>
        <Button containerStyle={[styles.button]} onPress={this.props.resetMapPosition}>
          Retry after giving permission
        </Button>

      </Modal>

    );
  }
};

        // <Button
        //   containerStyle={styles.button}
        //   onPress={this.props.resetMapPosition}
        // >
        //   <Icon name="ios-locate-outline" size={24} style={[styles.button_image]} />
        //   <View style={[styles.button_label, styles.vertical_center, styles.lightBottomBorder]}>
        //     <Text style={[styles.button_text]} numberOfLines={1}>
        //       Retry after giving permission
        //     </Text>
        //   </View>
        // </Button>

const styles = StyleSheet.create({

  // container: {
  //   position: 'absolute',
  //   flex: 1
  // },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  text: {
    color: "black",
      textAlign: 'center',
    fontSize: 22
  },

  button: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    flex: 1,
    padding: 30,
    borderWidth: 1,
    borderColor: '#eee'
  },

  // header: {
  //   backgroundColor: '#EFEFF4',
  //   padding: 10,
  //   paddingTop: 25,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },

  // vertical_center: { //vertical center the content inside
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  // },

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