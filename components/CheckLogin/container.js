import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';
import api, {endPoints} from '../../constants/api'

export default class extends React.Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        account: PropTypes.object,
        token: PropTypes.string,

        logout: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired
    }

    async componentDidMount() {
        const { isLoggedIn, account, token, navigation: {navigate}, login, logout } = this.props;
        if (isLoggedIn) {
            if (account && token) {
                try {
                    await api(token).post(endPoints.validateToken(account._id));
                    // TODO: Certificated 인지 확인도 해야함
                    navigate('MainNavigator');
                } catch (e) {
                    // 토큰이 유효하지 않음
                    const result = await login(account.username, account.password).catch(e => false)
                    if (result) {
                        navigate('MainNavigator');
                    } else {
                        await logout();
                        navigate('AccountNavigator')
                    }
                }

            } else {
                await logout();
                navigate('AccountNavigator');
            }
        } else {
            navigate('AccountNavigator');   
        }
    }

    render() {
        return <Loading />
    }
}