import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import styles from './Styles';
import cedMap from 'BridgesApp/assets/cedmap.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

import Navigation from './Navigation';
import StatusBarBackground from 'BridgesApp/Pages/StatusBarBackground';

export default class HomePage extends Component {
  render() {
    return(
      <ScrollView>
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
                <Text style={styles.homepageTextTitle}>LADID {"\n"} 11:00am - Room 113 {"\n"}</Text>
                <Text style={styles.homepageTextData}>Come see the Lakes Area Drug Investigation Division (LADID) demonstrate a training excercise with their drug-sniffing dog Thor!</Text>
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.homepageTextTwo}>
                <Text style={styles.homepageTextTitle}>Clow Stamping {"\n"} 10:30am - Room 201 {"\n"}</Text>
                <Text style={styles.homepageTextData}>Come see what the process is to 3D print a fork and make your own!</Text>
              </Text>
            </View>
            <View style={{flexDirection:'row', marginBottom:20}}>
              <Text style={styles.homepageTextThree}>
                <Text style={styles.homepageTextTitle}>Ruttger's Bay Lake Lodge {"\n"} 12pm - in Cafeteria {"\n"}</Text>
                <Text style={styles.homepageTextData}>Dave Sadlowsky will be showing off how to fit, bend and build golf clubs to spec!</Text>
              </Text>
            </View>
          </View>
            <View style={{ marginBottom:150}}>
              <Text style={{textAlign:'center',marginTop:20, padding:5,backgroundColor:'white', color:"#88B467"}}>What do you want to explore today?</Text>
              <Image source={require('BridgesApp/assets/cedmap.jpg')} style={styles.fullMap}/>
            </View>
          </View>
        </ScrollView>
    )
  }
}
