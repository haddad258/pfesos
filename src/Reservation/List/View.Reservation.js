import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ActivityIndicator, Alert, ScrollView } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Colors from '../../../constants/Colors';
import { ReservationManagement, MangementToken } from '../../../src/service'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App(props) {

    const [active, setactive] = useState(true)

    const [list, setlist] = useState([])
    const getList = async () => {

        var list = await ReservationManagement.Listbook({
            "action": "get_emergency",
            "token": await MangementToken.GetConfigSession(),
            "id_emergency": props?.route?.params?.itemId
        })
        console.log(list)
        if (list) {
            setactive(false)
            setlist(list[0])}

    }

    useEffect(() => {
        getList()
        console.log(props?.route?.params?.itemId)

    }, [])
    const createTwoButtonAlert = (id) =>
    Alert.alert('Cance', 'Are you sure you want to cancel this booking off the list?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => deleteitem(id)},
      ]);

      const deleteitem = async (id) => {
           console.log(id)
            var list =  await ReservationManagement.Registerbook({
              "id_emergency":id,
              "action":"cancel_emergency",
              token:await MangementToken.GetConfigSession()
  
  
            })

            if(list){
                Alert.alert("Cancled , refresh your list")
                props.navigation .navigate("ListRef")
    
    
            }
  
      }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.logo}>Reservation #{list.id}</Text>
               { active && <ActivityIndicator size="large" color="#00ff00" />}

                <View style={styles.row}>
                    <Text style={styles.nameTxt}>Personnel</Text>

                </View>
                <View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>User</Text>
                        <Text style={styles.time}>{list.name}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>e-mail</Text>
                        <Text style={styles.time}>{list.mail}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>Phone</Text>
                        <Text style={styles.time}>{list.phone}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.nameTxt}>Vehicule</Text>

                </View>
                <View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>Vehicule</Text>
                        <Text style={styles.time}>{list.car}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>Registration</Text>
                        <Text style={styles.time}>{list.registration_number}</Text>
                    </View>

                </View>
                <View style={styles.row}>
                    <Text style={styles.nameTxt}>Operator</Text>

                </View>
                <View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>Operator</Text>
                        <Text style={styles.time}>{list.operateur}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>Phone</Text>
                        <Text style={styles.time}>{list.phone}</Text>
                    </View>

                </View>
                <View style={styles.row}>
                    <Text style={styles.nameTxt}>Request</Text>

                </View>
                <View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>Status</Text>
                        <Text style={styles.time}>{list.stat}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>Distance & duration</Text>
                        <Text style={styles.time}>{list.distance_time}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>Pay</Text>
                        <Text style={styles.time}>{list.pay}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.time}>Payment Date</Text>
                        <Text style={styles.time}>{list.date_payment}</Text>
                    </View>
                </View>
                <View style={styles.itemThreeMetaContainer}>
                  {list.btn_cancel &&  <TouchableOpacity
                    onPress={()=>createTwoButtonAlert(list.id)} 
                        style={[styles.badge, { backgroundColor: "red"}]}
                    >
                        <FontAwesome name="trash" color="white" size={20} />

                    </TouchableOpacity>}
                  {list.btn_pay &&  <View
                        style={[styles.badge, { backgroundColor: "green" }]}

                    >
                        <FontAwesome name="circle" color="white" size={20} />
                    </View>}
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: "center",
        width: windowWidth

    },
    badge: {

        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        margin: 3
    },
    logo: {
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 15,
        color: Colors.secondary,
        marginBottom: 40
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        backgroundColor: Colors.primary,
        borderBottomWidth: 1,
        padding: 10,
        width: windowWidth - 50,
        justifyContent: 'space-between',

    },
    pic: {
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: 270,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 15,

    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    end: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontWeight: '400',
        color: '#666',
        fontSize: 14,

    },
    icon: {
        height: 28,
        width: 28,
    },
    itemThreeMetaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        margin: 10,
        backgroundColor:Colors.listBackGround
      },

});
