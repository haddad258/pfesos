import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Linking, ActivityIndicator, Keyboard, Alert, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import { Cars_Managment, MangementToken } from '../service';
export default function App(props) {
    const [KWH, setKWH] = useState('')
    const [active, setactive] = useState(true)
    const [number, setnumber] = useState(10)
    const getlistSSolde = async () => {

        var list = await Cars_Managment.ListCars({
            "action": "my_balance",
            token: await MangementToken.GetConfigSession()


        })
        if (list) {
            setactive(false)
            setKWH(list.balance)
        }
        console.log('list', list)

    }
    useEffect(() => {
        getlistSSolde()
    }, [])
    const setnewnumber = async (e) => {
        if (number < 0 || !e) {
            setnumber(0)
            Alert.alert("Balance should be >0")
        } else {
            setnumber(parseInt(e))

        }

    }
    const AcceptPayement = async () => {

        // alert("http://site.yasmineinfo.com/produit/recharge-solde-kwh")
        Linking.openURL("http://site.yasmineinfo.com/produit/recharge-solde-kwh")
        // var list = await Cars_Managment.ListCars({
        //     "action": "my_balance",
        //     token: await MangementToken.GetConfigSession()


        // })
        // if (list) {
        //     setactive(false)
        //     setKWH(list.balance)
        // }
        // console.log('list', list)

    }

    return (
        <View style={styles.container}>

         
            
         
           


            <Text style={styles.logo}>My Pay KWH</Text>
            {active && <ActivityIndicator size="large" color="#00ff00" />}
            <Text style={styles.logoo}>{KWH}</Text>
            <View style={{
                borderWidth: 0.5,
                borderColor: 'black',
                margin: 10,
                width: "100%"
            }} />
            <TouchableOpacity
                style={[styles.badge, { width: "80%", marginTop: 50, backgroundColor: Colors.primary }]}
                onPress={() => AcceptPayement()} >
                <Text style={styles.newinputt}> new  Payment </Text>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,

    },
    badge: {

        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 3,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: "center"
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
    newinput: {
        fontWeight: "bold",
        fontSize: 20,
        color: Colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'

    },
    newinputt: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'

    },

});
