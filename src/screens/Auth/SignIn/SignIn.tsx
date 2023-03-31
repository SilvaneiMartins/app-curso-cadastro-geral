import React from 'react';

import {
    Title,
    Content,
    Container,
    ImageLogo,
    InputEmail,
    ContentInput,
    InputPassword,
    ContentImage,
} from './styles';
import LogoPng from '../../../assets/logo/logo_3.png';

export const SignIn = () => {
    return (
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
            </Content>
        </Container>
    )
}
