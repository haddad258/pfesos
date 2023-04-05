import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import Colors from '../../constants/Colors';
import { Login } from '../service';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App(props) {
    const [login, setlogin] = useState('migo')
    const [password, setpassword] = useState('jjj')

    const validate = async () => {

        Keyboard.dismiss();
        let isValid = true;
        console.log(login)
        if (!login) {
            Alert.alert("Wrong login ", "check login")
            isValid = false;
        }
        if (!password) {
            Alert.alert("Wrong password ", "check password")
            isValid = false;
        }
        if (isValid) {
            onSuccess();
        }
    };
    const onSuccess = async () => {
        console.log(login)
        console.log(password)
        // 
        var data = await Login.Login({
            "action": "auth",
            "login": "migo",
            "password": "12654"
        })
        if (data) {
            await AsyncStorage.setItem('userData', data.token).then(() => {
                props.navigation.replace("HommeScreenView");
            })
        } else {
            Alert.alert("Wrong login ", "The cridential you’ve entered is incorrect")

        }


    }
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>HeyAPP</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="login..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setlogin(text)} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setpassword(text)} />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => validate()} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> props.navigation.replace("SignIn")} >
                <Text style={styles.loginText}>create account</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: Colors.secondary,
        marginBottom: 40
    },
    inputView: {
        width: "90%",
        backgroundColor: Colors.primary,
        borderRadius: 5,
        height: 60,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 60,
        color: Colors.black,
        fontSize: 20
    },
    forgot: {
        color: Colors.black,
        fontSize: 11
    },
    loginBtn: {
        width: "50%",
        backgroundColor: Colors.listed,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: Colors.secondary
    }
});
