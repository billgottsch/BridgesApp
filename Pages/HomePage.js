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
            <View style={styles.homepageTextWrapper}>
              <View style={{
                  paddingTop:25,
                  flexDirection:'column',
                  paddingBottom:25,
                  flex:1,
                  margin:0,
                  justifyContent:'center',
                  alignItems:'center',
                  borderWidth:5,
                  borderColor:'#F79835',
                  borderStyle:'solid',
                  backgroundColor:'#F79835',
                  borderTopRightRadius: 55,
                  borderBottomRightRadius: 55,
                }}>
                <Text style={styles.homepageTextTime}>10:30am{"\n"}Room 201</Text>
              </View>
                <Text style={styles.homepageTextTitle}>Clow Stamping{"\n"}<Text style={styles.homepageTextData}>Come see what the process is to 3D print a fork and make your own!</Text></Text>
            </View>
            <View style={styles.homepageTextWrapper}>
              <View style={{
                  paddingTop:25,
                  flexDirection:'column',
                  paddingBottom:25,
                  flex:1,
                  margin:0,
                  justifyContent:'center',
                  alignItems:'center',
                  borderWidth:5,
                  borderColor:'#6DCCEF',
                  borderStyle:'solid',
                  backgroundColor:'#6DCCEF',
                  borderTopRightRadius: 55,
                  borderBottomRightRadius: 55,
                }}>
                <Text style={styles.homepageTextTime}>11:30am{"\n"}Room 12</Text>
              </View>
              <Text style={styles.homepageTextTitle}>LADID{"\n"}<Text style={styles.homepageTextData}>Watch the Lakes Area Drug Investigation Division (LADID) demonstrate a training excercise with their drug-sniffing dog Thor!</Text></Text>
            </View>
            <View style={styles.homepageTextWrapper}>
              <View style={{
                  paddingTop:25,
                  flexDirection:'column',
                  paddingBottom:25,
                  flex:1,
                  margin:0,
                  justifyContent:'center',
                  alignItems:'center',
                  borderWidth:5,
                  borderColor:'#F2EB39',
                  borderStyle:'solid',
                  backgroundColor:'#F2EB39',
                  borderTopRightRadius: 55,
                  borderBottomRightRadius: 55,
                }}>
                <Text style={styles.homepageTextTime}>12:00pm{"\n"}Cafeteria</Text>
              </View>
              <Text style={styles.homepageTextTitle}>Ruttger's Bay Lake Lodge{"\n"}<Text style={styles.homepageTextData}>Dave Sadlowsky will be showing off how to fit, bend and build golf clubs to spec!</Text></Text>
            </View>
          </View>
            <View style={{ marginBottom:150}}>
              <Text style={{textAlign:'center', marginBottom:5,backgroundColor:'white', color:"#88B467"}}>What do you want to explore today?</Text>
              <Image source={require('BridgesApp/assets/cedmap.jpg')} style={styles.fullMap}/>
            </View>
          </View>
        </ScrollView>
    )
  }
}
