import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title,
  Rectangle,
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
  type: 'income' | 'outcome' | 'total';
}

export function Filter({ title, isActive = false, type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Rectangle isActive={isActive} type={type} />
    </Container>
  );
}
