import { connect } from 'react-redux';
import { getUser } from '../../redux/user/actionsCreators';
import Presenter from './LoginPresenter';

const mapStateToProps = state => ({
    user: state.user
});


const mapDispatchToProps = dispatch => ({
    onLogin: ({username,password}) => {
        
        dispatch(getUser(user));
    }
});

export default connect(
    mapStateToProps
)(Presenter)