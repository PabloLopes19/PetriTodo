import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import home from './src/home';
import Dashboard from './src/dashboard';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initailRoutename='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1F1E25',
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          shadowColor: 'transparent'
        }}
      >
        <Stack.Screen name="Home" component={home}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}