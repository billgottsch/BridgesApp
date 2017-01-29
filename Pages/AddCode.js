import React, { Component } from 'react';
import { AsyncStorage, Alert, AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import Button from 'react-native-button';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';

import ProfilePage from './ProfilePage';



export default class AddCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialText:'',
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

  componentDidMount() {
    AsyncStorage.getItem('circles').then((circles) => {
      if (circles == null) {
        circles = []
      } else {
        circles = JSON.parse(circles)
      }
      this.setState({circles})
    })
  }

  onCodeSubmit() {
    var correctCodes = this.state.clusters.filter((cluster) => {
        return this.state.codeText === cluster.code
      })
     if (correctCodes.length > 0) {
      var newCircles = this.state.circles.slice(0).concat([correctCodes[0].color])
      this.setState({circles:newCircles, codeText: ''}, () => {
        AsyncStorage.setItem('circles', JSON.stringify(newCircles)).then(() => {
          if (this.state.circles.length >= 7) {
            Alert.alert('You have all 7 codes! Great job!')
          }
        })
      })
    } else if (this.state.codeText !== correctCodes) {
      return Alert.alert('Oops! That code doesn\'t exist! Try again.')
    }
  }

  renderCodesPage() {
    return (
      <ScrollView>
        <View style={{flex:1,alignItems:'center', paddingTop:30, justifyContent:'center', flexDirection:'row'}}>
          <Text style={{fontWeight:'bold', textAlign:'center', fontSize:16, width:290}}>To be eligible for the giveaways you must talk with at least 7 businesses. {"\n"}{"\n"}Each business will be given a code, just hand your phone to the representitive to be registered!</Text>
        </View>

        <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <TextInput
            autoCorrect= 'false'
            autoCapitalize="none"
            secureTextEntry= 'true'
            spellCheck= 'false'
            value={this.state.codeText}
            keyboardType='default'
            style={styles.inputSearch}
            placeholderTextColor='#88B467'
            placeholder="Insert code here..."
            returnKeyType="done"
            onChangeText={(codeText) => this.setState({codeText})}
            onSubmitEditing={this.onCodeSubmit.bind(this)}
          />
        </View>

        <View style={{flex:1,alignItems:'center', justifyContent:'center', marginTop:10, marginBottom:50, flexDirection:'row'}}>
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

        <View style={{marginBottom:150}}>
          <Text style={{textAlign:'center', fontSize:16, marginBottom:20, fontWeight:'bold'}}> {this.state.circles.length}/{this.state.clusters.length} codes filled. {"\n"} Keep exploring!</Text>
        </View>
      </ScrollView>

    )
  }

  render() {
    return(
      <ScrollView style={{backgroundColor:'#88B467', height: 600}}>
        {this.state.circles.length < 7 ? this.renderCodesPage() : <ProfilePage circles={this.state.circles}/>}
      </ScrollView>
    )
  }
}
