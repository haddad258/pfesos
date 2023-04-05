import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Dashboard from '../src/Dashboard'
import Cars from '../src/Cars'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Cars" component={Cars} />
      
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="CarsView" component={TabNavigator} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
