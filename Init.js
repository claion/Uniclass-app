import React from 'react';
import CheckLogin from './screens/checkLoginScreen';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from './components/MainScreen';
import Login from './screens/loginScreen';


const AppStackNavigator = createStackNavigator({
    Main:{
      screen: MainScreen,
      navigationOptions: {
        title: 'UniCLASS',
      headerStyle: {
          backgroundColor: '#197AFF'
      },
      headerTintColor: '#fff',
      }
    }
  });

const switchNavigator = createSwitchNavigator({
    Login,
    CheckLogin,
    MainScreen: AppStackNavigator
}, {
    initialRouteName: 'CheckLogin'
})

export default createAppContainer(switchNavigator);