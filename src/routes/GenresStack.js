import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Genres from '../pages/Genres';
import colors from '../constants/colors';

export default function GenresStack() {
  const Stack = createStackNavigator();

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
    >
      <Stack.Screen
        name="Genres"
        component={Genres}
        options={{ title: 'Gêneros' }}
      />
    </Stack.Navigator>
  );
}
