import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import styles from './Pages/Styles';
import StatusBarBackground from './Pages/StatusBarBackground';

import HeaderPage from './Pages/HeaderPage';
import Navigation from './Pages/Navigation';


export default class BridgesApp extends Component {
  render() {
    return (
      <View>
        <StatusBarBackground />
        <HeaderPage />
        <Navigation />
      </View>

    );
  }
}


AppRegistry.registerComponent('BridgesApp', () => BridgesApp);
