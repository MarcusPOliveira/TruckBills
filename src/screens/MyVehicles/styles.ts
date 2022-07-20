import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const VehiclesHeader = styled.View`
  width: 90%;
  flex: 0.15;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RegisteredVehicles = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const VehiclesList = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 44px;
`;
