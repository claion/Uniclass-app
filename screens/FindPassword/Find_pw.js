import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  CheckBox,
} from 'react-native';

export default class extends Component {
  constructor(props) {
    super(props);
    state = {
      id : '', 
      email   : '',
      pin: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="아이디"
              keyboardType="id"
              underlineColorAndroid='transparent'
              onChangeText={(id) => this.setState({id})}/>
        </View>
         <TouchableHighlight style={[styles.buttonContainer2, styles.button2]} onPress={() => this.onClickListener('전송')}>
          <Text style={styles.buttonText2}>전송</Text>
        </TouchableHighlight>
        </View>
        <View style={styles.btnContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="가입된 이메일"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
         <TouchableHighlight style={[styles.buttonContainer2, styles.button2]} onPress={() => this.onClickListener('전송')}>
          <Text style={styles.buttonText2}>전송</Text>
        </TouchableHighlight>
        </View>

        <View style={styles.btnContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="인증번호"
              underlineColorAndroid='transparent'
              onChangeText={(pin) => this.setState({pin})}/>
              </View>
              <TouchableHighlight style={[styles.buttonContainer2, styles.button2]} onPress={() => this.onClickListener('확인')}>
          <Text style={styles.buttonText2}>확인</Text>
        </TouchableHighlight>              
        </View>
        

        <TouchableHighlight style={[styles.buttonContainer1, styles.button]} onPress={() => this.onClickListener('find_pw')}>
          <Text style={styles.buttonText}>비밀번호 찾기</Text>
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
    backgroundColor: 'white',
  },
  btnContainer: {
      backgroundColor: 'transparent',
      width:250,
      height:60,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'center',

  },
  inputContainer: {
      borderBottomColor: '#00b5ec',
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      width:200,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'center',
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },

  buttonContainer1: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width:250,
    borderBottomColor: '#000'
    },

  buttonContainer2: {
    height:25,
    width: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    },

  button: {
    backgroundColor: "#00b5ec",
    },
  button2: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: "#00b5ec",
  },
  buttonText: {
    color: 'white',
  },
  buttonText2: {
    color: 'black',
  }
});