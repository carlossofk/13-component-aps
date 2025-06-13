import 'react-native-gesture-handler';

import React, { PropsWithChildren } from 'react';
import { Navigator } from './presentation/navigator/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

const AppState = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export const ComponentsApp = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};
