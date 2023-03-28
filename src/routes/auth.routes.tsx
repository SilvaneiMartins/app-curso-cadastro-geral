import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/Auth/SignIn';
import { SignUp } from '../screens/Auth/SignUp';
import { OnboardingOne } from '../screens/Auth/OnboardingOne';
import { OnboardingTwo } from '../screens/Auth/OnboardingTwo';
import { OnboardingThree } from '../screens/Auth/OnboardingThree';
import { ForgotPassword } from '../screens/Auth/ForgotPassword';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName='OnboardingThree'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="OnboardingOne" component={OnboardingOne} />
            <Screen name="OnboardingTwo" component={OnboardingTwo} />
            <Screen name="OnboardingThree" component={OnboardingThree} />

            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="ForgotPassword" component={ForgotPassword} />
        </Navigator>
    )
}
