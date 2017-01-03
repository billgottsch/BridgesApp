import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import Tabs from 'react-native-tabs';

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
    case 'ListOfBusinesses':
      return <View><ListOfBusinesses /></View>;

      default:
        return <View><BusinessesPage /></View>;
      }
    }
    onTabSelect(e) {
      console.log(e.props.name);
      this.setState({page:e.props.name})
    }

  render() {
    return(
      <ScrollView style={{backgroundColor:'#88B467'}}>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, margin:40}}>Did you find a business you liked? Check out more info here!</Text>
        <View style={{flex:1, margin:20, marginTop:10 ,justifyContent:'center'}}>
            <Text
              name="ListofBusinesses"
              onPress={() => Actions.renderPage()}
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
            <Text
              style={{
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
          <View style={{ marginBottom:130,}}>
          </View>
        </ScrollView>
    )
  }
}
