import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Entypo } from '@expo/vector-icons';

import {
  Container,
  ImageWrapper,
  Image,
  ButtonContent,
  VehicleName,
  VehicleLicensePlate,
} from './styles';

export function VehicleCard() {

  const { colors } = useContext(ThemeContext);

  //invertidos devido a prop position: absolute
  return (
    <Container>
      <ButtonContent>
        <VehicleName>MB Atego 2426 6x2</VehicleName>
        <VehicleLicensePlate>JHK8752</VehicleLicensePlate>
        <Entypo name='chevron-down' size={20} color={colors.white} />
      </ButtonContent>
      <ImageWrapper>
        <Image
          source={{ uri: 'https://production.autoforce.com/uploads/version/profile_image/2368/model_main_comprar-1419-4x2-plataforma_30db66aacf.png' }}
          resizeMode="contain"
        />
      </ImageWrapper>
    </Container>
  );
}
