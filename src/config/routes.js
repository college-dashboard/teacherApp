import React from 'react'
import { Image } from 'react-native'
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
}, {
    initialRouteName:'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            switch(routeName){
                case 'Home':
                    iconName = require('../assets/home.png');
                    iconNameFocused = require('../assets/home.png');
                    break;
                case 'Profile':
                    iconName = require('../assets/profile.png');
                    iconNameFocused = require('../assets/profile.png');
                    break;
            }
            if(focused)
            return ( <Image style={{ width: 20, height: 20}} color={tintColor} source={iconNameFocused} /> );
            else
            return ( <Image style={{ width: 20, height: 20}} color={tintColor} source={iconName} /> );
        }
    }),
    animationEnabled: false,
    swipeEnabled: false,
  })

export const AppNavigator = createSwitchNavigator({
    AuthStack: { screen: authStack },
    AppStack: { screen: appStack },
})
export default createAppContainer(AppNavigator)