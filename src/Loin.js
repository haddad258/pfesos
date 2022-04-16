import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function LotsOfStyles  (props) {
    return (
      <View style={styles.container}>
        <Text style={[styles.red, styles.bigBlue]} onPress={()=>props.navigation.navigate('AppMain')}>login</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;