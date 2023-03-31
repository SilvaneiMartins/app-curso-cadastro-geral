import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const Content = styled.View`
    margin-top: 20px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const ContentImage = styled.View`
    width: 100%;
    height: 250px;
    margin-top: 70px;
    align-items: center;
    justify-content: center;
`;

export const ImageLogo = styled.Image`
    width: 250px;
    height: 250px;
`;

export const ContentInput = styled.View`
    width: 100%;
    padding: 6px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    background: #DDDDDD;
    border-radius: 10px;
`;

export const InputEmail = styled.TextInput`
    font-size: 15px;
    margin-left: 10px;
    background: transparent;
`;

export const InputPassword = styled.TextInput`
    font-size: 15px;
    margin-left: 10px;
    background: transparent;
`;

export const ButtonLogin = styled.Pressable`
    width: 100%;
    height: 50px;
    margin-top: 40px;
    border-radius: 10px;
    background: #AAAAAA;
    align-items: center;
    justify-content: center;
`;

export const ButtonLoginTitle = styled.Text`
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
`;

