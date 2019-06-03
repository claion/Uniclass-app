import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import CheckLogin from '../components/CheckLogin';
import MainNavigator from '../navigators/MainNavigator';
import AccountNavigator from '../navigators/AccountNavigator';
import LoginScreen from '../screens/LoginScreen';


export default createAppContainer(createSwitchNavigator({
    CheckLogin,
    AccountNavigator: LoginScreen,
    MainNavigator, 
}))