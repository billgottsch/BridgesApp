import React, { Component } from 'react';
import { AsyncStorage, Alert, AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import Button from 'react-native-button';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import { Router, Scene } from 'react-native-router-flux';


const codeYellow = 'bizhosp'
const codeOrange = 'mmceaa'
const codeBlue = 'lecps'
const codeBlack = 'libart'
const codeGreen = 'agfoodnr'
const codeRed = 'healsci'
const codePurple = 'comartdes'

export default class AddCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      codeText:'',
      dot1Color: 'white',
      dot2Color: 'white',
      dot3Color: 'white',
      dot4Color: 'white',
      dot5Color: 'white',
      dot6Color: 'white',

      codeYellow:'bizhosp',
      codeOrange:'mmceaa',
      codeBlue:'lecps',
      codeBlack:'libart',
      codeGreen:'agfoodnr',
      codeRed:'healsci',
      codePurple:'comartdes'
    }
  }

  onCodeSubmit() {
    if (this.state.codeText === this.state.codeYellow) {
      return this.setState({dot1Color: 'yellow'})
    } else if (this.state.codeText === this.state.codeOrange ){
      return this.setState({dot1Color:'orange'})
    } else if (this.state.codeText === this.state.codeBlue) {
      return this.setState({dot1Color:'blue'})
    } else if (this.state.codeText === this.state.codeBlack) {
      return this.setState({dot1Color:'black'})
    } else if (this.state.codeText === this.state.codeGreen ) {
      return this.setState({dot1Color:'green'})
    } else if (this.state.codeText === this.state.codeRed) {
      return this.setState({dot1Color:'red'})
    } else if (this.state.codeText === this.state.codePurple ) {
      return this.setState({dot1Color:'purple'})
    } else if (this.state.dot1Color !== 'white'){
      return this.setState({dot2Color:'blue'})
    } else {
      return Alert.alert('Oops! Your code does not match any cluster code. \n Please try again!')
    }
  }

  render() {
    return(
      <ScrollView style={{backgroundColor:'#88B467', height: 600}}>

        <View style={{flex:1,alignItems:'center', paddingTop:30, justifyContent:'center', flexDirection:'row'}}>
          <Text style={{fontWeight:'bold', textAlign:'center', fontSize:16, width:320}}>To be eligible for the giveaways you must talk with at least 6 businesses. {"\n"}{"\n"}Each business will be given a code, just hand your phone to the representitive to be registered!</Text>
        </View>

        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            autoCapitalize="none"
            spellCheck= 'false'
            keyboardType='default'
            style={styles.inputSearch}
            placeholderTextColor='#88B467'
            placeholder="Insert code here..."
            returnKeyType="done"
            onChangeText={(codeText) => this.setState({codeText})}
            onSubmitEditing={this.onCodeSubmit.bind(this)}
          />
        </View>

        <View style={{flex:1,alignItems:'center', justifyContent:'center', marginTop:10, marginBottom:70, flexDirection:'row'}}>
            <Button
              containerStyle={{backgroundColor:'#43781C', padding:10, width:80}}
              style={{fontSize: 14, color: 'white'}}
              styleDisabled={{color: 'red'}}
              onPress={this.onCodeSubmit.bind(this)}
            >
              Submit
            </Button>
        </View>

        <View style={{margin:20, flexDirection:'row', justifyContent:'center'}}>
          <FAIcon style={{color:this.state.dot1Color,margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:this.state.dot2Color,margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:this.state.dot3Color,margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:this.state.dot4Color,margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:this.state.dot5Color,margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:this.state.dot6Color,margin:5}} type='icon' name='circle' size={20}/>
        </View>
        
        <View>
          <Text style={{textAlign:'center', marginTop:20, marginBottom:20, fontWeight:'bold'}}> 0/6 codes filled. {"\n"} Keep exploring!</Text>
        </View>

      </ScrollView>
    )
  }
}
