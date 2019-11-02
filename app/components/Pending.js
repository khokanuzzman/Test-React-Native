import React, { Component } from 'react';
import { Text, View, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TouchableOpacity,StatusBar } from 'react-native';
import Styles from '../styles/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
// import { TouchableOpacity } from 'react-native-gesture-handler';

class Pending extends Component {
    state = {
        isModalVisible: false
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    actionWork = () => {
        console.log('button pressed');
    }

    render() {
        return (
            
                <LinearGradient style={Styles.container} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['#fff', '#fff', '#fff', '#fff']}>
                    <StatusBar barStyle="light-content" backgroundColor = "#22A2A9" translucent = {true}/>
                    <View style={{ flex: 1,}}>
                                <LinearGradient style={{borderBottomLeftRadius: 1,borderBottomRightRadius: 1,shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 5,
                                    },
                                    shadowOpacity: 1.25,
                                    shadowRadius: 5.84,
                                    elevation: 10,}}  start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#0A8D95', '#0A8D95', '#0A8D95', '#0A8D95']}>
                                <View style={{ flexDirection: 'row',padding: 15,}}>
                                    <View style={{ flex: 1, marginRight: 3, }}>
                                        <LinearGradient style={{borderRadius: 1,}}  start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['#fff', '#fff', '#fff', '#fff']}>
                                            <TouchableOpacity style={{ padding: 10 }} onPress={this.toggleModal}>
                                                <Text style={{ fontSize: 16, color: '#0A8D95', textAlign: 'center',fontWeight:'bold' }}>Select Options</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <LinearGradient style={{borderRadius: 1,}}   start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['#fff', '#fff', '#fff', '#fff']}>
                                            <TouchableOpacity style={{ padding: 10 }} onPress={this.toggleModal}>
                                                <Text style={{ fontSize: 16, color: '#0A8D95', textAlign: 'center',fontWeight:'bold' }}>Select Options</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View>
                                    
                                </View>
                                    </LinearGradient>

                            <ScrollView animated  style={{paddingTop: 10,}}>
                                 <TouchableOpacity activeOpacity={1.0}>
                                        <View style={{alignContent: 'center',alignItems: 'center',}}>
                                            <View style={Styles.card}>
                                            <View style={Styles.status}><Text style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>New</Text></View>
                                                <View style={Styles.patientName}>
                                                    <View><Text style={Styles.patientInfoName}>1. Md Khokanuzzaman khokan</Text></View>
                                                   
                                                </View>
                                                
                                                <View style={Styles.timePhoneSection} >
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold' }}>8.00 AM</Text>
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold',textAlign:'right' }}>01679544628</Text>
                                                </View>
                                               
                                                <View style={Styles.button}>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}><TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Confirm</Text>
                                                    </TouchableOpacity></View>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}>
                                                    <TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Cancel</Text>
                                                    </TouchableOpacity></View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                 <TouchableOpacity activeOpacity={1.0}>
                                        <View style={{alignContent: 'center',alignItems: 'center',}}>
                                            <View style={Styles.card}>
                                            <View style={Styles.status}><Text style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>New</Text></View>
                                                <View style={Styles.patientName}>
                                                    <View><Text style={Styles.patientInfoName}>1. Md Khokanuzzaman khokan</Text></View>
                                                   
                                                </View>
                                                
                                                <View style={Styles.timePhoneSection} >
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold' }}>8.00 AM</Text>
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold',textAlign:'right' }}>01679544628</Text>
                                                </View>
                                               
                                                <View style={Styles.button}>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}><TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Confirm</Text>
                                                    </TouchableOpacity></View>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}>
                                                    <TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Cancel</Text>
                                                    </TouchableOpacity></View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                 <TouchableOpacity activeOpacity={1.0}>
                                        <View style={{alignContent: 'center',alignItems: 'center',}}>
                                            <View style={Styles.card}>
                                            <View style={Styles.status}><Text style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>New</Text></View>
                                                <View style={Styles.patientName}>
                                                    <View><Text style={Styles.patientInfoName}>1. Md Khokanuzzaman khokan</Text></View>
                                                   
                                                </View>
                                                
                                                <View style={Styles.timePhoneSection} >
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold' }}>8.00 AM</Text>
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold',textAlign:'right' }}>01679544628</Text>
                                                </View>
                                               
                                                <View style={Styles.button}>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}><TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Confirm</Text>
                                                    </TouchableOpacity></View>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}>
                                                    <TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Cancel</Text>
                                                    </TouchableOpacity></View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                 <TouchableOpacity activeOpacity={1.0}>
                                        <View style={{alignContent: 'center',alignItems: 'center',}}>
                                            <View style={Styles.card}>
                                            <View style={Styles.status}><Text style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>New</Text></View>
                                                <View style={Styles.patientName}>
                                                    <View><Text style={Styles.patientInfoName}>1. Md Khokanuzzaman khokan</Text></View>
                                                   
                                                </View>
                                                
                                                <View style={Styles.timePhoneSection} >
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold' }}>8.00 AM</Text>
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold',textAlign:'right' }}>01679544628</Text>
                                                </View>
                                               
                                                <View style={Styles.button}>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}><TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Confirm</Text>
                                                    </TouchableOpacity></View>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}>
                                                    <TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Cancel</Text>
                                                    </TouchableOpacity></View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                 <TouchableOpacity activeOpacity={1.0}>
                                        <View style={{alignContent: 'center',alignItems: 'center',}}>
                                            <View style={Styles.card}>
                                            <View style={Styles.status}><Text style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>New</Text></View>
                                                <View style={Styles.patientName}>
                                                    <View><Text style={Styles.patientInfoName}>1. Md Khokanuzzaman khokan</Text></View>
                                                   
                                                </View>
                                                
                                                <View style={Styles.timePhoneSection} >
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold' }}>8.00 AM</Text>
                                                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold',textAlign:'right' }}>01679544628</Text>
                                                </View>
                                               
                                                <View style={Styles.button}>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}><TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Confirm</Text>
                                                    </TouchableOpacity></View>
                                                    <View style={{ flex: 1, color: 'red',margin:5, }}>
                                                    <TouchableOpacity style={Styles.buttonStyle}  onPress={() => onPress(item)} >
                                                        <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold',fontSize:15}}>Cancel</Text>
                                                    </TouchableOpacity></View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                </View>
            </LinearGradient>
        );  
    } 
}
export default Pending;
