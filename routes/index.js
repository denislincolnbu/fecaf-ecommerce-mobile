import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Importação das telas (vamos criar o conteúdo delas em seguida)
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen'; 
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Navegação por Abas (Requisito: Masculino e Feminino)
function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Masculino" component={HomeScreen} initialParams={{ category: 'mens' }} />
      <Tab.Screen name="Feminino" component={HomeScreen} initialParams={{ category: 'womens' }} />
    </Tab.Navigator>
  );
}

// Navegação Principal (Stack)
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Details" component={ProductDetailScreen} options={{ headerShown: true, title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}