import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Title = styled.Text`

`;

export const ContentImage = styled.View`
    height: 300px;
`;

export const ImageBanner = styled.Image`

`;

export const ViewImageLogo = styled.View`
    top: 130px;
    left: 30px;
    position: absolute;
`;

export const ImageLogo = styled.Image``;

export const TitleApplication = styled.Text`
    margin-top: 10px;
    font-size: 28px;
    font-weight: bold;
    color: ${({theme }) => theme.colors.BLUE};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    marginVertical: 5px;
    background-color: ${({ theme }) => theme.colors.BLUE};
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme }) => theme.colors.BLUE};
`;

export const ContentBody = styled.View`
    margin-top: -30px;
    align-items: center;
    justify-content: center;
`;

export const ImageCentral = styled.Image`
    width: 228px;
    height: 320px;
`;
