import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',
  BookStack: 'BookStack',
  Book: 'Book',
  ContactStack: 'ContactStack',
  Contact: 'Contact',
  MyRewardsStack: 'MyRewardsStack',
  MyRewards: 'MyRewards',
  LocationsStack: 'LocationsStack',
  Locations: 'Locations',
}

export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="home" size={20} color={focused ? '#77ec69' : '#000'} />,
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={20} color={focused ? '#77ec69' : '#000'} />,
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="home" size={20} color={focused ? '#77ec69' : '#000'} />,
  },

  {
    name: screens.BookStack,
    focusedRoute: screens.BookStack,
    title: 'Reservation',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="file" size={20} color={focused ? '#77ec69' : '#000'} />,
  },

  {
    name: screens.Book,
    focusedRoute: screens.BookStack,
    title: 'Book Room',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="bed" size={20} color={focused ? '#77ec69' : '#000'} />,
  },

  {
    name: screens.ContactStack,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="phone" size={20} color={focused ? '#77ec69' : '#000'} />,
  },
  {
    name: screens.Contact,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="phone" size={20} color={focused ? '#77ec69' : '#000'} />,
  },

  {
    name: screens.MyRewardsStack,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="star" size={20} color={focused ? '#77ec69' : '#000'} />,
  },
  {
    name: screens.MyRewards,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="star" size={20} color={focused ? '#77ec69' : '#000'} />,
  },

  {
    name: screens.LocationsStack,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="map-marker" size={20} color={focused ? '#77ec69' : '#000'} />,
  },
  {
    name: screens.Locations,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="map-marker" size={20} color={focused ? '#77ec69' : '#000'} />,
  },
]
