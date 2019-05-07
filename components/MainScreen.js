import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'; 

import HomeTab from './AppTabNavigator/HomeTab';
import InternalTab from './AppTabNavigator/InternalTab';
import ExternalTab from './AppTabNavigator/ExternalTab';
import ProfileTab from './AppTabNavigator/ProfileTab';


const AppTabNavigator = createBottomTabNavigator({ //하단 탭 생성
    HomeTab: { screen: HomeTab },
    InternalTab: { screen: InternalTab },
    ExternalTab: { screen: ExternalTab },
    ProfileTab: { screen: ProfileTab }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

    static navigationOptions = 
    {
        title: 'UniCLASS',
        headerStyle: {
            backgroundColor: '#197AFF'
        },
        headerTintColor: '#fff',        
    }
    render() {
        return (
            <AppTabContainet/>
        );
    }
}