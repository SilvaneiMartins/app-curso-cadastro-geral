import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/Auth/SignIn';
import { SignUp } from '../screens/Auth/SignUp';
import { Onboarding } from '../screens/Auth/Onboarding';
import { ForgotPassword } from '../screens/Auth/ForgotPassword';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName='Onboarding'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="Onboarding" component={Onboarding} />
            <Screen name="ForgotPassword" component={ForgotPassword} />
        </Navigator>
    )
}
