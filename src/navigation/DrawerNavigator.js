import * as React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity,NativeModules } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';

import BottomTabNavigator from './BottomTabNavigator'
import { routes, screens } from './RouteItems'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name
  const logout = async()=>{
     await  AsyncStorage.removeItem('userData')      


  }
 

  
  return (
    <DrawerContentScrollView {...props}>

      {
        routes.filter(route => route.showInDrawer).map((route) => {
          const focusedRoute = routes.find(r => r.name === currentRouteName)
          const focused = focusedRoute ?
            route.name === focusedRoute?.focusedRoute :
            route.name === screens.HomeStack
          return (
            <DrawerItem
              key={route.name}
              label={() => (
                <Text style={true ? styles.drawerLabelFocused : styles.drawerLabel}>
                  <Icon name={route.nameicon} size={20} color={focused ? '#77ec69' : '#000'} /> {route.title}
                </Text>
              )}
              onPress={() => props.navigation.navigate(route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
         <DrawerItem
              key={"out"}
              label={() => (
                <Text style={true ? styles.drawerLabelFocused : styles.drawerLabel}>
                  <Icon name="arrow-circle-left" size={23} color={'#77ec69'} />log out
                </Text>
              )}
              onPress={() => logout()}
              style={[styles.drawerItem]}
            />
           
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = ({ nav }) => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#77ec69',
          height: 80,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name="bars" size={20} color="#000" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} options={{
        title: 'Home',
        headerTitle: () => <Image style={{ width: 120, height: 30 }} source={require('../assets/logo.jpeg')} />,
        headerRight: () => (
          <View style={styles.headerRight}>
            <Icon name="bell" size={30} color="#000000" />
          </View>
        ),
      }} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#77ec69',
  },
})

export default DrawerNavigator
