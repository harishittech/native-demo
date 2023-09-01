import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './Routes';

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigator;
