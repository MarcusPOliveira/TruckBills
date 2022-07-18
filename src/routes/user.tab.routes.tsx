import React, { useContext } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import { ThemeContext } from 'styled-components';
import { Home } from '../screens/Home';
import { MyVehicles } from '../screens/MyVehicles';
import { NewButton } from '../components/NewButton';

const { Navigator, Screen } = createBottomTabNavigator();

export function UserTabRoutes() {

  const { colors, title } = useContext(ThemeContext);

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: title === "light" ? colors.green_900 : colors.main_green,
        tabBarInactiveTintColor: colors.gray_700,
        headerShown: false,
        tabBarShowLabel: false,
        //tabBarButton: () => <NewButton />,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: title === "light" ? colors.white : colors.background,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={28} color={color} />
          )
        }}
      />
      <Screen
        name="myVehicles"
        component={MyVehicles}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="truck-moving" size={20} color={color} />
          )
        }}
      />
    </Navigator>
  )
}
