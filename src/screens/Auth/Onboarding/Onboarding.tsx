import React from 'react';
import { } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import { View, Text, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

export const Onboarding = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <Container>
            <Title>Onboarding</Title>
        </Container>
    )
}
