import * as React from "react";
import { FlatList, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import { Supplierdata } from './data'
import Colors from "../../constants/Colors";
import Item from './Card'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Planning(props) {


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ScrollView>
                <FlatList
                    data={Supplierdata}
                    numColumns={2}
                    vertical
                    renderItem={({ item }) => (<Item item={item} props={props} />)}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity onPress={() => props.navigation.replace("LoginPage")}>
                    <View style={styles.container}>
                        <Image style={styles.photo} source={{ uri: "https://i.ibb.co/d4QdwvY/lgoout.png" }} />

                        <Text style={styles.title}>LogOUT</Text>
                    </View>

                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: Colors.listed,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15
    },
    photo: {
        width: windowWidth / 3,
        height: windowHeight / 6,
        borderRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        margin: 10
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
    },
    category: {
        marginTop: 5,
        marginBottom: 5
    },
    iconsView: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: 'row',
        padding: 10
    }
})
export default Planning;
