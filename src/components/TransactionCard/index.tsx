import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FontAwesome, } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Date,
  Amount,
  Footer,
  Travel,
} from './styles';

export type TransactionCardProps = {
  type: 'positive' | 'negative';
  title: string;
  date: string;
  amount: string;
  travel: string; //transação referente à qual viagem?
}

type Props = {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {

  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <Title>{data.title}</Title>
        <Date>{data.date}</Date>
      </Header>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <FontAwesome name="map" size={15} color={colors.main_green} />
        <Travel>{data.travel}</Travel>
      </Footer>
    </Container>
  );
}
