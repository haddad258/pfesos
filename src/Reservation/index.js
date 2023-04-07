import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button, Keyboard, Alert, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import Input from '../../components/Inputs';
import * as Location from "expo-location";

import { ReservationManagement, Cars_Managment, MangementToken } from '../../src/service'

export default function Reservation(props) {
    const [errors, setErrors] = React.useState({});
    const [book, setbook] = useState({})
    const [active, setactive] = useState(true)
    const [list, setlist] = useState([])
    const [selectedId, setSelectedId] = useState("");
    const handleChange = (key, value) => {
        setbook({ ...book, [key]: value });
    };
    useEffect(() => {
        GetPosition()
        getList()
    }, []);
    const getList = async () => {
        console.log("getList")
        var list = await Cars_Managment.ListCars({
            "action": "mycars",
            "token": await MangementToken.GetConfigSession()
        })
        if (list) {
            setactive(false)
            setlist(list)
        } else {
            setactive(false)

        }
        console.log(list)

    }
    const GetPosition = async () => {
        console.log("hehehehe")
        const locationStatus = await Location.requestForegroundPermissionsAsync();
        if (locationStatus.status !== "granted") {
            alert("Sorry, we need location permissions to make this work!");
        } else {
            const location = await Location.getCurrentPositionAsync({});
            if (location) setbook({ ...book, "longitude": location?.coords?.longitude, "latitude": location.coords.latitude });
        }
    }
    const onSuccess = async () => {

        var list = await ReservationManagement.Registerbook({
            ...book,
            "action": "new_emergency",
            "id_car": selectedId,
            "token": await MangementToken.GetConfigSession()
        })
        console.log(list)
        if (list) {
            Alert.alert("saved")
            props.navigation.navigate("ListReservation")


        }else{
            Alert.alert("check your informations,Please")

        }
        // if (list) setlist(list)

    }
    const CradItem = ({ item }) => {
         const backgroundColor = item.id === selectedId ? Colors.primary :  Colors.secondary ;
        // const color = item.id === selectedId ? 'white' : 'black';

        return (
            <TouchableOpacity onPress={()=>setSelectedId(item.id)} style={[styles.item, { backgroundColor }]}>
                <Text style={[styles.title, { color: "black" }]}>{item.registration} </Text>
                <Text style={[styles.title, { color: "black" }]}>{item.name} </Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={{ marginVertical: 20, margin: 15, backgroundColor: Colors.accent }}>
                    <Text  style={[styles.title,{fontWeight:"bold"}]}> Select Your Cars </Text>
                    <FlatList
                        data={list}
                        renderItem={({ item }) => (
                            <CradItem item={item} props={props} refresh={() => getList()} />
                        )}
                        horizontal={true}
                        keyExtractor={item => item.id}
                        extraData={selectedId}
                    />
                    <Input
                        onChangeText={text => handleChange("user_name", text)}
                        onFocus={() => console.log(null, 'user_name')}
                        iconName="passport"
                        label="user_name"
                        placeholder="Enter your user_name"
                        error={errors.brand}
                    />

                    <Input
                        onChangeText={text => handleChange("user_mail", text)}
                        onFocus={() => console.log(null, 'type')}
                        iconName="ocr"
                        label="user_mail"
                        placeholder="Enter your email"
                        error={errors.type}
                    />
                    <Input
                        onChangeText={text => handleChange("user_phone", text)}
                        onFocus={() => console.log(null, 'user_phone')}
                        iconName="pill"
                        label="user_phone"
                        placeholder="Enter your name"
                        error={errors.name}
                    />


                    <Button title="Save" color={Colors.primary} onPress={() => onSuccess()} />
                    <Text  style={[styles.title,{fontWeight:"bold"}]}> Coor Maps: {book.longitude} </Text>
                    <Text  style={[styles.title,{fontWeight:"bold"}]}> Coor Maps: {book.latitude} </Text>

                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accent,
        margin: 2
    },
    logo: {
        fontWeight: "bold",
        fontSize: 10,
        color: Colors.secondary,
        marginBottom: 40
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:20
      },
      title: {
        fontSize: 15,
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
