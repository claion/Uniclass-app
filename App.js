import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';


export default class LoginView extends Component {
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="ID"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Keyboard-icon_Wikipedians.svg/1024px-Keyboard-icon_Wikipedians.svg.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="PASSWORD"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight underlayColor="transparent" style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>로그인</Text>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="transparent" style={[styles.buttonContainer, styles.registerButton]} onPress={() => this.onClickListener('register')}>
        <Text style={styles.registerText}>회원가입</Text>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="transparent" style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
           <Text>아이디/비밀번호 찾기</Text>
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
    backgroundColor: '#DEEBF7',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:20,
    height:20,
    marginLeft:15,
    justifyContent: 'center',
  },
  miniIcon:{
    width:10,
    height:10,
    marginLeft:15,
    justifyContent: 'center',
  },

  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:20,
  },
  loginButton: {
    backgroundColor: "#FFFFFF",
  },
  registerButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'black',
  },
  registerText: {
    color: 'white',
  }
});