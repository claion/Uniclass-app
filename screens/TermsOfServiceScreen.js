import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>약관입니다! 동의해라!</Text>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.signupButton]}
          onPress={() => this.props.navigation.navigate('SignupFormScreen')}
        >
          <Text style={styles.signUpText}>약관동의</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEEBF7'
  },

  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 250,
    borderBottomColor: '#000'
  },

  signupButton: {
    backgroundColor: '#00b5ec'
  },
  signUpText: {
    color: 'white'
  }
});
