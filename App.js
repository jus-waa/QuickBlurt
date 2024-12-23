import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import HomePage from './screens/HomePage';
import CreatePage from './screens/CreatePage';
import AuthPage from './screens/AuthPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';

const firebaseConfig = {
  apiKey: "AIzaSyCoMJFwhG0WJeYu_pIOEOICvcG4rXfXT4o",
  authDomain: "quick-blurt.firebaseapp.com",
  projectId: "quick-blurt",
  storageBucket: "quick-blurt.firebasestorage.app",
  messagingSenderId: "834349533962",
  appId: "1:834349533962:web:ae3fa440602e8af1d688f3",
  measurementId: "G-LSGL46VZFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('Firebase app initialized:', app.name);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
        <Stack.Screen name={"Auth"} component={AuthPage} />
        <Stack.Screen name={"Login"} component={LoginPage} />
        <Stack.Screen name={"Register"} component={RegisterPage} />
        <Stack.Screen name={"Home"} component={HomePage} />
        <Stack.Screen name={"Create"} component={CreatePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}