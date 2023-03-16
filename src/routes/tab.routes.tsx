import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Tab/Home';
import { Search } from '../screens/Tab/Search';
import { Notification } from '../screens/Tab/Notification';
import { Profile } from '../screens/Tab/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Search"
                component={Search}
            />
            <Screen
                name="Notification"
                component={Notification}
            />
            <Screen
                name="Profile"
                component={Profile}
            />
        </Navigator>
    )
}
