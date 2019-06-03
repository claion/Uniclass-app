import React from 'react';
import Presenter from './presenter';
import {Alert} from 'react-native';

export default class extends React.Component {
    state = {
        username: '',
        password: '',
        isSubmitting: false,
    }


    _onChangeValue(section) {
        return (value) => this.setState({[section]: value})
    }

    async _onSubmit() {
        const { isSubmitting, username, password } = this.state;
        if (!isSubmitting) {
            if (username && password) {
                const {username, password} = this.state;
                this.setState({isSubmitting: true})
                const {login, navigation: {navigate}} = this.props
                try {
                    const result = await login(username, password);
                    if (!result) {
                        this.setState({isSubmitting:  false})
                        Alert.alert('로그인 실패');
                    } else {
                        this.setState({isSubmitting: false});
                        navigate('MainNavigator')
                    }
                } catch (e) {
                    this.setState({isSubmitting: false})
                    Alert.alert('로그인 정보를 확인해주세요.');                 
                }
            } else {
                Alert.alert('모든 필드를 입력해주세요.');
            }
        }        
    }

    render() {
        return <Presenter {...this.state} onSubmit={this._onSubmit.bind(this)} onChangeValue={this._onChangeValue.bind(this)} />
    }
}