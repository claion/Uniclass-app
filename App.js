import React, { Component } from 'react';
import LoginScreen from './screens/loginScreen';
import Loading from './components/loading';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Components/MainScreen';


const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  }
});

export default class App extends React.Component {
  state = {
    loading: false
  }
  render() {
    const {loading} = this.state;
    if (loading) {
      return <Loading/>
    } else {
      return <LoginScreen />
    } 
  }
}
