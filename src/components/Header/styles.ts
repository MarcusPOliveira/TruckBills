import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(110)}%;
  height: ${RFValue(20)}%;
  background-color: green;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  flex-direction: row;
  padding: 50px;
`;

