import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

import AppProvider from './src/hooks';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ DMSans_400Regular, DMSans_500Medium, DMSans_700Bold });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AppProvider>
      <StatusBar barStyle='default' translucent backgroundColor="transparent" />
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Routes />
      </View>
    </AppProvider>
  );
}

