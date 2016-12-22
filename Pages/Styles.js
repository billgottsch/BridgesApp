import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#88B467',
    borderColor:'#88B467',
    borderStyle: "solid",
    borderWidth: 1,
    margin: 0,
    padding: 0,

  },
  header: {
    margin: 0,
    padding:0,
    width: 380,
    height: 80,
    borderColor:'#88B467',
    borderStyle: "solid",
    borderWidth: 1,
  },

  logo: {
    margin: 0,
    padding: 0,
    height: 85,
    width: 100,
  },

  homepageContent: {
    flex: 1,
    backgroundColor: '#88B467',
    padding: 0,
    margin:0,
    alignItems: 'center',
  },

  homepageTitle: {
    fontSize:24,
    textAlign:'center',
    marginTop:40,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 20,
    padding: 0,
  },

  homepageSubTitle: {
    fontSize:18,
    marginBottom: 10,
    padding: 0,

  },
  homepageText: {
    fontSize: 12,
    marginTop:20,
    marginBottom: 40,
    paddingLeft: 60,
    padding: 5,
    width: 260,
    borderColor:'#BAD0AB',
    borderRadius:5,
    textAlign: 'center',
    alignItems: 'flex-start',
    backgroundColor:'#BAD0AB',
  },

  statusbarbackground:{
    backgroundColor: "white",
    height: 20,
    margin: 0,
    padding:0,
  },
  fullMap: {
    height: 200,
    width: 376,

  }
});

export default styles
