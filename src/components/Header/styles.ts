import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(100)}%;
  height: ${RFValue(15)}%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;
