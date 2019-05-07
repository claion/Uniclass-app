import Loading from '../components/Loading'
import React from 'react';

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    async componentWillMount () {
        // 디바이스에 토큰이 저장?
        // 디바이스에 아이디, 비밀번호가 저장?
        // 모두 없음 => login으로 옮김
        // 둘 중 하나라도 있음 => 인증 시도
        const {navigation: {navigate}} = this.props;
        setTimeout(() => {
            navigate('Login')
        }, 3000);
    }

    render() {
        return <Loading />
    }
} 