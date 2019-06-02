import Container from './container';
import {connect} from 'react-redux';
import {actionCreators as userActions} from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (username, password) => dispatch(userActions.login(username, password))
}) 

const mapStateToProps = (state, ownProps) => {
    const {user} = state;
    return {
        ownProps,
        isLoggedIn: user.isLoggedIn,
        access: user.access,
        account: user.account
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);