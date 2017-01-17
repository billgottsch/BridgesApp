import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    height:100,
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

  inputSearch: {
    backgroundColor:'#fff',
    height: 40,
    textAlign:'center',
    width:200,
    marginTop:50,
    borderWidth:1,
    borderColor:'#fff',
  },
  homepageContent: {
    backgroundColor: '#88B467',
    padding: 0,
    margin:0,
    alignItems: 'center',
  },

  homepageTitle: {
    fontFamily:'Helvetica',
    fontSize:26,
    fontWeight:'bold',
    width:300,
    marginTop:20,
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
    fontFamily:'Helvetica',
    fontSize:18,
    padding: 0,
    marginBottom:5,
    textAlign:'center',
    textShadowColor: '#839477',
    textShadowRadius:.5,
    textShadowOffset: {
      width: .5,
      height: .5,
    },
  },

  homepageTextWrapper:{
    backgroundColor:'#BAD0AB',
    marginTop:5,
    marginBottom:5,
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
  },

  homepageTextTime: {
    fontWeight:'bold',
    padding:5,
  },

  homepageTextTitle: {
    fontFamily:'Helvetica',
    fontSize: 18,
    fontWeight: 'bold',
    flex:3,
    marginLeft:20,
  },

  homepageTextData: {
    flex:3,
    fontWeight:'normal',
    fontFamily:'Helvetica',
    fontSize:13,
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
    fontSize: 13,
    marginTop:5,
    // flex:1,
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

  businessPurple: {
    backgroundColor:'#CB3795',
      marginLeft:50,
      marginRight:50,
      marginTop:10,
      padding: 5,
      textAlign:'center',
      fontSize:14,
      borderColor:'#43781c',
      borderWidth:1,
      shadowColor: '#43781c',
      shadowRadius:1,
      shadowOpacity:1,
      shadowOffset: {
        width: 1,
        height: 1,  },
  },
  businessYellow: {
    backgroundColor:'#F2EB39',
    marginLeft:50,
    marginRight:50,
    marginTop:5,
    padding: 10,
    textAlign:'center',
    fontSize:14,
    borderColor:'#43781c',
    borderWidth:1,
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,  },
  },
  businessGreen: {
    backgroundColor:'#57B74F',
      marginLeft:50,
      marginRight:50,
      marginTop:10,
      padding: 5,
      textAlign:'center',
      fontSize:14,
      borderColor:'#43781c',
      borderWidth:1,
      shadowColor: '#43781c',
      shadowRadius:1,
      shadowOpacity:1,
      shadowOffset: {
        width: 1,
        height: 1,  },
  },
  businessOrange: {
    backgroundColor:'#F79835',
    marginLeft:50,
    marginRight:50,
    marginTop:10,
    padding: 5,
    textAlign:'center',
    fontSize:14,
    borderColor:'#43781c',
    borderWidth:1,
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,  },
  },
  businessBlue: {
    backgroundColor:'#6DCCEF',
    marginLeft:50,
    marginRight:50,
    marginTop:10,
    padding: 5,
    textAlign:'center',
    fontSize:14,
    borderColor:'#43781c',
    borderWidth:1,
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,  },
  },
  businessRed: {
    backgroundColor:'#EA2430',
    marginLeft:50,
    marginRight:50,
    marginTop:10,
    padding: 5,
    textAlign:'center',
    fontSize:14,
    borderColor:'#43781c',
    borderWidth:1,
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,  },
  },
  businessBlack: {
    backgroundColor:'#231F20',
    color:'white',
    marginLeft:50,
    marginRight:50,
    marginTop:10,
    padding: 5,
    textAlign:'center',
    fontSize:14,
    borderColor:'#43781c',
    borderWidth:1,
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,  },
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
    padding:5,
    marginTop:40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BAD0AB',
  },

  navIcons: {
    color:'#43781c',

  },
  navSelected: {
    alignItems:'center',
    color:'white',
  },

  businessesList: {
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
  businessListTitle: {
    fontSize: 14,
    marginTop:5,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor:'#BAD0AB',
    flex:1,
    textAlign: 'center',
    borderWidth: 1,
    // justifyContent:'space-around',
  },
  profileInput: {
    backgroundColor:'#fff',
    height: 40,
    textAlign:'center',
    width:300,
    marginTop:5,
    borderWidth:1,
    borderColor:'#fff',
    fontSize:14,
  },

  modalTitle: {
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',

  },

  modalName:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
  },

  modalData: {
    textAlign:'center',
    marginLeft: 10,
    marginRight: 10,
  },

  modalPhone: {
    textAlign:'center',
  }

});

export default styles
