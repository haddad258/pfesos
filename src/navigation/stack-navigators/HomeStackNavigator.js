import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import COLORS from '../../conts/colors';
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'

const Stack = createStackNavigator()
const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar translucent backgroundColor={COLORS.tranparent} />

      {/* Onboarding Image */}
      <Image
        source={require('../../assets/logo.jpeg')}
        style={style.image}
      />

      {/* Indicator container */}
      <View style={style.indicatorContainer}>
        <View style={style.indicator} />
        <View style={style.indicator} />
        <View style={[style.indicator, style.indicatorActive]} />
      </View>

      {/* Title and text container */}
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        {/* Title container */}
        <View>
          <Text style={style.title}>Urgent call to recharge </Text>
          <Text style={style.title}>the electric car</Text>
        </View>

        {/* Text container */}
        <View style={{marginTop: 10}}>
          <Text style={style.textStyle}>
            Some description here
          </Text>
          <Text style={style.textStyle}>Dashboard</Text>
        </View>
      </View>

      {/* Button container */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}>
        {/* button */}
     {/*    <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <View style={style.btn}>
            <Text style={{color: 'white'}}>Get Started</Text>
          </View>
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 160,
    width: 300,
    borderBottomLeftRadius: 100,
    margin:20,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontWeight: 'bold'},
  textStyle: {fontSize: 16, color: COLORS.grey},
});


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.Home} component={OnBoardScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
