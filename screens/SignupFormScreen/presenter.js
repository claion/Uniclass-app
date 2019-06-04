import React, { Component } from 'react';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';

import colors from '../../constants/colors';

export default class extends Component {
  render() {
    const {
      onChangeValue,
      submit,
      username,
      password,
      password2,
      email,
      name,
      errors,
      isSubmmitting
    } = this.props;
    return (
      <Container>
        <Field>
          <InputContainer>
            <Username
              value={username}
              placeholder="아이디"
              underlineColorAndroid="transparent"
              onChangeText={onChangeValue('username')}
              returnKeyType="next"
              textContentType="username"
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={() => {
                this.emailInput.focus();
              }}
            />
          </InputContainer>
          {errors.username &&
            errors.username.map((e, index) => (
              <ErrorText key={index}>{e}</ErrorText>
            ))}
        </Field>
        <Field>
          <InputContainer>
            <Email
              ref={ref => {
                this.emailInput = ref;
              }}
              value={email}
              placeholder="이메일"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={onChangeValue('email')}
            />
          </InputContainer>
          {errors.email &&
            errors.email.map((e, index) => (
              <ErrorText key={index}>{e}</ErrorText>
            ))}
        </Field>
        <Field>
          <InputContainer>
            <Name
              value={name}
              placeholder="이름"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              onChangeText={onChangeValue('name')}
            />
          </InputContainer>
          {errors.name &&
            errors.name.map((e, index) => (
              <ErrorText key={index}>{e}</ErrorText>
            ))}
        </Field>
        <Field>
          <InputContainer>
            <Password
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              placeholder="비밀번호(6~15자)"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={onChangeValue('password')}
            />
          </InputContainer>
          {errors.password &&
            errors.password.map((e, index) => (
              <ErrorText key={index}>{e}</ErrorText>
            ))}
        </Field>
        <Field>
          <InputContainer>
            <Password
              value={password2}
              placeholder="비밀번호 재입력"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              onChangeText={onChangeValue('password2')}
            />
          </InputContainer>
          {errors.password2 &&
            errors.password2.map((e, index) => (
              <ErrorText key={index}>{e}</ErrorText>
            ))}
        </Field>
        <SignupButtonContainer onPressOut={submit}>
          {isSubmmitting ? (
            <ActivityIndicator />
          ) : (
            <SignupText>가입하기</SignupText>
          )}
        </SignupButtonContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #deebf7;
`;

const InputContainer = styled.View`
  border-bottom-color: white;
  background-color: transparent;
  border-bottom-width: 1;
  height: 45;
  width: 100%;
  margin-bottom: 20;
  flex-direction: row;
  align-items: center;
`;

const InputInterface = styled.TextInput`
  height: 45;
  margin-left: 16;
  border-bottom-color: #ffffff;
  flex: 1;
`;

const Username = styled(InputInterface)``;
const Password = styled(InputInterface)``;
const Email = styled(InputInterface)``;
const Name = styled(InputInterface)``;

const ButtonContainer = styled.TouchableHighlight`
  height: 45;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20;
  width: 250;
  border-bottom-color: #000;
`;

const SignupButtonContainer = styled(ButtonContainer)`
  background-color: #00b5ec;
`;

const SignupText = styled.Text`
  color: white;
`;

const ErrorText = styled.Text`
  color: ${colors.ERROR_TEXT};
  font-size: 12px;
`;
const Field = styled.View`
  width: 250;
`;
