import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Tabs from 'react-native-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import bridgesApple from './BridgesLogo2c.jpg';
import bridgesWords from './BridgesWORDSonly2c.jpg';

import HomePage from './HomePage';
import BusSchedule from './BusSchedule';
import AddCode from './AddCode';
import ListofCareers from './ListofCareers';
import BusinessesPage from './BusinessesPage';
import ProfilePage from './ProfilePage';
import CareersPage from './CareersPage';
import ListOfBusinesses from './ListOfBusinesses';


export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:'HomePage',
    };
  }
  renderPage() {
      switch (this.state.page) {
      case 'HomePage':
        return <View><HomePage /></View>;

      case 'BusinessesPage':
        return <View><BusinessesPage /></View>;

      case 'CareersPage':
        return <View><CareersPage /></View>;

      case 'BusSchedule':
        return <View><BusSchedule /></View>;

      case 'AddCode':
        return <View><AddCode /></View>;

      default:
        return <View><HomePage /></View>;
      }
    };

    onTabSelect(e) {
      console.log(e.props.name);
      this.setState({page:e.props.name})
    }
  render() {
    return (
      <View>
        <View style={{borderBottomColor:'#88B467'}}>
          <View style={{flexDirection:'row', justifyContent:'center',borderBottomWidth:1, borderBottomColor:'#88B467'}}>
            <Image source={bridgesApple} style={{height:70, width:140, }}></Image>
            <Image source={bridgesWords} style={{height:50, width:165, padding: 0, marginTop:20, marginLeft:5}}></Image>
          </View>
        </View>
        <View style={styles.navContent}>
          <Tabs selected={this.state.page} style={{backgroundColor:'#BAD0AB'}}
                onSelect={this.onTabSelect.bind(this)} selectedStyle={styles.navSelected}>
              <Text style={styles.navIcons} name="HomePage"><FAIcon key='first' selectedStyle={styles.navSelected} type='icon' name='calendar' size={20}/></Text>
              <Text style={styles.navIcons} name="BusinessesPage"><Icon selectedStyle={styles.navSelected} type='icon' name='ios-briefcase' size={20}/></Text>
              <Text style={styles.navIcons} name="CareersPage"><FAIcon selectedStyle={styles.navSelected} type='icon' name='map' size={20}/></Text>
              <Text style={styles.navIcons} name="BusSchedule"><FAIcon selectedStyle={styles.navSelected} type='icon' name='bus' size={20}/></Text>
              <Text style={styles.navIcons} name="AddCode"><FAIcon selectedStyle={styles.navSelected} type='icon' name='gift' size={20}/></Text>
          </Tabs>
        </View>
        {this.renderPage()}
      </View>
   );
  }
}
