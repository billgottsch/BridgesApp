import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import styles from './Pages/Styles';
import Navigation from './Pages/Navigation';
import StatusBarBackground from './Pages/StatusBarBackground';

import HomePage from './Pages/HomePage';
import BusSchedule from './Pages/BusSchedule';


export default class BridgesApp extends Component {
  render() {
    return (
      <ScrollView >
        <StatusBarBackground />
        <Navigation />
        <View>
          <HomePage />
        </View>
      </ScrollView>
    );
  }
}


AppRegistry.registerComponent('BridgesApp', () => BridgesApp);
