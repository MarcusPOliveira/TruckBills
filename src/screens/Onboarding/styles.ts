import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageWrapper = styled.View`
  
`;

export const Image = styled.Image`
  width: 320px;
  height: 320px;
`;
