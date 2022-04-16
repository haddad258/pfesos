import 'react-native-gesture-handler';


//import AsyncStorage from '@react-native-community/async-storage';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SingIn from './src/Landing/SingIn/SingIn';
import SingUp from './src/Landing/SingUp/SingUp';
import login from './src/Loin';
import page1 from './src/page1'
import page2 from './src/page2';
import page3 from './src/page3';
import LoginScreen from './src/crenw';
import HomeScreen from './src/App'






export default createAppContainer(
    createSwitchNavigator({
        SingIn: createStackNavigator({
            SingIn: {
                screen: SingIn,
                navigationOptions: {
                    header: null,
                }
            },
        }),
        SingUp: createStackNavigator({
            SingUp: {
                screen: SingUp,
                navigationOptions: {
                    header: null
                }
            }
        }),
        Login: createStackNavigator({
            Login: {
                screen: LoginScreen,
                navigationOptions: {
                    header: null,
                }
            },
            // ForgotPassword: {
            //     screen: ForgotPasswordScreen,
            //     navigationOptions: {
            //         header: null
            //     }
            // }
        }),
        AppMain: HomeScreen,
    }, {
        initialRouteName: 'SingIn',
    }, ),
);