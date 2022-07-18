import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  
  background-color: ${({ theme }) => theme.colors.main_green};
`;
