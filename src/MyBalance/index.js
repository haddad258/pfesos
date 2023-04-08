import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, Keyboard, Alert, TouchableOpacity } from 'react-native';
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

        alert(number)

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

<TextInput
                        style={styles.input}
                        onChangeText={(e) => setnewnumber(e)}
                        value={number}
                        placeholder="My balance"
                        keyboardType="numeric"
                    />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}  >
                <TouchableOpacity
                    style={[styles.badge, { backgroundColor: "#dc1e04" }]}
                    onPress={() => setnewnumber(number - 1)} >
                    <FontAwesome name="minus" color="black" size={20} />

                </TouchableOpacity>
                <View style={{justifyContent:"center", alignContent:"center",alignItems:"center"}}  >

                    <Text style={styles.newinput} > {number}  </Text>
                </View>

                <TouchableOpacity
                    style={[styles.badge, { backgroundColor: "#048adc" }]}
                    onPress={() => setnewnumber(number + 1)} >
                    <FontAwesome name="plus" color="black" size={20} />

                </TouchableOpacity>



            </View>
            <TouchableOpacity
                style={[styles.badge, { width:"80%", marginTop:50,backgroundColor: Colors.primary }]}
                onPress={() => AcceptPayement()} >
            <Text style={styles.newinputt}> new Blance Paument </Text>
            </TouchableOpacity>


            <View style={{
                borderWidth: 0.5,
                borderColor: 'black',
                margin: 10,
                width: "100%"
            }} />


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
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center'

    },
    newinputt: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center'

    },

});
