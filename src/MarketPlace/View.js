

import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions,Linking, View } from "react-native";
import Colors from "../../constants/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Item({ item, props }) {
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.photo} source={{ uri: item.image }} />
                <Text style={styles.title}>{item.name}</Text>

                <View style={{ padding: 10, margin: 5, alignContent: "center", textAlign: "center" }} >
                    <Text STY >{item.description}</Text>

                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <View style={{ padding: 20, justifyContent: "center", alignItems: "center", alignContent: "center" }} >
                        <FontAwesome name="money-bill" color="black" size={20} />
                        <Text style={styles.title}>{item.regular_price}$</Text>
                    </View>
                    <View style={{ padding: 20, justifyContent: "center", alignItems: "center", alignContent: "center" }} >
                        <FontAwesome name="list-alt" color={Colors.secondary} size={20} />
                        <Text style={styles.title}>{item.stock_status}</Text>
                    </View>
                    <View style={{ padding: 20, justifyContent: "center", alignItems: "center", alignContent: "center" }} >
                        <FontAwesome name="tags" color={Colors.listed} size={20} />
                        <Text style={styles.title}>{item.type}</Text>
                    </View>

                </View>
                <TouchableOpacity onPress={() => Linking.openURL(item.link_payment)}>
                    <FontAwesome name="shopping-cart" color={Colors.primary} size={25} />
                    <Text >Show link</Text>

                </TouchableOpacity>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        marginTop: 20,

        backgroundColor: "#FFF",
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15
    },
    photo: {
        width: windowWidth / 3,
        height: windowHeight / 6,
        borderRadius: 15,
        marginTop: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 1,
        borderColor: Colors.secondary
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primary,
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
export default Item
