import React, { useContext } from 'react';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Content,
  InfoRoute,
  Info,
  IconWrapper,
  ExpandTravel,
  LabelRegular,
  LabelBold,
} from './styles';
import { ThemeContext } from 'styled-components';

export function TravelCard() {

  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <InfoRoute>
          <IconWrapper>
            <FontAwesome name="map" size={15} color={colors.main_green} />
          </IconWrapper>
          <LabelBold>Arcos-MG</LabelBold>
          <FontAwesome name="long-arrow-right" size={15} />
          <LabelBold>Uberlândia-MG</LabelBold>
        </InfoRoute>
        <Info>
          <IconWrapper>
            <FontAwesome5 name="truck" size={15} color={colors.main_green} />
          </IconWrapper>
          <LabelRegular>Iveco /</LabelRegular>
          <LabelRegular>Tector 240E</LabelRegular>
          <LabelRegular>PUU6871</LabelRegular>
        </Info>
        <Info>
          <IconWrapper>
            <FontAwesome name="calendar-o" size={15} color={colors.main_green} />
          </IconWrapper>
          <LabelBold>Saída:</LabelBold>
          <LabelRegular>01/06/2022</LabelRegular>
        </Info>
        <Info>
          <IconWrapper>
            <FontAwesome name="dollar" size={15} color={colors.main_green} />
          </IconWrapper>
          <LabelBold>Despesas lançadas:</LabelBold>
          <LabelRegular>R$ 230,00</LabelRegular>
        </Info>
      </Content>
      <ExpandTravel>
        <MaterialIcons name="keyboard-arrow-right" size={20} color={colors.white} />
      </ExpandTravel>
    </Container>
  );
}
