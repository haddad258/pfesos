import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

import { screens } from '../RouteItems'
const { height } = Dimensions.get('window');
const pets = [

  {
    id: '1',
    name: 'Monophasé',
    image: require('../../assets/cats/cat1.png'),
    type: 'La prise Combo CCS',
    age: '5 hours',
    distance: "20km"
  },
  {
    id: '2',
    name: 'Monophasé',
    image: require('../../assets/cats/cat2.png'),
    type: 'La prise CHAdeMO',
    age: '2 hours',
    distance: "25 km"
  },
  {
    id: '3',
    name: 'Triphasé',
    image: require('../../assets/cats/cat3.png'),
    type: 'La prise type 3',
    age: '2 hours',
    distance: "4 km"
  },
  {
    id: '11',
    name: 'Continu ',
    image: require('../../assets/cats/cat1.png'),
    type: 'La prise type 2',
    age: '5 hours',
    distance: "13 km"
  },
  {
    id: '21',
    name: 'La prise type 1',
    image: require('../../assets/cats/cat2.png'),
    type: 'La prise type 3',
    age: '2 hours',
    distance: "5 km"
  },
  {
    id: '29',
    name: 'Triphasé',
    image: require('../../assets/cats/cat3.png'),
    type: 'prise TYPE kmT',
    age: '2 hours',
    distance: "2 km"

  },

];


const Stack = createStackNavigator()
const Card = ({ pet }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', pet)}>
      <View style={styles.cardContainer}>
        {/* Render the card image */}
        <View style={styles.cardImageContainer}>
          <Image
            source={require('../../assets/car.png')}
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
              style={{ fontWeight: 'bold', color: COLORS.dark, fontSize: 17 }}>
              {pet.type}
            </Text>
            <Icon name="plus" size={22} color={COLORS.blue} />
          </View>

          {/* Render the age and type */}
          <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>
            {pet?.name}
          </Text>
          <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.grey }}>
            {pet?.age}
          </Text>

          {/* Render distance and the icon */}
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            <Icon name="map-marker" color={COLORS.primary} size={18} />
            <Text style={{ fontSize: 12, color: COLORS.grey, marginLeft: 5 }}>
              Distance:{pet.distance}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Home = () => (
  <View style={{ marginTop: 20 }}>
    <View>
      <Text style={{fontWeight: 'bold', color: COLORS.dark, fontSize: 17 , textAlign:"center"}} >Stations-Service</Text>
    </View>


    <View style={{ marginTop: 30, }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pets}
        renderItem={({ item }) => (
          <Card pet={item} />
        )}
      />
    </View>

  </View>
)

const MyRewardsStackNavigator = () => {
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

export default MyRewardsStackNavigator
