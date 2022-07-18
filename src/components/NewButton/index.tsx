import React, { useContext } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {
  Button,
} from './styles';
import { ThemeContext } from 'styled-components';

export function NewButton({ ...rest }: TouchableOpacityProps) {

  const { colors } = useContext(ThemeContext);

  return (
    <Button {...rest}>
      <AntDesign name="plus" size={24} color={colors.gray_300} />
    </Button>
  );
}
