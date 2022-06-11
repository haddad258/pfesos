import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/FontAwesome'
import { MangementToken, Charging_points } from '../../service'
import { screens } from '../RouteItems'
const { height } = Dimensions.get('window');


const Stack = createStackNavigator()
function Card(props) {
  useEffect(() => {

    console.log(props.showview)
  }, [])

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.showview.navigation.navigate('BookStack', { "pcharge": props.pcharge })}>
      <View style={styles.cardContainer}>
        {/* Render the card image */}
        <View style={styles.cardImageContainer}>
          <Image
            source={{ uri: props.pcharge.image }}
            style={{
              width: '85%',
              height: '85%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>

        {/* Render all the card details here */}
        <View style={styles.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              style={{ fontWeight: 'bold', color: COLORS.dark, fontSize: 15 }}>
              {props.pcharge.name}
            </Text>
            <Icon name="plus" size={22} color={COLORS.blue} />
          </View>

          {/* Render the age and type */}
          <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>
            {props.pcharge?.max_date_unit}
          </Text>
          <Text style={{ fontSize: 14, marginTop: 5, color: COLORS.grey }}>
            {props.pcharge?.duration_unit} - {props.pcharge.price} $
          </Text>

          {/* Render distance and the icon */}
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            <Icon name="map-marker" color={COLORS.primary} size={18} />
            <Text style={{ fontSize: 9, color: COLORS.grey, marginLeft: 5 }}>
              {props.pcharge.type} - {props.pcharge.stock_status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
function Home(props) {
  const [listpoint, setlistpoint] = useState([])
  useEffect(() => {

    console.log("tokee")
    gettoken()
  }, [])


  const gettoken = async () => {
    var token = await MangementToken.GetConfigSession()
    console.log(token)

    var list = await Charging_points.get_charging_points()
    setlistpoint(list)

  }

  return (<View style={{ marginTop: 20 }}>
    <View>
      <Text style={{ fontWeight: 'bold', color: COLORS.dark, fontSize: 17, textAlign: "center" }} >orderlist</Text>
    </View>


    <View style={{ marginTop: 30, }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listpoint}
        renderItem={({ item }) => (
          <Card pcharge={item} showview={props} />
        )}
      />
    </View>

  </View>)
}



const OrdersList = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.Home} component={Home} />
    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 150,
    backgroundColor: COLORS.background,
    borderRadius: 20,
    padding: 20
  },
});

export default OrdersList
