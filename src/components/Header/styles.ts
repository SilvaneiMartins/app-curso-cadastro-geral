import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.GRAY_300};
`;

export const Title = styled.Text`
    font-size: 24px;
    margin-top: 15px;
    font-weight: bold;
`;
