import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import Button from 'react-native-button';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import { Router, Scene } from 'react-native-router-flux';


export default class AddCode extends Component {

  showCodeInfo() {
    console.log('Pressed!');
  }

  render() {
    return(
      <ScrollView style={{backgroundColor:'#88B467', height: 600}}>
        {/* <View style={{flex:1, flexDirection:'row', justifyContent:'center', marginTop:5}}> */}
          {/* <Button
            containerStyle={{backgroundColor:'#43781C', padding:10, width:80}}
            style={{fontSize: 14, color: 'white'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this.showCodeInfo()}>
            Fill me out first!
          </Button> */}
        {/* </View> */}
        <View style={{flex:1,alignItems:'center', padding:10, justifyContent:'center', flexDirection:'row'}}>
          <Text style={{fontWeight:'bold', textAlign:'center', fontSize:16, width:320}}>To be eligible for the giveaways you must talk with at least 6 businesses. {"\n"}{"\n"}Each business will be given a code, just hand your phone to the representitive to be registered!</Text>
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>

          <TextInput
            // onChangeText={this.state.schools.filter((name) => {})}
            keyboardType='default'
            style={styles.inputSearch}
            // value={this.state.newItemValue}
            placeholderTextColor='#88B467'
            placeholder="Insert code here..."
          />
        </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'center', marginTop:10, marginBottom:70, flexDirection:'row'}}>
            <Button
              containerStyle={{backgroundColor:'#43781C', padding:10, width:80}}
              style={{fontSize: 14, color: 'white'}}
              styleDisabled={{color: 'red'}}
              onPress={() => this._handlePress()}>
              Submit
            </Button>

        </View>

        <View style={{margin:20, flexDirection:'row', justifyContent:'center'}}>
          <FAIcon style={{color:'#43781C',margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:'#43781C',margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:'#43781C',margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:'white',margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:'white',margin:5}} type='icon' name='circle' size={20}/>
          <FAIcon style={{color:'white',margin:5}} type='icon' name='circle' size={20}/>
        </View>
        <View>
          <Text style={{textAlign:'center', marginTop:20, marginBottom:20, fontWeight:'bold'}}> 3/6 codes filled. {"\n"} Nice job! Keep exploring!</Text>
        </View>
      </ScrollView>
    )
  }
}
