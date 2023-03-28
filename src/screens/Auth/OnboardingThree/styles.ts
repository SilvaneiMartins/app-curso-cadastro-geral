import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 24px;
`;

export const ContentImage = styled.View``;

export const ViewImageLogo = styled.View`
    top: 130px;
    right: 30px;
    position: absolute;
`;

export const ImageBanner = styled.Image``;

export const ImageLogo = styled.Image`

`;

export const TitleApplication = styled.Text`
    margin-top: 10px;
    font-size: 28px;
    font-weight: bold;
    color: ${({theme }) => theme.colors.WHITE};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    marginVertical: 5px;
    background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme }) => theme.colors.WHITE};
`;

export const ContentBody = styled.View`
    margin-top: -60px;
    align-items: center;
    justify-content: center;
`;

export const ImageCentral = styled.Image`
    width: 228px;
    height: 320px;
`;

export const ContentFooter = styled.View`
    padding: 10px 25px;
    align-items: center;
    justify-content: center;
`;

export const TitleFooter = styled.Text`
    font-size: 26px;
    font-weight: bold;
    margin-top: -30px;
    color: ${({theme }) => theme.colors.GRAY_800};
`;

export const SubTitleFooter = styled.Text`
    font-size: 16px;
    color: ${({theme }) => theme.colors.GRAY_500};
`;

export const ContentDot = styled.View`
    width: 100%;
    margin-top: 25px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Dot = styled.View`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border-radius: 10px;

    background: ${({ theme }) => theme.colors.BLUE};
`;
