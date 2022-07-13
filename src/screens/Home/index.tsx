import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  Container,
  Header,
  Welcome,
  Photo,
  Greetings,
  Name,
  ToggleContent,
} from './styles';
import { Toggle } from '../../components/Toggle';

export function Home() {

  const { colors } = useContext(ThemeContext);

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
    </Container>
  );
}
