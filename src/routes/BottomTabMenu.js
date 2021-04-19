import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { signOut } from '../store/auth/reducer';

import BooksStack from './BooksStack';
import GenresStack from './GenresStack';
import AboutStack from './AboutStack';

export default function BottomTabMenu() {
  const BottomTab = createBottomTabNavigator();

  // * HOOKS
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const signOutAsync = useCallback(() => dispatch(signOut()), [dispatch]);

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="BooksTab"
        component={BooksStack}
        options={{ title: t('books.title') }}
      />
      <BottomTab.Screen
        name="GenresTab"
        component={GenresStack}
        options={{ title: t('genres.title') }}
      />
      <BottomTab.Screen
        name="AboutTab"
        component={AboutStack}
        options={{ title: t('about.title') }}
      />
      <BottomTab.Screen
        name={t('logout')}
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
