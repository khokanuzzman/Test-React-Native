import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:10
  },
  modal: {
    fontSize: 20,
    backgroundColor:'#4630EB',
    width:'100%',
    padding:10,
    height:'60%',
    borderColor:'#fff',
    borderWidth: 2,
  },
  closeModal: {
    fontSize: 20,
    right:0,
    padding:10,
    backgroundColor:'red'
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
      backgroundColor:'rgba(255,255,255,0.5)',
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
  }

});