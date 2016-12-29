import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import Tabs from 'react-native-tabs';
import OneBusiness from './OneBusiness';
import Navigation from './Navigation';
import ListOfBusinesses from './ListOfBusinesses';



export default class BusinessesPage extends Component {
  constructor(props) {
    super(props)
    this.state ={
      page:'BusinessesPage'
    };
  }

  renderPage() {
    switch (this.state.page) {
    case 'OneBusiness':
      return <View><OneBusiness /></View>;

      default:
        return <View><BusinessesPage /></View>;
      }
    }


  render() {
    return(
      <View>
        <View>
          <ListOfBusinesses />
        </View>
      </View>

    )
  }
}
