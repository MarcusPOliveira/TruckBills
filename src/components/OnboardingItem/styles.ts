import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 247px;
  height: 59px;
  margin-top: ${RFValue(52)}px;
`;

export const Image = styled.Image`
  flex: 0.6;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin-bottom:  ${RFValue(30)}px;
`;

export const Content = styled.View`
  flex: 0.4;
  background-color: ${({ theme }) => theme.title === "light" ? theme.colors.white : theme.colors.primary};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: ${RFValue(20)}px;
`;
