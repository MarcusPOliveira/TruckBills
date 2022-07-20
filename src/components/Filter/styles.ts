import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export type ActiveProps = {
  isActive?: boolean;
  type: 'income' | 'outcome' | 'total';
}

export const Container = styled.TouchableOpacity`
  align-items: center;
  padding: 0.5px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Rectangle = styled.View<ActiveProps>`
  width: 114px;
  height: 20px;
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.main_green : theme.colors.gray_600};
  ${({ isActive, type }) => isActive && type === 'income' && css`
    background-color: ${({ theme }) => theme.colors.main_green};
  `};
  ${({ isActive, type }) => isActive && type === 'outcome' && css`
    background-color: ${({ theme }) => theme.colors.alert};
  `};
  ${({ isActive, type }) => isActive && type === 'total' && css`
    background-color: ${({ theme }) => theme.colors.green_900};
  `};
`;
