import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import LoginComponent from '../Onboarding/Login';
import InsertPhone from '../Onboarding/InsertPhone';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeMt from './HomeMt';
import homeExplore from './HomeExplore';
import HomeFriend from './HomeFriend';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="CrurrentOrders"
        backBehavior="initialRoute"
        tabBarPosition="top"
        swipeEnabled={true}
        swipeVelocityImpact={0.2}
        springVelocityScale={0}
        sceneContainerStyle={{backgroundColor: '#fff'}}
        style={{backgroundColor: '#ffffff'}}
        tabBarOptions={{
          activeTintColor: '#0A0A0A',
          inactiveTintColor: '#C2C2C2',
          showIcon: true,
          pressColor: '#fff',
          scrollEnabled: false,
          tabStyle: {
            backgroundColor: '#fff',
            borderRadius: 30,
            justifyContent: 'center',
            alignContent: 'center',
          },
          indicatorStyle: {backgroundColor: '#F95454'},
          style: {
            backgroundColor: '#ffffff',
            margin: 0,
            height: 52,
            width: '100%',
          },
          labelStyle: {fontSize: 14},
        }}>
        <Tab.Screen component={HomeFriend} name="Friend" />
        <Tab.Screen component={homeExplore} name="Explore" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
