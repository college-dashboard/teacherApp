import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from '../screens/Login'

import Home from '../screens/Home'
import Batch from '../screens/Batch'
import Attendance from '../screens/Attendance'

export const authStack = createStackNavigator({
    Login: { screen: Login }
})

export const appStack = createStackNavigator({
    Batch: { screen: Batch },
    Attendance: { screen: Attendance },
    Home: { screen: Home },
})

export const AppNavigator = createSwitchNavigator({
    AppStack: { screen: appStack },
    AuthStack: { screen: authStack },
})
export default createAppContainer(AppNavigator)