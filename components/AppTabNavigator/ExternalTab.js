import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class HomeTab extends Component {
    static navigationOptions = {
        title: '대외활동',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-chatbubbles' style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={style.container}>
                <Text>ExternalTab</Text>
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