import React from 'react';
import { ScrollView } from 'react-native';

import LogoSvg from '../../assets/logo.svg';
import Onboarding1Svg from '../../assets/onboarding1.svg';
import Onboarding2Svg from '../../assets/onboarding2.svg';
import Onboarding3Svg from '../../assets/onboarding3.svg';
import {
  Container,
  Content,
  ImageWrapper,
  Image,
} from './styles';

const onBoardings = [
  {
    title: LogoSvg,
    description: 'O controle de suas viagens, perfeito para você, e na palma da sua mão!',
    img: Onboarding1Svg
  },
  {
    description: 'Monitore seus custos, o consumo e desempenho dos seus veículos.',
    img: Onboarding2Svg
  },
  {
    description: 'Acompanhe seu faturamento em cada viagem!',
    img: Onboarding3Svg
  }
];

export function Onboarding() {
  return (
    <Container>
      <ScrollView style={{ flex: 1 }} >
        {onBoardings.map((item, index) => (
          <Content key={index} >
            <Image
              source={item.img}
              resizeMode='contain'
            />
          </Content>
        ))}
      </ScrollView>
    </Container>
  );
}
