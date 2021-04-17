import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store';
import Routes from './routes';
import colors from './constants/colors';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.primaryDark }}>
      <StatusBar />
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
}
