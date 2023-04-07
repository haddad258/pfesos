import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListRef from "./index";
import ViewRe from "./View.Reservation";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  unmountOnBlur: true,
};

const ListReservationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ListRef"  options={{ title: 'List',unmountOnBlur: true, }} component={ListRef} />
      <Stack.Screen name="ViewRe" options={{ title: 'View',unmountOnBlur: true, }} component={ViewRe} />
    </Stack.Navigator>
  );
};



export { ListReservationNavigator };
