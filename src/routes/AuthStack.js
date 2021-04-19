import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import colors from '../constants/colors';

export default function AuthStack() {
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
      initialRouteName="SignIn"
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: t('signIn.title') }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: t('signUp.title') }}
      />
    </Stack.Navigator>
  );
}
