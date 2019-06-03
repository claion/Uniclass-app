import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default class HomeTab extends Component {
    static navigationOptions = {
        title: '프로필',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity onPressOut={this.props.logout}>
                    <Text style={{color: "black"}}>Logout</Text>
                </TouchableOpacity>
                <Text>ProfileTab</Text>
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