import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import styled from 'styled-components';
import { MAIN_COLOR } from '../constants/colors';


export default class extends Component {
  constructor(props) {
    super(props);
    state = {
      email: '',
      password: ''
    };
  }

  onClickListener = viewId => {
    Alert.alert('알림', viewId + ' 버튼이 눌렸어요');
  };

  onLoginClick = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('MainScreen');
  };

  render() {
    return (
      <Container>
        <Logo
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Emoji_u1f981.svg/2000px-Emoji_u1f981.svg.png'
          }}
        />
        <InputContainer>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                'http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png'
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="EMAIL"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </InputContainer>

        <InputContainer>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Keyboard-icon_Wikipedians.svg/1024px-Keyboard-icon_Wikipedians.svg.png'
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="PASSWORD"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </InputContainer>

        <TouchableHighlight
          underlayColor="transparent"
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onLoginClick()}
        >
          <Text style={styles.loginText}>로그인</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="transparent"
          style={[styles.buttonContainer, styles.registerButton]}
          onPress={() => this.onClickListener('register')}
        >
          <Text style={styles.registerText}>회원가입</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="transparent"
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('restore_password')}
        >
          <Text>아이디/비밀번호 찾기</Text>
        </TouchableHighlight>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${MAIN_COLOR};
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 50px;
  margin-bottom: 20px;
  justify-content: center;
`;

const InputContainer = styled.View`
  border-bottom-color: '#F5FCFF';
  background-color: 'white';
  border-radius: 30px;
  border-bottom-width: 1;
  width: 250px;
  height: 45px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 20
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#00b5ec'
  },
  registerButton: {
    backgroundColor: '#00b5ec'
  },
  loginText: {
    color: 'black'
  },
  registerText: {
    color: 'white'
  }
});
