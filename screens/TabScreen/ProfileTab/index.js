import {connect} from 'react-redux';

import Container from './container';
import {actionCreators as userActions} from '../../../redux/modules/user'

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => dispatch(userActions.setLogout())
}) 

export default connect(null, mapDispatchToProps)(Container)