import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingScreens } from '../screens/OnboardingScreens';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="OnboardingScreens"
        component={OnboardingScreens}
      />
    </Navigator>
  )
}
