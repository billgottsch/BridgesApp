import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import Button from 'react-native-button';

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
    }
  }

  componentDidMount(value) {
    AsyncStorage.getItem('name').then((value) => {
      this.setState({'name': value})
    }).done()
  }

  saveData(value) {
    AsyncStorage.setItem('name', JSON.stringify('name': value));
    this.setState({'name': value});
  }

  render() {
    return(
      <ScrollView style={{backgroundColor:'#88B467', height: 600}}>
       <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>

          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, margin:40, width:300}}>We just need a couple things to get you registered for the giveaways!</Text>
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            keyboardType='default'
            style={styles.profileInput}
            // value={this.state.name}
            placeholderTextColor='#88B467'
            placeholder="Name"
            returnKeyType="next"
            onChangeText={name => this.saveData({name})}
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
            onChangeText={school => this.saveData({school})}
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
            onChangeText={phone => this.saveData({phone})}
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
            onChangeText={email => this.saveData({email})}
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
