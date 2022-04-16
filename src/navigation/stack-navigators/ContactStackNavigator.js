

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { screens } from '../RouteItems'
  
const Stack = createStackNavigator()

class Home extends React.Component {     
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.container1}>
        <Text style={styles.name}>Container1</Text>
        </View>
        <View style={styles.container2}>
        <Text style={styles.name}>Container1</Text>
        </View>
        <View style={styles.container3}>
        <Text style={styles.name}>Container1</Text>
        </View>
        <View style={styles.container4}>
        <Text style={styles.name}>Container1</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    backgroundColor: '#3d06d6',
    height: 80,
    padding: 10,
    borderBottomLeftRadius:100,
  },
  container2: {
    backgroundColor: '#0cad95',
    height: 80,
    padding: 10,
    borderBottomLeftRadius:100,
  },
  container3: {
    backgroundColor: '#d6a606',
    height: 80,
    padding: 10,
    borderBottomLeftRadius:100,
  },
  container4: {
    backgroundColor: '#06bad6',
    height: 80,
    padding: 10,
    borderBottomLeftRadius:100,
  },
});


const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.Contact} component={Home} />
    </Stack.Navigator>
  )
}

export default ContactStackNavigator
