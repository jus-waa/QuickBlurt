import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { User } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase-config.js';
import { onAuthStateChanged } from 'firebase/auth';


import HomePage from './screens/HomePage.tsx';
import CreatePage from './screens/CreatePage.tsx';
import LoginPage from './screens/LoginPage.tsx';
import InputText from './screens/InputText.tsx';

const Stack = createStackNavigator();

const InsideStack = createStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator screenOptions={{headerShown: false}}>
      <InsideStack.Screen name={"Home"} component={HomePage} />
      <InsideStack.Screen name={"Create"} component={CreatePage} />
      <InsideStack.Screen name={"Input"} component={InputText} />

    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        {user ? (
           <Stack.Screen name="Inside" component={InsideLayout} options={{headerShown: false}}/>
        ) : (
          <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
        
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}