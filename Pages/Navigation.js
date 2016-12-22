import React, { Component } from 'react';
import { Text, View, ScrollView} from 'react-native';
import { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import Icon from 'react-native-vector-icons';


export default class Navigation extends Component {

  render() {
    return (
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() =>
          <ScrollableTabBar />}
      >
        {/* <Icon type='icon' name='logo-apple' color='#A4C639' size={300}/> */}
        <Text tabLabel='Businesses' color='lime'></Text>
        <Text tabLabel='Career Info'></Text>
        <Text tabLabel='Bus Schedule'></Text>
        <Text tabLabel='Add Code'></Text>
      </ScrollableTabView>
    )
  }
}
