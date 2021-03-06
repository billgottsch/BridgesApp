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

  /* -----HOMEPAGE STYLING----- */
  /* -----HOMEPAGE STYLING----- */
  /* -----HOMEPAGE STYLING----- */

  homepageContent: {
    backgroundColor: '#88B467',
    padding: 0,
    margin:0,
    alignItems: 'center',
  },

  homepageTitle: {
    fontFamily:'Helvetica',
    fontSize:30,
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
    marginBottom:6,
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
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,  },

  },

  homepageTextTime: {
    fontWeight:'bold',
    padding:5,
  },

  homepageTextTitle: {
    fontFamily:'Helvetica',
    fontSize: 17,
    fontWeight: 'bold',
    flex:3,
    marginLeft:15,
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

    width: 372,
    height:250,
    margin:0,
    padding:0,
    resizeMode:'cover'
  },

  /* -----BUSINESSPAGE STYLING----- */
  /* -----BUSINESSPAGE STYLING----- */
  /* -----BUSINESSPAGE STYLING----- */
  /* -----BUSINESSPAGE STYLING----- */

  businessPageTextWrapper: {
    backgroundColor:'#BAD0AB',
    // marginTop:5,
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'#43781c',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,  },
  },

  businessWrapper: {
    flex:1,
    padding:15,
    backgroundColor:'#BAD0AB',
    marginLeft: 50,
    // marginRight:70,
    // marginTop:5]\\,
    borderBottomWidth:1,
    borderBottomColor:'#43781c',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    shadowColor: '#43781c',
    shadowRadius:1,
    shadowOpacity:1,
    shadowOffset: {
      width: 1,
      height: 1,  },
  },

  businessPageTextTitle: {
    fontFamily:'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    flex:3,
    marginLeft:40,
    marginRight:5,
  },

  businessNames: {
    fontFamily:'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    flex:3,
    marginLeft:20,
    marginRight:5,
  },
  businessNamesLA: {
    fontFamily:'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    flex:3,
    marginLeft:20,
    marginRight:5,
    color:'white',

  },

  businessPageTextData: {
    flex:3,
    fontWeight:'normal',
    fontFamily:'Helvetica',
    fontSize:16,
  },

  businessesList: {
    fontSize: 16,
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
    fontSize: 16,
    marginTop:5,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor:'#BAD0AB',
    flex:1,
    textAlign: 'center',
    borderWidth: 1,
    // justifyContent:'space-around',
  },


  /* -----BUSPAGE STYLING----- */
  /* -----BUSPAGE STYLING----- */
  /* -----BUSPAGE STYLING----- */
  /* -----BUSPAGE STYLING----- */

  schoolListTitle: {
    fontSize: 20,
    marginTop:20,
    fontWeight: 'bold',
    backgroundColor:'#BAD0AB',
    flex:1,
    textAlign: 'center',
    borderWidth: 1,
    padding:5,
    // justifyContent:'space-around',
  },

  schoolList: {
    fontSize: 14,
    marginTop:5,
    // flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
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

  exitMap: {
    height: 280,
    margin:0,
    resizeMode: 'contain',
  },

  /* -----NAVPAGE STYLING----- */
  /* -----NAVPAGE STYLING----- */
  /* -----NAVPAGE STYLING----- */
  /* -----NAVPAGE STYLING----- */

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

/*  ----- PROFILEPAGE STYLING  ----- */
/*  ----- PROFILEPAGE STYLING  ----- */
/*  ----- PROFILEPAGE STYLING  ----- */
/*  ----- PROFILEPAGE STYLING  ----- */

  profileInput: {
    backgroundColor:'#fff',
    height: 40,
    textAlign:'center',
    width:300,
    marginTop:5,
    borderWidth:1,
    borderColor:'#fff',
    fontSize:16,
  },


  /*   MODAL STYLING   */
  /*   MODAL STYLING   */
  /*   MODAL STYLING   */
  /*   MODAL STYLING   */

  modalBusinessTitle: {
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',

  },

  modalBusinessIconContainer: {
    flexDirection: 'row',
    marginBottom:20,
    marginTop:60,
    padding:0,
    justifyContent:'center'
  },

  modalBusinessName:{
    fontSize:22,
    fontWeight:'bold',
    marginRight:10,
    marginLeft:10,
    // textAlign: 'center',
  },

  modalBusinessNamePhone: {
    fontSize:22,
    fontWeight:'bold',
    marginRight:10,
    marginLeft:10,

  },

  modalBusinessData: {
    textAlign:'center',
    // paddingLeft:80,
    fontSize:18,
  },

  modalCareerNameFirst:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10,
    marginTop:30,
  },

  modalCareerName:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10,
    marginTop:10,
  },

  modalCareerData: {
    textAlign:'center',
    fontSize:16,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:40,
  },

  modalPhone: {
    textAlign:'center',
  }

});

export default styles
