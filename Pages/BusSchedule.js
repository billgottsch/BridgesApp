import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';

import StatusBarBackground from './StatusBarBackground';
import styles from './Styles';
import exitMap from './ExitDoorMap.jpg';


const allSchools = [
  {name:'Aitkin', arrival:'9:15am', departure:'12:00pm', door:'South'},
  {name:'Bertha-Hewitt', arrival:'9:15am', departure:'12:30pm', door:'South'},
  {name:'Brainerd', arrival:'10:00am', departure:'12:30pm', door:'West'},
  {name:'Browerville', arrival:'9:30am', departure:'12:00pm', door:'South'},
  {name:'Crosby-Ironton', arrival:'9:00am', departure:'12:15pm', door:'North'},
  {name:'Eagle Valley', arrival:'9:30am', departure:'12:00pm', door:'South'},
  {name:'Isle', arrival:'9:30am', departure:'12:30pm', door:'South'},
  {name:'Little Falls', arrival:'9:15am', departure:'12:00pm', door:'North'},
  {name:'Long Prairie-Grey Eagle', arrival:'9:15am', departure:'12:15pm', door:'South'},
  {name:'Menahga', arrival:'10am', departure:'12:30pm', door:'South'},
  {name:'Onamia', arrival:'9:45am', departure:'11:00am', door:'South'},
  {name:'Pequot Lakes', arrival:'9:15am', departure:'12:00pm', door:'South'},
  {name:'Pierz', arrival:'9:00am', departure:'12:30pm', door:'South'},
  {name:'Pillager', arrival:'9:45am', departure:'12:30pm', door:'South'},
  {name:'Pine River-Backus', arrival:'9:15am', departure:'12:30pm', door:'South'},
  {name:'Sebeka', arrival:'10:15am', departure:'12:15pm', door:'South'},
  {name:'Staples-Motley', arrival:'9:15am', departure:'12:15pm', door:'South'},
  {name:'Swanville', arrival:'9:30am', departure:'12:30pm', door:'South'},
  {name:'Upsala', arrival:'9:30am', departure:'12:30pm', door:'South'},
  {name:'Verndale', arrival:'8:45am', departure:'12:30pm', door:'South'},

]

export default class BusSchedule extends Component {
  constructor(props) {
    super(props)
    this.state ={
      searchValue: '',
      schools: allSchools
    }
  }

  onNewSearch(text) {
    let schools;
    if (text === '') {
      schools= allSchools
    } else {
      schools = allSchools.filter((v,i) => {
        return v.name.toLowerCase().indexOf(text.toLowerCase()) > -1
      })
    }
    this.setState({
      schools
    })

  }

  render() {
    return(
        <ScrollView style={{backgroundColor:'#88B467'}}>
          <View style={{flex:1,alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
            <TextInput
              onChangeText={this.onNewSearch.bind(this)}
              keyboardType='default'
              style={styles.inputSearch}
              value={this.state.newItemValue}
              placeholderTextColor='#88B467'
              placeholder="Search for school..." />
          </View>
          <View style={{flex:1, margin:5, justifyContent:'space-around'}}>
            <Text style={styles.schoolListTitle}>Bus scheduling</Text>
            {this.state.schools.map((school, index) =>{
              return (<View style={{minHeight:40}} key={index}><Text style={styles.schoolList} key={index}><Text style={{fontWeight:'bold', fontSize:18}}>{school.name}</Text> <Text>{"\n"} Arrival:<Text style={{color:'#4869E8',fontWeight:'bold'}}> {school.arrival}</Text>  -  Departure:<Text style={{color:'#FF5038',fontWeight:'bold'}}> {school.departure}</Text></Text><Text style={{fontWeight:'bold',fontSize:18}}>{"\n"}Exit at {school.door} Door</Text></Text></View>)
            })}
          </View>
            <View style={{ marginBottom:150, alignItems:'center'}}>
              <Image source={exitMap} style={styles.exitMap}></Image>
            </View>
        </ScrollView>
    )
  }
}
