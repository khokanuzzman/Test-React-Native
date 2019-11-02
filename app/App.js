import React, { Component } from 'react';
import { Text, View, Button, ScrollView, StyleSheet, Image, TouchableHighlight,TouchableOpacity,StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LinearGradient from 'react-native-linear-gradient'
import Modal from "react-native-modal";
import Pending from './components/Pending';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <LinearGradient style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }} colors={['#01AC9C', '#59B993', '#89C886']}>
          <Text style={{ marginBottom: 10, textAlign: 'center' }}>Welcome To Jotno</Text>
          <View style={{ marginBottom: 10, width: '50%', marginLeft: '25%' }}><Button title="Login" onPress={() => this.props.navigation.navigate('Dashoard')} /></View>
          <View style={{ marginBottom: 10, width: '50%', marginLeft: '25%' }}><Button title="SignUp" onPress={() => alert('button pressed')} /></View>
        </LinearGradient>
      </View>
    );
  }
}

// Pending screen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00838B',
    flex: 1, flexDirection: 'column',
    height: '100%'
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
    return (
      <AppContainer />
    );
  }
}


// navigation



// tab nagivation 

const DashBoardTabNavigation = createBottomTabNavigator({
  Pending,
  Confirm,
  Cancel
},
  {
    initialRouteName: 'Pending',
    barStyle: { backgroundColor: 'red',padding: 10,fontSize: 20, },
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
        textAlignVertical:'center',
      },
      activeTintColor: 'yellow',
      inactiveTintColor:'#fff',
      style: {
        backgroundColor: 'rgba(0, 131, 139, 1)',
        padding:10,
      },
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    }
  })

const AppStackNavigation = createStackNavigator({
  DashBoardTabNavigator: DashBoardTabNavigation
}, {

    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          
                <TouchableOpacity style={{padding:10}}  onPress={() => navigation.toggleDrawer()} >
                  <Text style={{color:'#fff',fontSize:15}}>Menu</Text>
                </TouchableOpacity>
        ),
        headerTitle: (
         
            <TouchableOpacity style={{flex:1,padding:10,alignItems: 'center',textAlign:'center'}}  onPress={() => navigation.toggleDrawer()} >
                <Text style={{fontSize:16,color:'#fff',textAlign:'center'}}>Jotno Application</Text>
            </TouchableOpacity>
        ),
        headerRight: (
         
          <TouchableOpacity style={{padding:10}}  onPress={() => navigation.toggleDrawer()} >
          {/* <Image
          style={{width: 40, height: 40,padding:5}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        /> */}
        <Text style={{fontSize:15,color:'#fff'}}>Logo</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#0A8D95',
          height:80,
          marginTop: 45,
          
        },
        
      }
    }

  })

// drawer nagivation 
const AppDrawerNagivation = createDrawerNavigator({
  Dashoard: {
    screen: AppStackNavigation
  }
})

// switch navigation
const AppSwitchNavigator = createStackNavigator({
  welcome: { screen: WelcomeScreen },
  Dashoard: { screen: AppDrawerNagivation }
},
  {

    defaultNavigationOptions: ({ navigation }) => {
      return {
        header:null
      }
    }

  })





const AppContainer = createAppContainer(AppSwitchNavigator);