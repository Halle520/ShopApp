import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductOverview} from '../screens/shop';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductOverview" component={ProductOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
