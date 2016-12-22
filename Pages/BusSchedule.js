import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, ListView } from 'react-native';
import StatusBarBackground from './StatusBarBackground';
// var Router = require('react-native-router');

const schools = [
  {name:'Aitkin', arrival:'9:15am', departure:'12pm', door:'South'},
  {name:'Bertha-Hewitt', arrival:'9:15am', departure:'12:30pm', door:'South'},
  {name:'Brainerd', arrival:'10am', departure:'12:30pm', door:'West'},
  {name:'Browerville', arrival:'9:30am', departure:'12pm', door:'South'},
  {name:'Crosby-Ironton', arrival:'9am', departure:'12:15pm', door:'North'},
  {name:'Eagle Valley', arrival:'9:30am', departure:'12pm', door:'South'},
  {name:'Isle', arrival:'9:30am', departure:'12:30pm', door:'South'},
  {name:'Little Falls', arrival:'9:15am', departure:'12pm', door:'North'},
  {name:'Long Prairie-Grey Eagle', arrival:'9:15am', departure:'12:15pm', door:'South'},
  {name:'Menahga', arrival:'10am', departure:'12:30pm', door:'South'},
  {name:'Onamia', arrival:'9:45am', departure:'11pm', door:'South'},
  {name:'Pequot Lakes', arrival:'9:15am', departure:'12pm', door:'South'},
  {name:'Pierz', arrival:'9am', departure:'12:30pm', door:'South'},
  {name:'Pillager', arrival:'9:45am', departure:'12:30pm', door:'South'},
  {name:'Pine River-Backus', arrival:'9:15am', departure:'12:30pm', door:'South'},
  {name:'Sebeka', arrival:'10:15am', departure:'12:15pm', door:'South'},
  {name:'Staples-Motley', arrival:'9:15am', departure:'12:15pm', door:'South'},
  {name:'Swanville', arrival:'9:30am', departure:'12:30pm', door:'South'},
  {name:'Upsala', arrival:'9:30am', departure:'12:30pm', door:'South'},
  {name:'Verndale', arrival:'8:45am', departure:'12:30pm', door:'South'},

]

export default class BusSchedule extends Component {

  render() {
    return(
        <View style={{flex:1}}>
          <StatusBarBackground />

        </View>
    )
  }
}
