import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import Presenter from './presenter';

export default class extends React.Component {
  static propTypes = {
    signup: PropTypes.func.isRequired
  };

  state = {
    isSubmitting: false,
    username: '',
    password: '',
    name: '',
    email: '',
    errors: {}
  };

  _onChangeValue(section) {
    return value => this.setState({ [section]: value });
  }

  isAccepted(form) {
    const { username, password, name, email } = form;
    if (!form.isSubmitting) {
      if (username && password && name && email) {
        return true;
      } else {
        Alert.alert('모든 필드를 채워주세요');
        return false;
      }
    } else {
      return false;
    }
  }

  async _submit() {
    const form = ({
      isSubmitting,
      username,
      password,
      password2,
      name,
      email,
      errors
    } = this.state);

    const {
      navigation: { navigate },
      signup
    } = this.props;

    if (this.isAccepted(form)) {
      this.setState({ isSubmitting: true });
      if (password === password2) {
        try {
          const result = await signup(form);
          if (result) navigate('LoginScreen');
        } catch (e) {
          e.response.data;
          this.setState({
            errors: e.response.data.message,
            isSubmitting: false
          });
        }
      } else {
        this.setState({
          errors: { password2: ['비밀번호가 일치하지 않습니다.'] },
          isSubmitting: false
        });
      }
    }
  }

  render() {
    return (
      <Presenter
        {...this.state}
        onChangeValue={this._onChangeValue.bind(this)}
        submit={this._submit.bind(this)}
      />
    );
  }
}
