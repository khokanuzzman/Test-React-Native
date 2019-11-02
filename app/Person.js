import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'


export default class Person extends Component {
    render() {
      console.log(this.props);
      return (
        <View style={Styles.container}>
          <Text>{this.props.name}</Text>
          <Text>{this.props.phone}</Text>
          <Text>{this.props.email}</Text>
        </View>
      );
    }
  }

  const Styles=StyleSheet.create({
     container:{
        width:200,
        height:200,
        padding:10,
        backgroundColor:'yellow',
        borderRadius:10,
        marginTop:5


     }
  })

