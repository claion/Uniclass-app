import { connect } from 'react-redux';

import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: form => dispatch(userActions.signup(form))
});

export default connect(
  null,
  mapDispatchToProps
)(Container);
