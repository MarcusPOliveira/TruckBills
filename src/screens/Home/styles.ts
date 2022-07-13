import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: ${RFValue(110)}%;
  height: ${RFValue(20)}%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  flex-direction: row;
  padding: 50px 60px;
`;

export const Welcome = styled.View`
  
`;

export const Photo = styled.Image`
  width: ${RFValue(72)}px;
  height: ${RFValue(72)}px;
  border-radius: 36px;
`;

export const Greetings = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;
  text-align: justify;
`;

export const Name = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;
  text-align: justify;
`;

export const ToggleContent = styled.View`
  flex: 1px;
  align-items: flex-end;
  justify-content: center;
`;