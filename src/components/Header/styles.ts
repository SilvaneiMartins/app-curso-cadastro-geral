import theme from '../../styles/theme';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({
    shadowOffset: {
        width: 0,
        height: 2,
    },
    elevation: 9,
    shadowRadius: 2.62,
    shadowOpacity: 0.23,
    shadowColor: theme.colors.GRAY_500,
})`
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: center;
    borderBottomLeftRadius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${({ theme }) => theme.colors.GRAY_300};
`;

export const Title = styled.Text`
    font-size: 24px;
    margin-top: 15px;
    font-weight: bold;
`;
