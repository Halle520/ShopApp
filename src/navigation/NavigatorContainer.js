import React from 'react';
import {View, Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductOverview} from '../screens/shop';
import ProductDetail from '../screens/shop/ProductDetail';
import UIButtonHeader from '../components/UIButtonHeader';
import CartScreen from '../screens/shop/CartScreen';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductOverview"
          component={ProductOverview}
          options={{title: 'All Product'}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetail}
          options={({route}) => {
            ({title: route.params.productTitle});
          }}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
