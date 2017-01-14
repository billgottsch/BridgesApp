import React, { Component } from 'react';
import { AsyncStorage, Alert, AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import Button from 'react-native-button';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';

import { Router, Scene } from 'react-native-router-flux';
import ProfilePage from './ProfilePage';



export default class AddCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page:'AddCode',
      codeText:'',
      circles:[],
      clusters:[
        {code:'bizhosp', color:'yellow'},
        {code:'mmceaa', color:'orange'},
        {code:'lecps', color:'blue'},
        {code:'libart', color:'black'},
        {code:'agfoodnr', color:'green'},
        {code:'healsci', color:'red'},
        {code:'comartdes', color:'purple'},
      ],
    }
  }

  onCodeSubmit() {
    var correctCodes = this.state.clusters.filter((cluster) => {
      return this.state.codeText === cluster.code
    })
    if (correctCodes.length > 0) {
      var newCircles = this.state.circles.slice(0).concat([correctCodes[0].color])
      this.setState({circles:newCircles})
    }
  }
  //
  // onCompletedCodes() {
  //   if (this.state.circles.length === this.state.clusters.length) {
  //     return switch (this.state.page) {
  //             case 'ProfilePage':
  //               return <View><ProfilePage /></View>;
  //             }
  //   }
  // };

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
          {this.state.clusters.map((cluster, index) => {
            return (<FAIcon key={index} style={{color:this.state.circles.length < index+1 ? 'white' : this.state.circles[index] ,margin:5}} type='icon' name='circle' size={20}/>
            )
          })}
        </View>

        <View>
          <Text style={{textAlign:'center', marginTop:20, marginBottom:20, fontWeight:'bold'}}> {this.state.circles.length}/{this.state.clusters.length} codes filled. {"\n"} Keep exploring!</Text>
        </View>
        {/* {this.onCompletedCodes()} */}
      </ScrollView>
    )
  }
}
