import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {ListReservationNavigator} from './List/Stack.View.Reservation'
import AddReservation from './index'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListReservation"
          options={{ title: 'List',
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="suitcase-rolling" color={color} size={size} />
          ),
          unmountOnBlur: true, headerShown: false }}
          component={ListReservationNavigator} />
      <Tab.Screen name="AddReservation" 
          options={{ title: 'Add new', headerShown: false ,
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color={color} size={size} />
          ),}}
          component={AddReservation} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator