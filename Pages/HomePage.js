import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import styles from './Styles';
import cedMap from 'BridgesApp/assets/cedmap.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Navigation from './Pages/Navigation';
import StatusBarBackground from 'BridgesApp/Pages/StatusBarBackground';

export default class HomePage extends Component {
  render() {
    return(
      <View>
        <View style={styles.homepageContent}>
          <Text style={styles.homepageTitle}>
            Career Exploration Day 2017
          </Text>
          <Text style={styles.homepageSubTitle}>
            Don't miss this year's demonstrations!
          </Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.homepageText}>
              <Text style={styles.homepageTextTitle}>LADID - 11:00am - Room 113 {"\n"}</Text>
              <Text style={styles.homepageTextData}>Come see the Lakes Area Drug Investigation Division (LADID) demonstrate a training excercise with their drug-sniffing dog Thor!</Text>
            </Text>
          </View>
          <View style={{flexDirection:'row',zIndex:0}}>
            <Text style={styles.homepageText}>
              <Text style={styles.homepageTextTitle}>LADID - 11:00am - Room 113 {"\n"}</Text>
              <Text style={styles.homepageTextData}>Come see the Lakes Area Drug Investigation Division (LADID) demonstrate a training excercise with their drug-sniffing dog Thor!</Text>
            </Text>
          </View>
        </View>
          <View>
            <Text style={{textAlign:'center',marginTop:20, padding:5,backgroundColor:'white', color:"#88B467"}}>What do you want to explore today?</Text>
            <Image source={require('BridgesApp/assets/cedmap.jpg')} style={styles.fullMap}/>
          </View>
        </View>
    )
  }
}
