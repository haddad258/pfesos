import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from "./navigation/DrawerNavigator";
import { Login } from './src/service'
import SplashScreen from './src/Login/SplashScreen'
import LoginPage from './src/Login/Login'
import SignIn from './src/Login/SingIn'
function HomeScreen(props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.replace("HommeScreenView")} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Scressen</Text>
    </TouchableOpacity>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeY"
          component={SplashScreen}
          options={{ title: 'SplashScreen', headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: 'LoginPage', headerShown: false }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'SignIn', headerShown: false }}
        />

        <Stack.Screen
          name="HommeScreenView"
          component={DrawerNavigator}
          options={{ title: 'Electric car charging services' }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
