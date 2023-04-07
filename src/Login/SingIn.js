import React, { useState } from 'react';
import { StyleSheet, Text,Dimensions, View, TextInput, TouchableOpacity, Keyboard, Alert, Image } from 'react-native';
import Colors from '../../constants/Colors';
import { Login } from '../service';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App(props) {
    const [login, setlogin] = useState('migo')
    const [password, setpassword] = useState('')
    const [username, setusername] = useState('')


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
        if (!username) {
            Alert.alert("Wrong username ", "check username")
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
            "action": "new_user",
            "email": login,
            "password": password,
            "username": username
        })

        if (data) {
            console.log(data)
            Alert.alert("Saved ", "cridential saved success")

            props.navigation.replace("LoginPage")
        } else {
            Alert.alert("Wrong login ", "The cridential you’ve entered is incorrect")

        }


    }
    return (
        <View style={styles.container}>
            <Image style={{ width: windowWidth - 20, height: "15%", alignItems: 'center', margin: 50, paddingHorizontal: 20 }} source={require('../../assets/logo.png')} />

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
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="username..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setusername(text)} />
            </View>
            <TouchableOpacity onPress={() => props.navigation.replace("LoginPage")} >
                <Text style={styles.forgot}>you have aacount</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => validate()} style={styles.loginBtn}>
                <Text style={styles.loginText}>Create</Text>
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
        backgroundColor: Colors.accent,
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
        backgroundColor: Colors.accent,
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
