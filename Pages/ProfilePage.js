import React, { Component } from 'react';
import {Alert, AsyncStorage, AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import Button from 'react-native-button';

import api from './api.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name:'',
      school:'',
      phone:'',
      email:'',
      formData:{}
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('name').then((value) => {
      this.setState({'name': value})
    }).done()
    AsyncStorage.getItem('school').then((value) => {
      this.setState({'school': value})
    }).done()
    AsyncStorage.getItem('phone').then((value) => {
      this.setState({'phone': value})
    }).done()
    AsyncStorage.getItem('email').then((value) => {
      this.setState({'email': value})
    }).done()
    if (this.props.circles) {
      Alert.alert(this.props.circles[0])
    }

  }
// 
//   onSubmitData() {
//
// }

  saveData(key, value) {
    // Alert.alert(name)
    AsyncStorage.setItem(key, value);
    this.setState({[key]: value});
  }

  onClearCircles() {
    AsyncStorage.setItem('circles', '[]').then(() => {
      this.setState({circles:[]})
    })
  }

  render() {
    return(
      <ScrollView style={{backgroundColor:'#88B467', height: 600}}>
        <View>
          <Button
            onPress={this.onClearCircles.bind(this)}
          >Clear circles
          </Button>
        </View>
       <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>

          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, margin:40, width:300}}>We just need a couple things to get you registered for the giveaways!</Text>
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            keyboardType='default'
            style={styles.profileInput}
            value={this.state.name}
            placeholderTextColor='#88B467'
            placeholder="Name"
            returnKeyType="next"
            onChangeText={name => this.saveData('name', name)}
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus();
            }}
          />
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            ref="SecondInput"
            keyboardType='default'
            style={styles.profileInput}
            value={this.state.school}
            placeholderTextColor='#88B467'
            placeholder="School"
            returnKeyType='next'
            onChangeText={school => this.saveData('school', school)}
            onSubmitEditing={(event) => {
              this.refs.ThirdInput.focus();
            }}
          />
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            ref="ThirdInput"
            keyboardType='numbers-and-punctuation'
            style={styles.profileInput}
            value={this.state.phone}
            placeholderTextColor='#88B467'
            placeholder="Phone"
            returnKeyType='next'
            onChangeText={phone => this.saveData('phone', phone)}
            onSubmitEditing={(event) => {
              this.refs.FourthInput.focus();
            }}
          />
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            ref="FourthInput"
            keyboardType='email-address'
            style={styles.profileInput}
            value={this.state.email}
            placeholderTextColor='#88B467'
            placeholder="Email"
            onChangeText={email => this.saveData('email', email)}
            returnKeyType='done'
          />
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <Button
            containerStyle={{backgroundColor:'#43781C', padding:10, width:180, marginTop:10 }}
            style={{fontSize: 14, color: 'white'}}
            styleDisabled={{color: 'red'}}
            onPress={this.saveData.bind(this)}
            >
            Lets get to exploring!
          </Button>
        </View>
      </ScrollView>
    )
  }
}
