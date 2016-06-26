import React from 'react-native';
const {
  View,
  Text,
  PropTypes,
  StyleSheet,
  PixelRatio
} = React;
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';


class TopBar extends React.Component {

  static propTypes = {
  }

  render() {
    return (
      <View style={styles.bar} pointerEvents={'box-none'}>

        <Button containerStyle={styles.icon}
          >
          <Icon name="navigate" size={18} color='#0092DA' style={{width:20, marginTop: 2}} />
        </Button>


        <Button containerStyle={styles.icon}
          >
          <Icon name="navigate" size={18} color='#0092DA' style={{width:20, marginTop: 2}} />
        </Button>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    padding: 15,

    // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // flexDirection: 'row',
    backgroundColor: 'green',
    
  },

  icon: {
    backgroundColor: 'green',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#E9E9EA',
    bottom: 170,
    padding: 10
  }
});

export default TopBar;








