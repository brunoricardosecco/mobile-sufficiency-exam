import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';

import { signOut } from '../store/auth/reducer';

import BooksStack from './BooksStack';
import GenresStack from './GenresStack';

export default function BottomTabMenu() {
  const BottomTab = createBottomTabNavigator();

  const dispatch = useDispatch();
  const signOutAsync = useCallback(() => dispatch(signOut()), [dispatch]);

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="BooksTab"
        component={BooksStack}
        options={{ title: 'Livros' }}
      />
      <BottomTab.Screen
        name="GenresTab"
        component={GenresStack}
        options={{ title: 'Gêneros' }}
      />
      <BottomTab.Screen
        name="Sair"
        component={BooksStack} // any component
        listeners={() => ({
          tabPress: () => {
            signOutAsync();
          },
        })}
      />
    </BottomTab.Navigator>
  );
}
