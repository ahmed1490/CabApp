import React from 'react-native';
const {
  View,
  Text,
  PropTypes,
  StyleSheet,
  PixelRatio,
  Dimensions,
  TouchableHighlight
} = React;
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

import Popover from 'react-native-popover';


class TopBox extends React.Component {

  static propTypes = {
  }

  state = {
    isVisible: false,
    buttonRect: {},
  }


  showPopover(ref) {
    this.refs[ref].measure((ox, oy, width, height, px, py) => {
      this.setState({
        isVisible: true,
        buttonRect: {x: px, y: py, width: width, height: height}
      });
    });
  }

  closePopover() {
    this.setState({isVisible: false});
  }

  renderButton(text, ref) {
    return (
      <TouchableHighlight ref={ref} style={styles.button} onPress={this.showPopover.bind(this, ref)}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    var {width, height} = Dimensions.get('window');
    var displayArea = {x: 5, y: 20, width: width - 10, height: height - 25};

    return (
      <View style={styles.bar} pointerEvents={'box-none'}>

          <View style={styles.row} pointerEvents={'box-none'}>
            {this.renderButton('TL', 'button1')}
            {this.renderButton('T', 'button2')}
            {this.renderButton('TR', 'button3')}
          </View>

          <Popover
            isVisible={this.state.isVisible}
            fromRect={this.state.buttonRect}
            displayArea={displayArea}
            onClose={this.closePopover.bind(this)}>
            <View style={styles.popoverContent}>
              <Text style={styles.popoverText}>Content</Text>
            </View>
          </Popover>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bar: {
    paddingTop: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  icon: {
    backgroundColor: 'green',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#E9E9EA',
    bottom: 170,
    padding: 10
  },

  grid: {
    // marginTop: 20,
    // flex: 1,
    // justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  button: {
    borderRadius: 2,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    opacity: 0.9,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  popoverContent: {
    width: 200,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popoverText: {
    color: '#ccc',
  },
});

export default TopBox;











