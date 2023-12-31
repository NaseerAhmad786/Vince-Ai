import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WellcomeScreen from '../Screens/WellcomeScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="WellcomeScreen"  component={WellcomeScreen} />
        <Stack.Screen name="HomeScreen"  component={HomeScreen} />
     
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}