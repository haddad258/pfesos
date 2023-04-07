import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Colors from "../../../constants/Colors";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Item({ item ,props}) {
  return (
    <View
      key={item}
      style={styles.itemThreeContainer}
      
    >
      <View style={styles.itemThreeSubContainer}>

        <View style={styles.ProdItem}>
          <Text style={styles.itemThreeProdItem}>N°: {item.id}</Text>
          <Text style={styles.itemThreeSubProdItem} >
            {item.pay} $
          </Text>
          <Text style={styles.itemThreeSubProdItem} >
            {item.distance_time} 
          </Text>
          
         
        </View>
        <View style={styles.itemThreeContent}>
          <Text style={styles.itemThreeBrand}>{item.name}</Text>
          <View>
            <Text style={styles.itemThreeTitle}>{item.car}</Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              {item.stat}
            </Text>
          </View>
          <View style={styles.itemThreeMetaContainer}>

           
            <TouchableOpacity
             onPress={() => props.navigation.navigate("ViewRe", {
                itemId: item.id,
            })}
              style={[styles.badge, { backgroundColor: Colors.accent }]}

            >
               <FontAwesome name="eye" color="white" size={20} />
            </TouchableOpacity>
            <Text style={styles.itemThreePrice}></Text>
          </View>
        </View>
      </View>
      <View style={styles.itemThreeHr} />
    </View>

  )

}


const styles = StyleSheet.create({
  itemThreeContainer: {
    backgroundColor: 'white',
    width: windowWidth - 20,
    height: windowHeight / 4.5
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
    alignContent: "center",
    alignItems: "center"
  },
  ProdItem: {
    paddingLeft: 15,
    justifyContent: 'center',
    alignContent: "center",
    alignItems: "center",
    textAlign:"center"
  },
  itemThreeBrand: {
    fontSize: 20,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontSize: 16,
    color: '#000',
    textAlign: "center"
  },
  itemThreeProdItem: {
    fontSize: 20,
    color: Colors.primary,
  },
  itemThreeSubProdItem: {
    fontSize: 15,
    color: "'#a4a4a4'",
    textAlign:"center"
  },

  itemThreeSubtitle: {
    fontSize: 14,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor:Colors.listBackGround
  },
  itemThreePrice: {
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {

    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin:3
  },
});
export default Item