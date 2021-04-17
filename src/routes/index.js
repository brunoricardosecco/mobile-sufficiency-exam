import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabMenu from './BottomTabMenu';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import colors from '../constants/colors';

export default function Routes() {
  const Stack = createStackNavigator();

  const { isLogged } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {isLogged ? (
        <BottomTabMenu />
      ) : (
        <Stack.Navigator
          initialRouteName="SignIn"
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
        >
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Cadastro' }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
