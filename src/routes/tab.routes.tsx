import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, MagnifyingGlass, Bell, User, Gear } from 'phosphor-react-native';

import { Home } from '../screens/Tab/Home';
import { Search } from '../screens/Tab/Search';
import { Notification } from '../screens/Tab/Notification';
import { Profile } from '../screens/Tab/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    const theme = useTheme();

    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarLabelPosition: 'below-icon',
                tabBarActiveTintColor: theme.colors.GRAY_700,
                tabBarInactiveTintColor: theme.colors.GRAY_500,
                tabBarStyle: {
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    height: 60,
                    elevation: 9,
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderTopWidth: 0,
                    shadowRadius: 2.62,
                    shadowOpacity: 0.23,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowColor: theme.colors.GRAY_500,
                    backgroundColor: theme.colors.GRAY_100,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    marginBottom: 4,
                    shadowOpacity: 0.6,
                    fontFamily: theme.fonts.POPPINS_LIGHT,
                },
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <House
                                size={focused ? 30 : 25}
                                color={color}
                                weight={focused ? "fill" : "light"}
                            />
                        </View>
                    )
                }}
            />
            <Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Pesquisar',
                    tabBarIcon: ({ focused, color }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <MagnifyingGlass
                                size={focused ? 30 : 25}
                                color={color}
                                weight={focused ? "fill" : "light"}
                            />
                        </View>
                    )
                }}
            />
            <Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarLabel: 'Notificação',
                    tabBarIcon: ({ focused, color }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Bell
                                size={focused ? 30 : 25}
                                color={color}
                                weight={focused ? "fill" : "light"}
                            />
                        </View>
                    )
                }}
            />
            <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({ focused, color }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Gear
                                size={focused ? 30 : 25}
                                color={color}
                                weight={focused ? "fill" : "light"}
                            />
                        </View>
                    )
                }}
            />
        </Navigator>
    )
}
