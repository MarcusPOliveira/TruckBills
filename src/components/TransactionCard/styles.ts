import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type TransactionProps = {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  width: 90%;
  height: 143px;
  background-color: ${({ theme }) => theme.title === 'light' ? theme.colors.gray_300 : theme.colors.primary};
  border-radius: 18px;
  justify-content: space-around;
  padding: 0 19px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const Date = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, type }) => type === 'positive' ? theme.colors.main_green : theme.colors.alert};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Travel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 7px;
`;
