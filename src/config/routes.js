import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'

import Splash from '../screens/Splash'
import Login from '../screens/Login'

import Home from '../screens/Home'
import Batch from '../screens/Batch'
import Attendance from '../screens/Attendance'
import Profile from '../screens/Profile'

export const authStack = createStackNavigator({
    Splash: { screen: Splash },
    Login: { screen: Login }
})

export const HomeTab = createStackNavigator({
    Home: { screen: Home },
    Attendance: { screen: Attendance },
    Batch: { screen: Batch },
})

export const appStack = createBottomTabNavigator({
    Home: { screen: HomeTab },
    Profile: { screen: Profile }
})

export const AppNavigator = createSwitchNavigator({
    AuthStack: { screen: authStack },
    AppStack: { screen: appStack },
})
export default createAppContainer(AppNavigator)