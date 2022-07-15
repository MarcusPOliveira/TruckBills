import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.title === "light" ? theme.colors.primary : theme.colors.background};
`;

export const Content = styled.View`
  flex: 3;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.title === "light" ? theme.colors.white : theme.colors.primary};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Buttons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${RFValue(24)}px;
`;

export const SkipButton = styled.TouchableOpacity`

`;

export const SkipLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color:${({ theme }) => theme.title === "light" ? theme.colors.primary : theme.colors.main_green};
`;

export const NextButton = styled.TouchableOpacity`
  width: 98px;
  height: 56px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.title === "light" ? theme.colors.primary : theme.colors.main_green};
`;

export const NextLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;


