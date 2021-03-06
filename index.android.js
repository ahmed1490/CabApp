import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './App/Root'
import './App/Config/ReactotronConfig'
import configureStore from './App/Store/Cab_Store'

// Handling store here to avoid hot-reloading issues
const store = configureStore()
class RNBase extends React.Component {
  render () {
    return <Root {...this.props} store={store} />
  }
}

AppRegistry.registerComponent('CabApp', () => RNBase)
