import React, { useContext } from 'react';
import { Animated, useWindowDimensions, View, StyleSheet } from 'react-native';
import { ThemeContext } from 'styled-components';

import {
  Container,
} from './styles';

export function OnboardingPaginator({ data, scrollX }) {

  const { width } = useWindowDimensions();
  const { colors, title } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginLeft: 8,
      marginRight: 8,
      backgroundColor: title === "light" ? colors.primary : colors.main_green,
    },
  });

  return (
    <Container>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]; //prev dot, current dot and next dot
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />
      })}
    </Container>
  );
}
