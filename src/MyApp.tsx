import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import { Routes } from './routes';

export const MyApp = () => {


    return (
        <ThemeProvider theme={theme} >
            <StatusBar
                translucent
                barStyle="dark-content"
                backgroundColor={'transparent'}
            />

            <View style={{ flex: 1 }}>
                <Routes />
            </View>
        </ThemeProvider>
    )
}
