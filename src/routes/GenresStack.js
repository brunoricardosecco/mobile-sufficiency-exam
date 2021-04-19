import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import Genres from '../pages/Genres';
import AddGenre from '../pages/AddGenre';
import EditGenre from '../pages/EditGenre';
import colors from '../constants/colors';

export default function GenresStack() {
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
    >
      <Stack.Screen
        name="Genres"
        component={Genres}
        options={{ title: t('genres.title') }}
      />
      <Stack.Screen
        name="AddGenre"
        component={AddGenre}
        options={{ title: t('addGenre') }}
      />
      <Stack.Screen
        name="EditGenre"
        component={EditGenre}
        options={{ title: t('editGenre') }}
      />
    </Stack.Navigator>
  );
}
