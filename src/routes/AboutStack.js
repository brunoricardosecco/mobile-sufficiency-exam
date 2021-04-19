import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import About from '../pages/About';
import colors from '../constants/colors';

export default function AboutStack() {
  const Stack = createStackNavigator();

  // * HOOKS
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primaryBlue,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}
      initialRouteName="About"
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: t('about.title') }}
      />
    </Stack.Navigator>
  );
}
