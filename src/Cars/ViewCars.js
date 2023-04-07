import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Alert, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../../constants/Colors'
import { Cars_Managment ,MangementToken} from '../service'
const { height } = Dimensions.get('window');


export default function Card({ item,refresh }) {

    const createTwoButtonAlert = (id) =>
    Alert.alert('Delete Vehicule', 'Are you sure you want to take that vehicle off the list?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => deleteitem(id)},
    ]);
    const deleteitem = async (id) => {
         console.log(id)
          var list =  await Cars_Managment.RegisterCars({
            "id_car":id,
            "action":"remove_car",
            token:await MangementToken.GetConfigSession()


          })
          if(list) refresh()

          console.log(list)

    }

    return (
        <View>
            <ScrollView>
            <View style={styles.row}>
                <View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{item.registration}</Text>
                    </View>
                    <View style={styles.msgContainer}>
                        <Text style={styles.msgTxt}>{item.brand}</Text>
                    </View>
                    <View style={styles.msgContainer}>
                        <Text style={styles.msgTxt}>{item.name}</Text>
                    </View>
                </View>
                <View >
                    <Text style={[styles.mblTxt, { padding: 10 }]}>{item.type}</Text>
                    <TouchableOpacity
                        onPress={() => createTwoButtonAlert(item.id)}
                    >
                        <Icon name="trash" size={20} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#f7f7f7',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 20,
        margin: 5

    },
    pic: {
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
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
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#666',
        fontSize: 12,
        marginLeft: 15,
    },
});