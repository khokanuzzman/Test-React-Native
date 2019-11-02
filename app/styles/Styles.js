import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection:'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  
  modal: {
    fontSize: 20,
    width:'100%',
    height:'60%',
    borderColor:'#fff',
    borderWidth: 2,
  },
  closeModal: {
    fontSize: 20,
    right:0,
    padding:10,
  },
  closeIcon:{
    color:'#fff',
    fontSize:20,
    backgroundColor:'rgba(255,255,255,0.5)',
    paddingHorizontal:7,
    paddingVertical:3,
    borderTopRightRadius:10,
    borderBottomLeftRadius: 10,
    
  },
  modalHeader:{
    flexDirection:'row',
    height:50
  },
  modalHeaderLeft:{
    flex:1,
  },
  modalHeaderRight:{
    flex:1,
  },
  modalContent:{
    flex:2,
    flexDirection:'column',
    height:'20%',
  },
  modalContentList:{
      padding:10,
      textAlign:'center',
      width:'100%',
      backgroundColor:'#fff',
      marginBottom:5,
      alignItems:'center',
      borderWidth:2,
      borderColor:'#fff',
      borderRadius:5
  },
  modalContentListStyle:{
      color:'#fff',
      textAlign:'center'
  },
  modalFooter:{
      flexDirection:'row',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  },
  modalFooterButtons:{
      backgroundColor:'rgba(255,255,255,0.5)',
      padding:2,
      margin:2,
      flex:1,
      textAlign:'center',
      height:'20%',
      alignContent:'center',
      justifyContent:'center'
  },
  modalBackground:{
    flex:1,
    backgroundColor:'rgba(0, 131, 139, 0.8)'
  },
  appoinmentButton:{
    flex:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  // list

  item: {
		width: '90%',
		borderRadius: 20,
		marginBottom: 10,
		padding: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,
		elevation: 1,
	},
	info: {
		flex: 1,
		borderRadius: 20,
		paddingLeft: 5,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	name: {
		fontSize: 16,
		fontWeight: '500',
		color: '#000',
		width: '70%',
		height: 15,
		marginBottom: 5,
		borderRadius: 5
	},
	brand: {
		color: '#777',
		fontSize: 14,
		backgroundColor: '#e2e2e2',
		width: '50%',
		height: 15,
		marginBottom: 5,
		borderRadius: 5,
	},
	status: {
		width: '18%',
		height: '20%',
		backgroundColor: '#rgba(0, 131, 139, 0.5)',
		// backgroundColor:'red',
		position:'absolute',
		left:0,
		borderBottomEndRadius:30,
		paddingRight:3
	},


	card: {
		width: '100%',
		height: 150,
		backgroundColor: '#fff',
		padding: 10,
		borderColor: 'rgba(0, 131, 139, 1)',
		shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
		position: 'relative',
		marginBottom:20,
		marginLeft: 20,
		marginRight:20
	},


	patientName: {
		padding:0,
		flexDirection: 'column',
		marginTop:20,
		height:30
	},
	
	timePhoneSection: {
		paddingRight: 15,
		paddingLeft: 15,
		paddingTop: 10,
		flexDirection: 'row',
		flex: 1,
	},


	button: {
		flex: 1,
		flexDirection: 'row',
		padding: 0,
		position:'absolute',
		bottom:0,
		left:10
	},

	textColor: {
		color: '#138294',
	},

	closeButton: {
		position: 'absolute',
		right: -10,
		top: -22,
		color: '#fff',
		fontWeight: 'bold',
		width: 40,
		height: 30,
		textAlign: 'center',
		backgroundColor: '#rgba(0, 131, 139, 1)',
		borderBottomLeftRadius: 10,
	},


	patientInfoName:{
		color:'#000',
		fontWeight:'normal',
		letterSpacing:1,
		fontSize:18,
		paddingLeft:10
	},
	
	buttonStyle:{
		flex: 1,
		margin:5,
		backgroundColor: '#rgba(70, 179, 148, 1)',
		padding:10,
		borderRadius:5,
		borderColor:'rgba(0, 131, 139, 1)',
		borderWidth:1,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2.84,
		elevation: 5,
	}


});