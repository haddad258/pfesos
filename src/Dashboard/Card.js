

import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from "react-native";
import Colors from "../../constants/Colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Item({ item, props }) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(item.screen)}>
            <View style={styles.container}>
                <Image style={styles.photo} source={{ uri: item.uri }} />
              
                <Text style={styles.title}>{item.name}</Text>
            </View>
           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        marginTop: 20,
        width: (windowWidth / 2) - (windowWidth * 0.05),
        height: windowHeight / 4,
        backgroundColor:Colors.accent,
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
        margin:10
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
        padding:10
    }
})
export default Item
