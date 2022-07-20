import React, { useState } from 'react';

import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { TransactionCard } from '../../components/TransactionCard';
import {
  Container,
  FilterGroup,
  TransactionsList,
} from './styles';

export function Transactions() {
  const [selectedType, setSelectedType] = useState('');

  function handleTransactionTypeSelect(type: 'income' | 'outcome' | 'total') {
    setSelectedType(type);
  }

  const transactions = {
    title: 'Combustível',
    date: '04/07/22',
    amount: 'R$ 612,00',
    travel: 'Arcos p/ Uberlândia',
    type: 'negative'
  }

  return (
    <Container>
      <Header title='Transações' />
      <FilterGroup>
        <Filter
          title='Receitas'
          type='income'
          isActive={selectedType === 'income'}
          onPress={() => handleTransactionTypeSelect('income')}
        />
        <Filter
          title='Despesas'
          type='outcome'
          isActive={selectedType === 'outcome'}
          onPress={() => handleTransactionTypeSelect('outcome')}
        />
        <Filter
          title='Total'
          type='total'
          isActive={selectedType === 'total'}
          onPress={() => handleTransactionTypeSelect('total')}
        />
      </FilterGroup>
      <TransactionsList>
        <TransactionCard
          data={transactions}
        />
      </TransactionsList>
    </Container>
  );
}
