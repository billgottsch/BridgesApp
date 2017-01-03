


import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import StatusBarBackground from './StatusBarBackground';
import styles from './Styles';
import exitMap from './ExitDoorMap.jpg';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { Router, Scene, Actions } from 'react-native-router-flux';



export default class ListofCareers extends Component {
render() {
  return(
      <ScrollView style={{backgroundColor:'#88B467'}}>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, margin:40}}>Take a look at the careers represented today!</Text>
        <View style={{flex:1, margin:20, marginTop:10 ,justifyContent:'center'}}>
              <View>
                <Text
                  style={{
                  backgroundColor:'#CB3795',
                  marginLeft:20,
                  marginRight:20,
                  marginTop:5,
                  padding: 20,
                  textAlign:'center',
                  fontSize:18,
                  borderColor:'#43781c',
                  borderWidth:1,
                  shadowColor: '#43781c',
                  shadowRadius:1,
                  shadowOpacity:1,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },}}>
                  Computer and IT
                </Text>
                <Text style={{backgroundColor:'#EA2430',
                  marginLeft:20,
                  marginRight:20,
                  marginTop:10,
                  padding: 20,
                  textAlign:'center',
                  fontSize:18,
                  borderColor:'#43781c',
                  borderWidth:1,
                  shadowColor: '#43781c',
                  shadowRadius:1,
                  shadowOpacity:1,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },}}>
                  Health Services
                </Text>
                <Text style={{backgroundColor:'#F2EB39',
                  marginLeft:20,
                  marginRight:20,
                  marginTop:10,
                  padding: 20,
                  textAlign:'center',
                  fontSize:18,
                  borderColor:'#43781c',
                  borderWidth:1,
                  shadowColor: '#43781c',
                  shadowRadius:1,
                  shadowOpacity:1,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },}}>
                  Business, Finance and Hospitality
                </Text>
                <Text style={{
                  backgroundColor:'#F79835',
                  marginLeft:20,
                  marginRight:20,
                  marginTop:10,
                  padding: 20,
                  textAlign:'center',
                  fontSize:18,
                  borderColor:'#43781c',
                  borderWidth:1,
                  shadowColor: '#43781c',
                  shadowRadius:1,
                  shadowOpacity:1,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },}}>
                  Engineering, Const., Manuf., Automotive/Heavy Equipment
                </Text>
                <Text style={{
                  backgroundColor:'#57B74F',
                  marginLeft:20,
                  marginRight:20,
                  marginTop:10,
                  padding: 20,
                  textAlign:'center',
                  fontSize:18,
                  borderColor:'#43781c',
                  borderWidth:1,
                  shadowColor: '#43781c',
                  shadowRadius:1,
                  shadowOpacity:1,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },}}>
                  Ag. Food and Natural Resources
                </Text>
                <Text style={{
                  backgroundColor:'#6DCCEF',
                  marginLeft:20,
                  marginRight:20,
                  marginTop:10,
                  padding: 20,
                  textAlign:'center',
                  fontSize:20,
                  borderColor:'#43781c',
                  borderWidth:1,
                  shadowColor: '#43781c',
                  shadowRadius:1,
                  shadowOpacity:1,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },}}>
                  Public Safety
                </Text>
                <Text style={{
                  backgroundColor:'#231F20',
                  color:'white',
                  marginLeft:20,
                  marginRight:20,
                  marginTop:10,
                  padding: 20,
                  textAlign:'center',
                  fontSize:20,
                  borderColor:'#43781c',
                  borderWidth:1,
                  shadowColor: '#43781c',
                  shadowRadius:1,
                  shadowOpacity:1,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },}}>
                  Liberal Arts
                </Text>
              </View>
          </View>
        <View style={{ marginBottom:130,}}>
        </View>
      </ScrollView>
    )
  }
}
