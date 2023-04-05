import React from 'react';
import { } from 'phosphor-react-native';
import { StatusBar, Image } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import LogoWhite from '../../../assets/onboarding/logo_white.png';
import BannerTopPng from '../../../assets/onboarding/banner_top_onb_3.png';
import BannerCentralPng from '../../../assets/onboarding/banner_central_onb_3.png';

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
    ContentBody,
    ImageCentral,
    ContentFooter,
    TitleFooter,
    SubTitleFooter,
    ContentDot,
    ContentDotButton,
    ContentDotButtonText,
} from './styles';

export const OnboardingThree = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const handleNavigateToSignIn = () => {
        navigation.navigate('SignIn');
    };

    const handleNavigateToOnboardingTwo = () => {
        navigation.goBack();
    };

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
                        source={BannerTopPng}
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

                <ContentBody>
                    <ImageCentral
                        resizeMode='contain'
                        source={BannerCentralPng}
                    />
                </ContentBody>

                <ContentFooter>
                    <TitleFooter>Cadastro Online!</TitleFooter>
                    <SubTitleFooter>
                        Lorem ipsum dolor sit amet, consectetur adipiscing,
                        sed do eiusmod tempor ut labore
                    </SubTitleFooter>
                </ContentFooter>

                <ContentDot>
                    <ContentDotButton
                        onPress={handleNavigateToOnboardingTwo}
                        style={{
                            marginLeft: 30,
                        }}
                    >
                        <ContentDotButtonText>Voltar</ContentDotButtonText>
                    </ContentDotButton>

                    <ContentDotButton
                        onPress={handleNavigateToSignIn}
                        style={{
                            marginRight: 30,
                        }}
                    >
                        <ContentDotButtonText>Continuar</ContentDotButtonText>
                    </ContentDotButton>
                </ContentDot>
            </Container>
        </>
    )
}
