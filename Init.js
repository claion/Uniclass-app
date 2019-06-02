import CheckLogin from './screens/CheckLoginScreen';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from './navigators/MainNavigator';
import Login from './screens/LoginScreen';
import colors from './constants/colors'


const AppStackNavigator = createStackNavigator({
    Main:{
      screen: MainScreen,
      navigationOptions: {
        title: 'UniCLASS',
      headerStyle: {
          backgroundColor: colors.MAIN_COLOR
      },
      headerTintColor: '#fff',
      }
    }
  });

const switchNavigator = createSwitchNavigator({
    Login,
    CheckLogin,
    MainScreen: AppStackNavigator
}, {
    initialRouteName: 'CheckLogin'
})

export default createAppContainer(switchNavigator);