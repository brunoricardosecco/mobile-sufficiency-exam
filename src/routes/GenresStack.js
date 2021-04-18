import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Genres from '../pages/Genres';
import AddGenre from '../pages/AddGenre';
import EditGenre from '../pages/EditGenre';
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
      <Stack.Screen
        name="AddGenre"
        component={AddGenre}
        options={{ title: 'Adicionar gênero' }}
      />
      <Stack.Screen
        name="EditGenre"
        component={EditGenre}
        options={{ title: 'Editar gênero' }}
      />
    </Stack.Navigator>
  );
}
