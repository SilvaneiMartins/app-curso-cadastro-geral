import React from 'react';
import { ScrollView } from 'react-native';

import {
    Title,
    Content,
    Container,
    ImageLogo,
    InputEmail,
    ContentInput,
    InputPassword,
    ContentImage,
    ButtonLogin,
    ButtonLoginTitle,
} from './styles';
import LogoPng from '../../../assets/logo/logo_3.png';

export const SignIn = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 20,
            }}
            showsVerticalScrollIndicator={false}
        >
            <Container>
                <ContentImage>
                    <ImageLogo
                        source={LogoPng}
                        resizeMode='contain'
                    />
                </ContentImage>

                <Content>
                    <Title>Login</Title>

                    <ContentInput>
                        <InputEmail
                            placeholder='Email'
                        />
                    </ContentInput>


                    <ContentInput>
                        <InputPassword
                            placeholder='Senha'
                        />
                    </ContentInput>

                    <ButtonLogin>
                        <ButtonLoginTitle>Entrar</ButtonLoginTitle>
                    </ButtonLogin>
                </Content>
            </Container>
        </ScrollView>
    )
}
