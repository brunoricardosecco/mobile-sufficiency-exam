import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './NavigationRef';

import BottomTabMenu from './BottomTabMenu';
import AuthStack from './AuthStack';

export default function Routes() {
  const { isLogged } = useSelector((state) => state.auth);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLogged ? <BottomTabMenu /> : <AuthStack />}
    </NavigationContainer>
  );
}
