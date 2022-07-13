import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from '../screens/Onboarding';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen
        name="Onboarding"
        component={Onboarding}
      />
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}
