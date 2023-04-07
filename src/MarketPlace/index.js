
import React, { Component, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    RefreshControl,
    Alert,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import Colors from '../../constants/Colors';
import { Charging_points } from '../../src/service'
import ViewMarket from './View';
export default function Cars(props) {

    const [list, setlist] = useState([])
    const [active, setactive] = useState(true)
    
    const getList = async () => {
        var list = await Charging_points.getProduct()
         if (list){
             setlist(list)
             setactive(false)
            }
        console.log(list)

    }

    useEffect(() => {
        getList()

        console.log(" getList()")

    }, [])

    return (
        <View style={{ flex: 1 , justifyContent: "center", alignItems: "center"}} >
            <Text
                style={{
                    fontSize: 26,
                    color: Colors.black,
                    textAlign: 'center',
                    marginBottom: 30,
                    marginTop: 10,
                }}>
                Market Place
            </Text>
            { active && <ActivityIndicator size="large" color="#00ff00" />}
                <FlatList
                data={list} 
                renderItem={({ item }) => (<ViewMarket item={item} props={props} />)}
                refreshControl={<RefreshControl refreshing={active}  onRefresh={() => getList()} />}
                keyExtractor={item => item.id}
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

