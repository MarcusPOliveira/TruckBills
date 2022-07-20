import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FilterGroup = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: center;
  margin-top: ${RFValue(15)}px;
`;

export const TransactionsList = styled.View`
  width: 90%;
  align-items: center;
  margin-top: ${RFValue(62)}px;
`;
