import 'react-native-gesture-handler';
import React, { createRef } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './navigation/DrawerNavigator'

const navigationRef = createRef()
const nav = () => navigationRef.current

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar  />
      <NavigationContainer ref={navigationRef}>
          <DrawerNavigator nav={nav} />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    width:"100%"
  },
})

export default App
