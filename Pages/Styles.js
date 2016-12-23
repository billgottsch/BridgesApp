import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#88B467',
    borderColor:'#88B467',
    borderStyle: "solid",
    borderTopWidth: 1,
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
    fontSize:26,
    fontWeight:'bold',
    width:300,
    textAlign:'center',
    marginTop:40,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 20,
    paddingLeft: 0,
    textAlign:'center',
    textShadowColor: '#839477',
    textShadowRadius:.5,
    textShadowOffset: {
      width: .5,
      height: .5,
    },
  },

  homepageSubTitle: {
    fontSize:20,
    marginBottom: 10,
    padding: 0,
    width:260,
    textAlign:'center',
    textAlign:'center',
    textShadowColor: '#839477',
    textShadowRadius:.5,
    textShadowOffset: {
      width: .5,
      height: .5,
    },

  },
  homepageText: {
    fontSize: 12,
    marginTop:15,
    textAlign:'center',
    padding:5,
    width: 250,
    borderColor:'#43781c',
    borderWidth:1,
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor:'#6DCCEF',
  },
  homepageTextTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  homepageTextData: {
    padding: 10,
  },
  statusbarbackground:{
    backgroundColor: "white",
    height: 20,
    margin: 0,
    padding:0,
  },
  fullMap: {
    height: 200,
    width: 374,
  },
  schoolList: {
    fontSize: 12,
    marginTop:5,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    textAlign:'center',
    borderColor:'#43781c',
    borderWidth:1,
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor:'#BAD0AB',
    padding: 10,
  },
  schoolListTitle: {
    fontSize: 16,
    marginTop:20,
    fontWeight: 'bold',
    backgroundColor:'#BAD0AB',
    flex:1,
    textAlign: 'center',
    borderWidth: 1,
    // justifyContent:'space-around',
  },
  exitMap: {
    width:374,
    height: 280,
  },
  navContent:{
    flexDirection:'row',
    alignItems:'stretch',
    backgroundColor:'white',
    margin:0,
    padding:5,
    borderWidth:1,
    bottom: 0,
  },
  navIconsOne: {
    color:'#223D0E',
  },
  navIconsTwo: {
    color:'#223D0E',
  },
  navIconsThree: {
    color:'#223D0E',
  },
  navIconsFour: {
    color:'#223D0E',
  },

});

export default styles
