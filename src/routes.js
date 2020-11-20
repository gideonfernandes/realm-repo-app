import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation } from 'react-natigation/stack';
import Main from './screens/Main';

const { Navigator, Screen } = createStackNavigation();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Main" component={Main} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
