
import React, { Component, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    RefreshControl,
    ActivityIndicator,
    ScrollView,
    FlatList,
} from 'react-native';
import Colors from '../../../constants/Colors';
import { ReservationManagement, MangementToken } from '../../../src/service'
import Item from './ViewIndex';
export default function Cars(props) {

    const [active, setactive] = useState(true)
    const [list, setlist] = useState([])
    const getList = async () => {
        console.log({
            "action": "all_emergency",
            "token": await MangementToken.GetConfigSession()
        })
        var list = await ReservationManagement.Listbook({
            "action": "all_emergency",
            "token": await MangementToken.GetConfigSession()
        })
        if (list) {
            setactive(false)
            setlist(list)
        }else{
            setactive(false)

        }
        console.log(list.length)

    }

    useEffect(() => {
        getList()

        console.log(" getList()")

    }, [])




    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Text
                style={{
                    fontSize: 26,
                    color: Colors.black,
                    textAlign: 'center',
                    marginBottom: 30,
                    marginTop: 10,
                }}>
                  {list.length} :requests
            </Text>
            {active && <ActivityIndicator size="large" color="#00ff00" />}

            <FlatList
                data={list}
                renderItem={({ item }) => (<Item item={item} props={props} />)}
                keyExtractor={item => item.id}
                refreshControl={<RefreshControl refreshing={active}  onRefresh={() => getList()} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
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
        fontSize: 12,

    },
    icon: {
        height: 28,
        width: 28,
    }
});

