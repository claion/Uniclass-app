import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class HomeTab extends Component {
    static navigationOptions = {
        title: '시간표',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-apps' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={style.container}>
                <Text>HomeTab</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});