import React from 'react';
import { } from 'phosphor-react-native';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import {
    Title,
    Container,
    ImageLogo,
    ImageBanner,
    ContentImage,
    ViewImageLogo,
    TitleApplication,
    Line,
    SubTitle,
} from './styles';
import LogoWhite from '../../../assets/onboarding/logo_white.png';
import BannerTopOne from '../../../assets/onboarding/banner_top_onb_1.png';

export const Onboarding = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <Container>
                <ContentImage>
                    <ImageBanner
                        source={BannerTopOne}
                        resizeMode='contain'
                    />

                    <ViewImageLogo>
                        <ImageLogo
                            source={LogoWhite}
                            resizeMode='contain'
                        />

                        <TitleApplication>Cadastro Geral</TitleApplication>
                        <Line />
                        <SubTitle>Seu app parar cadastro geral</SubTitle>
                    </ViewImageLogo>
                </ContentImage>
            </Container>
        </>
    )
}
