import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import styles from './Pages/Styles';
import StatusBarBackground from './Pages/StatusBarBackground';

import Navigation from './Pages/Navigation';


export default class BridgesApp extends Component {
  render() {
    return (
      <View>
        <StatusBarBackground />
        <View>
          <Navigation />
        </View>
      </View>

    );
  }
}


AppRegistry.registerComponent('BridgesApp', () => BridgesApp);
