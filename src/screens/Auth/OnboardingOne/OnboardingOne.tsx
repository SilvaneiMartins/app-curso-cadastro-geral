import React from 'react';
import { } from 'phosphor-react-native';
import { StatusBar, Image } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import LogoWhite from '../../../assets/onboarding/logo_white.png';
import BannerTopOne from '../../../assets/onboarding/banner_top_onb_1.png';
import BannerCentralPng from '../../../assets/onboarding/banner_central_onb_1.png';

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
    Dot,
} from './styles';

export const OnboardingOne = () => {
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
                    <Dot />
                    <Dot />
                    <Dot />
                </ContentDot>
            </Container>
        </>
    )
}
