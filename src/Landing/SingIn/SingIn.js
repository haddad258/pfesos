import React from 'react';
import { View, Text, SafeAreaView, Keyboard, Image } from 'react-native';
import COLORS from '../../conts/colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AsyncStorage from '@react-native-community/async-storage';
/* import Loader from './components/Loader'; */
import { Login } from '../../service'

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ login: 'migo', password: '12654' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const validate = async () => {

    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.login) {
      handleError('Please input login', 'login');
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

  const login = async () => {
    //  navigation.navigate('');

    var t = await Login.Login({ ...inputs, "action": "auth", })
    console.log(typeof t)
    if (t.id) {
      console.log(t.token)
      try {
        await AsyncStorage.setItem('userData', t.token)

        var tmn = await AsyncStorage.getItem('userData')
        navigation.navigate('AppMain');

        console.log(tmn)


      } catch (error) {

      }

    }

    // setLoading(true);
    // setTimeout(async () => {
    //   setLoading(false);
    //   let userData = await AsyncStorage.getItem('userData');
    //   if (userData) {
    //     userData = JSON.parse(userData);
    //     if (
    //       inputs.login == userData.login &&
    //       inputs.password == userData.password
    //     ) {
    //      
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
      <Image style={{ width: 360, height: 150, alignItems: 'center', margin: 10 }} source={require('../../assets/logo.jpeg')} />

      <View style={{ paddingTop: 50, paddingHorizontal: 10 }}>

        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: 'bold' }}>
          Log In
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to Login
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, 'login')}
            onFocus={() => handleError(null, 'login')}
            iconName="email-outline"
            label="login"
            placeholder="Enter your login address"
            error={errors.login}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Log In" onPress={validate} />
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

export default LoginScreen;
