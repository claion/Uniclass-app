import { createBottomTabNavigator, createAppContainer } from 'react-navigation'; 

import HomeTab from '../screens/TabScreen/HomeTab';
import InternalTab from '../screens/TabScreen/InternalTab';
import ExternalTab from '../screens/TabScreen/ExternalTab';
import ProfileTab from '../screens/TabScreen/ProfileTab';


const AppTabNavigator = createBottomTabNavigator({ //하단 탭 생성
    HomeTab: { screen: HomeTab },
    InternalTab: { screen: InternalTab },
    ExternalTab: { screen: ExternalTab },
    ProfileTab: { screen: ProfileTab }
});

const AppTabContainer = createAppContainer(AppTabNavigator);

export default AppTabContainer;