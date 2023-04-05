import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Supplierdata } from './data'
import Item from './Card'

function Planning(props) {


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <FlatList
                data={Supplierdata}
                numColumns={2}
                vertical
                renderItem={({ item }) => (<Item item={item} props={props} />)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}



export default Planning;
