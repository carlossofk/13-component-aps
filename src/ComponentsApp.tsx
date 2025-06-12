import 'react-native-gesture-handler';

import React from 'react';
import { Navigatior } from './presentation/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Navigatior />
    </NavigationContainer>
  );
};
