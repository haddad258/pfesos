import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Dashboard from '../src/Dashboard'
import Cars from '../src/Cars'
import MarketPlace from '../src/MarketPlace'
import MyBalance from '../src/MyBalance'
import ListReservation from '../src/Reservation/Tab.resarvation'


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Dashboard" options={{ title: 'Dashboard',unmountOnBlur: true, }} component={Dashboard} />
      <Drawer.Screen name="Cars"options={{ title: 'Vehicle',unmountOnBlur: true, }} component={Cars} />
      <Drawer.Screen name="Reservation" options={{ title: 'Reservation',unmountOnBlur: true, }}component={ListReservation} />
      <Drawer.Screen name="MarketPlace" options={{ title: 'MarketPlace',unmountOnBlur: true, }}component={MarketPlace} />
      <Drawer.Screen name="MyBalance"  options={{ title: 'my Balance',unmountOnBlur: true, }} component={MyBalance} />
      
      {/* <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="CarsView" component={TabNavigator} /> */}

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
