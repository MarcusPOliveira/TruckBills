import React, { useContext, useRef, useState } from 'react';
import { FlatList, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

import LogoPng from '../../assets/logo.png';
import Onboarding1Png from '../../assets/onboarding1.png';
import Onboarding2Png from '../../assets/onboarding2.png';
import Onboarding3Png from '../../assets/onboarding3.png';
import { OnboardingItem } from '../../components/OnboardingItem';
import { OnboardingPaginator } from '../../components/OnboardingPaginator';
import {
  Container,
  Content,
  Footer,
  Buttons,
  SkipButton,
  SkipLabel,
  NextButton,
  NextLabel,
} from './styles';

const pages = [
  {
    id: '1',
    logo: LogoPng,
    description: `O controle de${'\n'} suas viagens,${'\n'} perfeito para você,${'\n'} e na palma${'\n'} da sua mão!`,
    img: Onboarding1Png
  },
  {
    id: '2',
    description: `Monitore seus custos,${'\n'} o consumo${'\n'} e desempenho dos${'\n'} seus veículos.`,
    img: Onboarding2Png
  },
  {
    id: '3',
    description: `Acompanhe seu${'\n'} faturamento em${'\n'} cada viagem!`,
    img: Onboarding3Png
  }
];

export function OnboardingScreens({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { colors } = useContext(ThemeContext);
  const { navigate } = useNavigation();
  const pagesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  function handleSkip() {
    navigation.navigate('Home');
  }

  function handleNextPage() {
    if (currentIndex < pages.length - 1) {
      pagesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('Home');
    }
  }

  return (
    <Container>
      <Content>
        <FlatList
          data={pages}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={pagesRef}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          renderItem={({ item }) => (<OnboardingItem item={item} />)}
        />
      </Content>
      <Footer>
        <OnboardingPaginator data={pages} scrollX={scrollX} />
        <Buttons>
          <SkipButton onPress={handleSkip} >
            <SkipLabel>Pular</SkipLabel>
          </SkipButton>
          <NextButton onPress={handleNextPage}>
            <NextLabel>Avançar</NextLabel>
          </NextButton>
        </Buttons>
      </Footer>
    </Container>
  );
}


/*
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { ThemeContext } from 'styled-components';

import LogoPng from '../../assets/logo.png';
import Onboarding1Png from '../../assets/onboarding1.png';
import Onboarding2Png from '../../assets/onboarding2.png';
import Onboarding3Png from '../../assets/onboarding3.png';
import {
  Container,
  Content,
  Logo,
  ImageWrapper,
  Image,
  SkipButton,
  SkipLabel,
  Card,
  Subtitle,
} from './styles';

const onBoardings = [
  {
    title: LogoPng,
    description: 'O controle de suas viagens, perfeito para você, e na palma da sua mão!',
    img: Onboarding1Png
  },
  {
    description: 'Monitore seus custos, o consumo e desempenho dos seus veículos.',
    img: Onboarding2Png
  },
  {
    description: 'Acompanhe seu faturamento em cada viagem!',
    img: Onboarding3Png
  }
];

const Skip = () => (
  <SkipButton>
    <SkipLabel>Pular</SkipLabel>
  </SkipButton>
)

export function OnboardingScreens({ navigation }) {

  const { colors } = useContext(ThemeContext);
  const { navigate } = useNavigation();

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      onSkip={() => navigation.navigate('Home')}
      onDone={() => navigation.navigate('Home')}
      pages={[
        {
          title: <Logo source={LogoPng} resizeMode="contain" />,
          backgroundColor: `${colors.primary}`,
          image: <Image source={Onboarding1Png} resizeMode="contain" />,
          subtitle:
            <Card>
              <Subtitle>Controle de suas viagens, perfeito para você, e na palma de sua mão!</Subtitle>
            </Card>,
          bottomBarHeight: 500,
          bottomBarColor: `${colors.white}`,
          bottomBarHighlight: false,
        },
        {
          backgroundColor: `${colors.primary}`,
          image: <Image source={Onboarding2Png} resizeMode="contain" />,
          title: <Logo source={LogoPng} resizeMode="contain" />,
          subtitle:
            <Card>
              <Subtitle>Monitore seus custos, o consumo e desempenho dos seus veículos.</Subtitle>
            </Card>,
        },
        {
          backgroundColor: `${colors.primary}`,
          image: <Image source={Onboarding3Png} resizeMode="contain" />,
          title: <Logo source={LogoPng} resizeMode="contain" />,
          subtitle:
            <Card>
              <Subtitle>Acompanhe seu faturamento em cada viagem!</Subtitle>
            </Card>,
        },
      ]}
    />
  );
}
*/