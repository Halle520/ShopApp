import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductOverview} from '../screens/shop';
import ProductDetail from '../screens/shop/ProductDetail';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductOverview"
          component={ProductOverview}
          options={{title: 'All Products'}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetail}
          options={({route}) => ({title: route.params.productTitle})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
