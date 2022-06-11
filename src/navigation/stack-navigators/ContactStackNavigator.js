

// import React from 'react';
// ;
// import { createStackNavigator } from '@react-navigation/stack'
// import { screens } from '../RouteItems'

// const Stack = createStackNavigator()
// import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

// const SCREEN_HEIGHT = Dimensions.get('window').height
// const SCREEN_WIDTH = Dimensions.get('window').width
// import Icon from 'react-native-vector-icons/Ionicons'
// const Users = [
//   { id: "1", Description:"soslksme dessjskjscription",uri: require('../../../assets/1.jpg') },
//   { id: "2", Description:"somxkxe description",uri: require('../../../assets/2.jpg') },
//   { id: "3", Description:"qms,s descrxkxxiption",uri: require('../../../assets/3.jpg') },
//   { id: "s4", Description:"lwsl e description",uri: require('../../../assets/4.jpg') },
//   { id: "sz5", Description:"sww,wome desqqcription",uri: require('../../../assets/5.jpg') },  
//   { id: "1z", Description:"some descrx,xiption",uri: require('../../../assets/1.jpg') },
//   { id: "2s", Description:"soxlxknxnme description",uri: require('../../../assets/2.jpg') },
//   { id: "31", Description:"some descrxm,xx,iption",uri: require('../../../assets/3.jpg') },
//   { id: "42", Description:"soksme description",uri: require('../../../assets/4.jpg') },
//   { id: "51", Description:"some dexk,x,xscription",uri: require('../../../assets/5.jpg') }, 
//   { id: "231", Description:"some description",uri: require('../../../assets/1.jpg') },
//   { id: "21", Description:"soxkxxkme description",uri: require('../../../assets/2.jpg') },
//   { id: "3332222", Description:"some description",uri: require('../../../assets/4.jpg') },
//   { id: "533", Description:"soxmx,mx,me description",uri: require('../../../assets/5.jpg') },
// ]
// class Home extends React.Component {

//   constructor() {
//     super()

//     this.position = new Animated.ValueXY()
//     this.state = {
//       currentIndex: 0
//     }

//     this.rotate = this.position.x.interpolate({
//       inputRange: [-SCREEN_WIDTH /2 ,0, SCREEN_WIDTH /2],
//       outputRange: ['-30deg', '0deg', '10deg'],
//       extrapolate: 'clamp'
//     })

//     this.rotateAndTranslate = {
//       transform: [{
//         rotate: this.rotate
//       },
//       ...this.position.getTranslateTransform()
//       ]
//     }

//     this.likeOpacity = this.position.x.interpolate({
//       inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
//       outputRange: [0, 0, 1],
//       extrapolate: 'clamp'
//     })
//     this.dislikeOpacity = this.position.x.interpolate({
//       inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
//       outputRange: [1, 0, 0],
//       extrapolate: 'clamp'
//     })

//     this.nextCardOpacity = this.position.x.interpolate({
//       inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
//       outputRange: [1, 0, 1],
//       extrapolate: 'clamp'
//     })
//     this.nextCardScale = this.position.x.interpolate({
//       inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
//       outputRange: [1, 0.8, 1],
//       extrapolate: 'clamp'
//     })

//   }
//   UNSAFE_componentWillMount() {
//     this.PanResponder = PanResponder.create({

//       onStartShouldSetPanResponder: (evt, gestureState) => true,
//       onPanResponderMove: (evt, gestureState) => {

//         this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
//       },
//       onPanResponderRelease: (evt, gestureState) => {

//         if (gestureState.dx > 120) {
//           Animated.spring(this.position, {
//             toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
//           }).start(() => {
//             this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
//               this.position.setValue({ x: 0, y: 0 })
//             })
//           })
//         }
//         else if (gestureState.dx < -120) {
//           Animated.spring(this.position, {
//             toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
//           }).start(() => {
//             this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
//               this.position.setValue({ x: 0, y: 0 })
//             })
//           })
//         }
//         else {
//           Animated.spring(this.position, {
//             toValue: { x: 0, y: 0 },
//             friction: 4
//           }).start()
//         }
//       }
//     })
//   }

//   renderUsers = () => {

//     return Users.map((item, i) => {


//       if (i < this.state.currentIndex) {
//         return null
//       }
//       else if (i == this.state.currentIndex) {

//         return (
//           <Animated.View
//             {...this.PanResponder.panHandlers}
//             key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT/2, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
//             <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
//               <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

//             </Animated.View>

//             <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
//               <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

//             </Animated.View>

//             <Image
//               style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
//               source={item.uri} />
//                <Text>  {item.Description}  </Text>

//           </Animated.View>
//         )
//       }
//       else {
//         return (
//           <Animated.View

//             key={item.id} style={[{
//               opacity: this.nextCardOpacity,
//               transform: [{ scale: this.nextCardScale }],
//               height: SCREEN_HEIGHT/2, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
//             }]}>
//             <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
//               <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

//             </Animated.View>

//             <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
//               <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

//             </Animated.View>

//             <Image
//               style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
//               source={item.uri} />

//           </Animated.View>
//         )
//       }
//     }).reverse()
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <View style={{ height: 60 }}>

//         </View>
//         <View style={{ flex: 1 }}>
//           {this.renderUsers()}
//         </View>
//         <View style={{ height: 60 }}>

//         </View>


//       </View>

//     );
//   }
// }

// const ContactStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={{
//       headerShown: false,
//     }}>
//       <Stack.Screen name={screens.Contact} component={Home} />
//     </Stack.Navigator>
//   )
// }

// export default ContactStackNavigator


import React, { useState, useEffect } from 'react';
;
import { createStackNavigator } from '@react-navigation/stack'
import { screens } from '../RouteItems'

const Stack = createStackNavigator()
import { StyleSheet, Text, View, Dimensions, FlatList,TouchableOpacity, Image, Animated, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
import Icon from 'react-native-vector-icons/FontAwesome'
import { MangementToken, Charging_points } from '../../service'

function Home() {
  const [listcontact, setlistcontact] = useState([])
  useEffect(() => {
    console.log("sss")
    getListcontact()

  }, [])

  const getListcontact = async () => {

    var list = await Charging_points.get_ccontact()
    console.log(list)
    setlistcontact(list)
  }
  const renderItem = ( {item} ) => (
    <TouchableOpacity
    onPress={() =>console.log(item)}
  >
    <View style={styles.row}>
      <Image source={{ uri: "https://site.yasmineinfo.com/wp-content/uploads/2021/12/12-min.jpg" }} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{item.post_title} : {item.post_name}</Text>
          <Text style={styles.mblTxt}>  <Icon name="phone" size={15} color="#45e04c" /> {item.phone}</Text>
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.msgTxt}>{item.adress}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
  );
  return (

    <View style={{ marginTop: 20 }}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: "center" }} >Stations-Contact</Text>
      </View>


      <View style={{ marginTop: 30, }}>
        <FlatList
          data={listcontact}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>



    </View>

  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.Contact} component={Home} />
    </Stack.Navigator>
  )
}

export default ContactStackNavigator
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 20,
    margin:5

  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
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
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
    marginLeft: 15,
  },
});