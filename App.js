import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';


import HomePage from './screens/HomePage';
import CreatePage from './screens/CreatePage';
import AuthPage from './screens/AuthPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        {/*<Stack.Screen name={"Auth"} component={AuthPage} />*/}
        <Stack.Screen name={"Login"} component={LoginPage} />
        {/*<Stack.Screen name={"Register"} component={RegisterPage} />*/}
        <Stack.Screen name={"Home"} component={HomePage} />
        <Stack.Screen name={"Create"} component={CreatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}