import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Books from '../pages/Books';
import colors from '../constants/colors';

export default function BooksStack() {
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
        name="Books"
        component={Books}
        options={{ title: 'Livros' }}
      />
    </Stack.Navigator>
  );
}
