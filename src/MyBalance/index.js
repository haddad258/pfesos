import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, Keyboard, Alert } from 'react-native';
import Colors from '../../constants/Colors';

import { Cars_Managment, MangementToken } from '../service';
export default function App(props) {
    const [KWH, setKWH] = useState('')
    const [active, setactive] = useState(true)
    const getlistSSolde = async () => {
        
        var list = await Cars_Managment.ListCars({
            "action": "my_balance",
            token: await MangementToken.GetConfigSession()


        })
         if(list) {
            setactive(false)
            setKWH(list.balance)
        }
        console.log('list', list)

    }
    useEffect(() => {
        getlistSSolde()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>My Pay KWH</Text>
            {active && <ActivityIndicator size="large" color="#00ff00" />}
            <Text style={styles.logoo}>{KWH}</Text>

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
        fontSize: 30,
        color: Colors.black,
        marginBottom: 40
    },
    logoo: {
        fontWeight: "bold",
        fontSize: 25,
        color: Colors.secondary,
        marginBottom: 40
    },

});
