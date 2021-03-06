import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import Books from '../pages/Books';
import AddBook from '../pages/AddBook';
import EditBook from '../pages/EditBook';
import colors from '../constants/colors';

export default function BooksStack() {
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
      initialRouteName="Books"
    >
      <Stack.Screen
        name="Books"
        component={Books}
        options={{ title: t('books.title') }}
      />
      <Stack.Screen
        name="AddBook"
        component={AddBook}
        options={{ title: t('addBook') }}
      />
      <Stack.Screen
        name="EditBook"
        component={EditBook}
        options={{ title: t('editBook') }}
      />
    </Stack.Navigator>
  );
}
