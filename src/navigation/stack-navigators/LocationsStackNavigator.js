import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'

import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, SafeAreaView, ScrollView, FlatList,TouchableOpacity,StyleSheet ,Pressable,RefreshControl} from 'react-native';
import COLORS from '../../conts/colors';
import { Cars_Managment, MangementToken } from '../../service'
import AddCar from './Add.Car'
const Stack = createStackNavigator()

function LoginScreen() {
  const [Cars, setCars] = useState([])
const [refreshing,setrefreshing]=useState(false)
  useEffect(() => {

    getlistCars()
  }, [])
  const getlistCars = async () => {
    setrefreshing(true)

    var token = await MangementToken.GetConfigSession()
    console.log("getlistCars", token)
    var list = await Cars_Managment.ListCars({
      "action": "mycars",
      "token": token,
    })
    console.log("ListCars", list)
    setCars(JSON.parse(list))
    setrefreshing(false)
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity
    onPress={() =>console.log(item)}
  >
    <Text> item.brand</Text>
    </TouchableOpacity>
  )
  const Card = ({item}) => {
    return (
      <Pressable
        activeOpacity={15}
        onPress={() =>getlistCars() }
   
    style={{ padding:2}}>
        <View style={style.card}>
          {/* item image */}
          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {item.brand}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: COLORS.blue, fontSize: 16}}>
               {item.registration}
              </Text>
              
            </View>

            <Text style={{color: COLORS.black, fontSize: 14, marginTop: 5}}>
            {item.type} -{item.name}
            </Text>
            {/* Location text */}

        
          </View>
        </View>
      </Pressable>
    );
  };
  return (

    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* <Loader visible={loading} /> */}
      <ScrollView>
        <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
          <AddCar  reloaddata={()=>getlistCars()}/>
          < View style={{ marginTop: 30 ,backgroundColor:COLORS.tranparent}} >
            <FlatList
              data={Cars}
              renderItem={({item}) => <Card item={item} />}
              keyExtractor={item => item.brand}
              refreshControl={<RefreshControl
                colors={["#9Bd35A", "#689F38"]}
                refreshing={refreshing}
                onRefresh={getlistCars} />}
            />
          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const LocationsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.Locations} component={LoginScreen} />
    </Stack.Navigator>
  )
}
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionsCard: {
    height: 210,
    width: 70,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 100,
    backgroundColor: COLORS.grey,
    width: "100%",
    marginRight: 20,
    padding: 15,
    borderRadius: 30,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey},
});
export default LocationsStackNavigator
