import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';
import colors from '../../constants/colors';

export default class extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,

    isSubmitting: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }

  onClickListener = viewId => {
    Alert.alert('알림', viewId + ' 버튼이 눌렸어요');
  };

  render() {
    const {onChangeValue, onSubmit} = this.props
    return (
      <Container>
        <Logo
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Emoji_u1f981.svg/2000px-Emoji_u1f981.svg.png'
          }}
        />
        <InputContainer>
          <InputIcon
            source={{
              uri:
                'http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png'
            }}
          />
          <Inputs
            placeholder="ID"
            returnKeyType="next"
            textContentType="username"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => {
              this.passwordInput.focus();
            }}
            underlineColorAndroid="transparent"
            onChangeText={onChangeValue('username')}
          />
        </InputContainer>

        <InputContainer>
          <InputIcon
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Keyboard-icon_Wikipedians.svg/1024px-Keyboard-icon_Wikipedians.svg.png'
            }}
          />
          <Inputs
            ref={(ref) => {this.passwordInput = ref}}
            returnKeyType="done"
            placeholder="PASSWORD"
            textContentType="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={onChangeValue('password')}
            onSubmitEditing={onSubmit}
          />
        </InputContainer>

        <LoginBtn
          underlayColor="transparent"
          onPress={onSubmit}
        >
          {this.props.isSubmitting ? <ActivityIndicator /> : <LoginText>로그인</LoginText>}
        </LoginBtn>

        <RegisterBtn
          underlayColor="transparent"
          onPress={() => this.onClickListener('register')}
        >
          <RegisterText>회원가입</RegisterText>
        </RegisterBtn>

        <BtnInterface
          underlayColor="transparent"
          onPress={() => this.onClickListener('restore_password')}
        >
          <ForgotAccountText>아이디/비밀번호 찾기</ForgotAccountText>
        </BtnInterface>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.MAIN_COLOR};
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 50px;
  margin-bottom: 20px;
  justify-content: center;
`;

const InputContainer = styled.View`
  border-bottom-color: #F5FCFF;
  background-color: white;
  border-radius: 30px;
  border-bottom-width: 1;
  width: 250px;
  height: 45px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

const Inputs = styled.TextInput `
  height: 45px;
  margin-left: 16px;
  border-bottom-color: white;
  flex: 1;
`

const InputIcon = styled.Image `
  width: 20px;
  height: 20px;
  margin-left: 15px;
  justify-content: center;
`

const BtnInterface = styled.TouchableOpacity `
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 250px;
  border-radius: 20px
`

const LoginBtn = styled(BtnInterface)`
  background-color: white;
  border-width: 1.5px;
  border-color: #00b5ec;
`

const RegisterBtn = styled(BtnInterface)`
  background-color: #00b5ec;
`
const LoginText = styled.Text `
  color: black;
`

const RegisterText = styled.Text `
  color: white;
`

const ForgotAccountText = styled.Text `
  color: white;
`
