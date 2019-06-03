import { connect } from 'react-redux';

import {actionCreators as userActions} from '../../redux/modules/user'
import Container from './container';

const mapStateToProps = (state, ownProps) => {
    const {user: {account, token, isLoggedIn}} = state;
    return {
        isLoggedIn,
        token,
        account
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (username, password) => dispatch(userActions.login(username, password)),
    logout: () => dispatch(userActions.setLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Container);