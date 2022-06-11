import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../../productDetailStyle';
import { AuthContext } from '../../context';
const Stack = createStackNavigator()

function ProductDetail(props) {
  const { state, dispatch } = useContext(AuthContext);
  const furniture = props.route?.params;
  const [pstationcharge, setpstationcharge] = useState({})

  useEffect(() => {

    console.log("propsss", props.route.params.pcharge.image)
    setpstationcharge(props.route.params.pcharge)
    const unsubscribe = props.navigation.addListener('focus', () => {

      console.log(new Date());

    });
  }, [props])

  const handleBackButton = () => {
    props.navigation.navigate('MyRewardsStack')
  };

  const handleNoInCart = (type) => {
    dispatch({
      type: 'addToCart',
      payload: { furniture, type },
    });
  };

  const getProductNoInCart = () => {
    let quantity = 0;
    let product = state?.cart?.find((item) => item.id === furniture.id);
    if (product) {
      quantity = product?.noInCart;
    }
    return quantity;
  };

  return (
    <KeyboardAvoidingView style={styles.productDetailContainer}>
      <View style={styles.productDetailContent}>
        <View style={styles.productDetailHeader}>
          <TouchableOpacity
            style={styles.productDetailCircleContainer}
            onPress={() => handleBackButton()}>
            <MaterialIcons name="arrow-back-ios" size={18} color="#77ec69" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.productDetailCircleContainer}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={20}
              color="#77ec69"
            />
            <Text style={styles.noInCartText}>1</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.productDetailSection}>
            <Image
              source={{ uri: pstationcharge.image }}
              style={styles.productImage}
            />
            <View style={styles.productDetailRow}>
              <View>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.productDetailName}>
                  {pstationcharge.name}
                </Text>
                <Text
                  numberOfLines={5}
                  ellipsizeMode="tail"
                  style={styles.productDetailType}>
                  {pstationcharge.type}
                </Text>
              </View>
              <Text style={styles.productDetailPrice}>${pstationcharge.price}</Text>
            </View>
            <Text style={styles.productTitleText}>Quantity</Text>
            <View style={styles.productQuantityRow}>
              <TouchableOpacity onPress={() => handleNoInCart('subtract')}>
                <Entypo name="minus" size={23} color="#000" />
              </TouchableOpacity>
              <Text style={styles.productQuantityValue}>
                {getProductNoInCart()}
              </Text>
              <TouchableOpacity onPress={() => handleNoInCart('add')}>
                <Entypo name="plus" size={23} color="#000" />
              </TouchableOpacity>
            </View>
            <Text style={styles.productTitleText}>Description</Text>
            <Text style={styles.productDescription} >
              {pstationcharge.description}
            </Text>
            {pstationcharge.availability && pstationcharge.availability.map((e) => (
              <View style={{alignItems:'center'}} >

                <Text  > {e.from} -->{e.to} </Text>
              </View>

            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.addToCartBtn}
          onPress={() => handleNoInCart('add')}>
          <Entypo name="plus" size={25} color="#fff" />
          <Text style={styles.addToCartText}>Take order</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}






export default ProductDetail
