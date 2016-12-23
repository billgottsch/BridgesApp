import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import bridgesApple from './BridgesLogo2c.jpg';
import bridgesWords from './BridgesWORDSonly2c.jpg';

export default class HeaderPage extends Component {
  render() {
    return(
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Image source={bridgesApple} style={{height:60, width:120, }}></Image>
        <Image source={bridgesWords} style={{height:40, width:120, padding: 0, marginTop:20}}></Image>
      </View>
    )
  }
}
