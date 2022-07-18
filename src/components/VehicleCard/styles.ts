import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 159px;
  height: 196px;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  flex: 0.65;
  background-color: ${({ theme }) => theme.title === "light" ? theme.colors.gray_300 : theme.colors.primary};
  border-radius: 18px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ButtonContent = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main_green};
  position: absolute;
  border-radius: 18px;
`;

export const VehicleName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const VehicleLicensePlate = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;
