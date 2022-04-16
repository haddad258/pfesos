import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'


import { View, Text, SafeAreaView, Keyboard, Image } from 'react-native';
import COLORS from '../../conts/colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AsyncStorage from '@react-native-community/async-storage';
/* import Loader from './components/Loader'; */
const Stack = createStackNavigator()

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: '', password: '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const validate = async () => {
    login();

    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    navigation.navigate('AppMain');
    // setLoading(true);
    // setTimeout(async () => {
    //   setLoading(false);
    //   let userData = await AsyncStorage.getItem('userData');
    //   if (userData) {
    //     userData = JSON.parse(userData);
    //     if (
    //       inputs.email == userData.email &&
    //       inputs.password == userData.password
    //     ) {
    //       navigation.navigate('HomeScreen');
    //       AsyncStorage.setItem(
    //         'userData',
    //         JSON.stringify({...userData, loggedIn: true}),
    //       );
    //     } else {
    //       Alert.alert('Error', 'Invalid Details');
    //     }
    //   } else {
    //     Alert.alert('Error', 'User does not exist');
    //   }
    // }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (

    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* <Loader visible={loading} /> */}
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>

        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: 'bold' }}>
          Save your car
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter Your Car Details 
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="passport"
            label="Matricule"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'spassword')}
            onFocus={() => handleError(null, 'pasdsword')}
            iconName="ocr"
            label="Type"
            placeholder="Enter your password"
            error={errors.password}
          />
             <Input
            onChangeText={text => handleOnchange(text, 'spassword')}
            onFocus={() => handleError(null, 'pasdsword')}
            iconName="pill"
            label="ability"
            placeholder="Enter your password"
            error={errors.password}
          />
             <Input
            onChangeText={text => handleOnchange(text, 'spassword')}
            onFocus={() => handleError(null, 'pasdsword')}
            iconName="polaroid"
            label="Date"
            placeholder="Enter your password"
            error={errors.password}
          />
          <Button title="Save" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('SingUp')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Don't have account ?Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const LocationsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.Locations} component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default LocationsStackNavigator
