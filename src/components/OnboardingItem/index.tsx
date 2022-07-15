import React from 'react';
import { useWindowDimensions } from 'react-native';

import {
  Container,
  Logo,
  Image,
  Content,
  Description,
} from './styles';

export function OnboardingItem({ item }) {

  const { width } = useWindowDimensions();

  return (
    <Container style={{ width: width }}>
      <Logo
        source={item.logo}
        resizeMode="contain"
      />
      <Image
        source={item.img}
        resizeMode="contain"
      />
      <Content style={{ width: width }}>
        <Description>{item.description}</Description>
      </Content>
    </Container>
  );
}
