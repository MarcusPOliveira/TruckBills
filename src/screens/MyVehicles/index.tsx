import React from 'react';

import { Header } from '../../components/Header';
import { Separator } from '../../components/SeparatorLine/styles';
import { VehicleCard } from '../../components/VehicleCard';
import {
  Container,
  VehiclesHeader,
  RegisteredVehicles,
  VehiclesList,
} from './styles';

export function MyVehicles() {
  return (
    <Container>
      <Header title="Meus veículos" />
      <VehiclesHeader>
        <RegisteredVehicles>4 veículos cadastrados</RegisteredVehicles>
      </VehiclesHeader>
      <Separator />
      <VehiclesList>
        <VehicleCard />
        <VehicleCard />
      </VehiclesList>
    </Container>
  );
}
