import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';

import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import HomePage from './HomePage';
import BusSchedule from './BusSchedule';

import styles from './Styles'
export default class Navigation extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1'},
      { key: '2' },
      { key: '3' },
      { key: '4'},

    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBarTop indicatorStyle={{backgroundColor:'white'}} style={{backgroundColor:'white', flex:1,}} labelStyle={{color:'#88B467', }} {...props}
      renderIcon={(scene) => {
        if (scene.index === 0) {
          return <FAIcon key='1' style={styles.navIconsOne} type='icon' name='calendar' size={20}/>
        } else if (scene.index === 1) {
          return <Icon style={styles.navIconsTwo} type='icon' name='ios-briefcase' size={20}/>
        } else if (scene.index === 2) {
          return <FAIcon style={styles.navIconsThree} type='icon' name='bus' size={20}/>
        } else if (scene.index === 3) {
          return <FAIcon style={styles.navIconsFour} type='icon' name='cubes' size={20}/>
        }
      }}
    />
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View><HomePage /></View>;
    case '2':
      return <View><HomePage /></View>;
    case '3':
      return <View><BusSchedule /></View>;
    case '4':
      return <View><BusSchedule /></View>;

    default:
      return null;
    }
  };

  render() {
    return (
      <ScrollView>
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
      </ScrollView>
    );
  }
}
