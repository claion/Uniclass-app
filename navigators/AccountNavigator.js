import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignupNavigator from './SignupNavigator';
import ForgotInfoNavigator from './ForgotInfoNavigator';

export default createStackNavigator({
  LoginScreen: { screen: LoginScreen, navigationOptions: { header: null } },
  SignupNavigator,
  ForgotInfoNavigator
});
