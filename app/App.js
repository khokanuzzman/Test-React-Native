import React, { Component } from 'react';
import { Text, View,Button,ScrollView,StyleSheet,Image,TouchableHighlight } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  LinearGradient from 'react-native-linear-gradient'
import Modal from "react-native-modal";
import Pending from './components/Pending';

// import { TouchableHighlight } from 'react-native-gesture-handler';


// dashboard

class DashoardScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashoardScreen</Text>
        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}

// welcom screen

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>WelcomeScreen</Text>
        <Button title="Login" onPress={()=>this.props.navigation.navigate('Dashoard')}/>
        <Button title="SignUp" onPress={()=>alert('button pressed')}/>
      </View>
    );
  }
}

// Pending screen

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#00838B',
    flex: 1, flexDirection: 'column',
    height:'100%'
  },
  // navBar:{
  //   position:'absolute',
  //   top:22,
  //   width:'100%',
  //   backgroundColor:'#00838B',
  //   flexDirection: 'row',
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 12,
  //   },
  //   shadowOpacity: 0.58,
  //   shadowRadius: 16.00,
  //   elevation: 24,
  // },
 });



class Confirm extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Confirm</Text>
      </View>
    );
  }
}

class Cancel extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cancel</Text>
      </View>
    );
  }
}
// tab components


// app js

export default class App extends React.Component {
  render() {
    return(
            <AppContainer/>
    );
  }
}


// navigation



// tab nagivation 

const DashBoardTabNavigation= createBottomTabNavigator({
  Pending,
  Confirm,
  Cancel
},
{
  navigationOptions:({navigation})=>{
    const {routeName}=navigation.state.routes[navigation.state.index];
    return{
      headerTitle:routeName,
    };
  }
})

const AppStackNavigation=createStackNavigator({
  DashBoardTabNavigator: DashBoardTabNavigation
},{

  defaultNavigationOptions:({navigation})=>{
    return{
      headerLeft:(
        <View style={{paddingLeft:10}}>
          <Button title="menu" onPress={() => navigation.toggleDrawer()}/>
        </View>
      )
    }
  }

})

// drawer nagivation 
const AppDrawerNagivation=createDrawerNavigator({
  Dashoard:{
    screen: AppStackNavigation
  }
})

 // switch navigation
const AppSwitchNavigator= createStackNavigator({
  welcome: {screen:WelcomeScreen},
  Dashoard: {screen:AppDrawerNagivation}
},
{

  defaultNavigationOptions:({navigation})=>{
    return{
      header:null
    }
  }

})





const AppContainer= createAppContainer(AppSwitchNavigator);