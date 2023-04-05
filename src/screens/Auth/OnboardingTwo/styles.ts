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

export const ContentFooter = styled.View`
    padding: 10px 25px;
    align-items: center;
    justify-content: center;
`;

export const TitleFooter = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: ${({theme }) => theme.colors.GRAY_800};
`;

export const SubTitleFooter = styled.Text`
    font-size: 16px;
    color: ${({theme }) => theme.colors.GRAY_500};
`;

export const ContentDot = styled.View`
    width: 100%;
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContentDotButton = styled.Pressable`
    width: 150px;
    height: 40px;
    padding: 10px;
    border-radius: 75px;
    background: #246BFD;
    align-items: center;
    justify-content: center;
`;

export const ContentDotButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: 800;
`;
