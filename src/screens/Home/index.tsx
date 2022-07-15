import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Toggle } from '../../components/Toggle';
import { SeparatorLine } from '../../components/SeparatorLine';
import { TravelCard } from '../../components/TravelCard';
import {
  Container,
  Header,
  Welcome,
  Photo,
  Greetings,
  Name,
  ToggleContent,
  TravelsHeader,
  Title,
  TotalTravels,
  Content,
} from './styles';

export function Home() {

  return (
    <Container>
      <Header>
        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/47436367?v=4' }} />
        <Welcome>
          <Greetings>Olá,</Greetings>
          <Name>Marcus</Name>
        </Welcome>
        <ToggleContent>
          <Toggle />
        </ToggleContent>
      </Header>
      <TravelsHeader>
        <Title>Suas viagens ativas</Title>
        <TotalTravels>3 viagens</TotalTravels>
      </TravelsHeader>
      <SeparatorLine />
      <Content>
        <TravelCard />
      </Content>
    </Container>
  );
}
