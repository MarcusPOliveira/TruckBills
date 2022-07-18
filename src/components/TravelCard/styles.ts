import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 90%;
  height: 40%;
  margin-top: ${RFValue(18)}px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.title === "light" ? theme.colors.gray_300 : theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 85%;
  flex-direction: row;
  padding-left: 5px;
`;

export const LabelGroup = styled.View`
  justify-content: space-around;
  padding-left: 10px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: 30px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const LabelBold = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const LabelRegular = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const ExpandTravel = styled.TouchableOpacity`
  width: 45px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.main_green};
`;


/*
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 40%;
  margin-top: ${RFValue(18)}px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.title === "light" ? theme.colors.gray_300 : theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  padding: 15px;
  width: 85%;
`;

export const InfoRoute = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LabelBold = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 9px;
`;

export const LabelRegular = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 9px;
`;

export const ExpandTravel = styled.TouchableOpacity`
  width: 45px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.main_green};
`;

*/