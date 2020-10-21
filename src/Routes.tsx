import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Points from './pages/Points';

const ROUTES = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Points',
    component: Points,
  },
  {
    name: 'Detail',
    component: Detail,
  },
];

const AppStack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator>
      {ROUTES.map((route) => (
        <AppStack.Screen name={route.name} component={route.component} />
      ))}
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
