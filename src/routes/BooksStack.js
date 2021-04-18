import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Books from '../pages/Books';
import AddBook from '../pages/AddBook';
import EditBook from '../pages/EditBook';
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
      initialRouteName="Books"
    >
      <Stack.Screen
        name="Books"
        component={Books}
        options={{ title: 'Livros' }}
      />
      <Stack.Screen
        name="AddBook"
        component={AddBook}
        options={{ title: 'Adicionar livro' }}
      />
      <Stack.Screen
        name="EditBook"
        component={EditBook}
        options={{ title: 'Editar livro' }}
      />
    </Stack.Navigator>
  );
}
