import { StatusBar } from 'react-native';

import LogoBluePng from '../../../assets/onboarding/logo_azul.png';
import BannerTopPng from '../../../assets/onboarding/banner_top_onb_2.png';
import BannerCentralPng from '../../../assets/onboarding/banner_central_onb_2.png';

import {
    Container,
    Title,
    ContentImage,
    ImageBanner,
    ViewImageLogo,
    ImageLogo,
    TitleApplication,
    Line,
    SubTitle,
} from './styles';

export const OnboardingTwo = () => {
    return (
        <>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor={'transparent'}
            />
            <Container>
                <ContentImage>
                    <ImageBanner
                        source={BannerTopPng}
                        resizeMode='contain'
                    />

                    <ViewImageLogo>
                        <ImageLogo
                            source={LogoBluePng}
                            resizeMode='contain'
                        />

                        <TitleApplication>Cadastro Geral</TitleApplication>
                        <Line />
                        <SubTitle>Seu app parar cadastro geral</SubTitle>
                    </ViewImageLogo>
                </ContentImage>

                <Title>OnboardingTwo</Title>
            </Container>
        </>
    )
}
