import React from 'react';
import { View } from 'react-native';
import Splash from './src/Onboarding/Splash';
import LoginComponent from './src/Onboarding/Login';
import InsertPhone from './src/Onboarding/InsertPhone';
import TabBar from './src/Components/TabViewProfile';
import AppNavigator from './src/Home/Index';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );

}