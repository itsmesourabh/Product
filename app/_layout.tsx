import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from '../components/ProductListScreen';
import ProductDetailScreen from '../components/ProductDetailScreen';

const Stack = createStackNavigator();


export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



