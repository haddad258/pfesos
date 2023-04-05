import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import COLORS from '../../constants/Colors';
import Input from '../../components/Inputs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Cars_Managment, MangementToken } from '../service'


function AddCar(props) {
  const [expanded, setexpanded] = useState(false)
  const [inputs, setInputs] = React.useState({ brand: '', name: '', type: '', registration: '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const validate = async () => {

    let isValid = true;
    if (!inputs.brand) {
      handleError('Please input brand', 'brand');
      isValid = false;
    }
    if (!inputs.type) {
      handleError('Please input type', 'type');
      isValid = false;
    }
    if (!inputs.name) {
      handleError('Please input name', 'name');
      isValid = false;
    }
    if (!inputs.registration) {
      handleError('Please input registration', 'registration');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = async() => {
    console.log(inputs)
    var token = await MangementToken.GetConfigSession()
    console.log("getlistCars", token)
    var list = await Cars_Managment.RegisterCars({...inputs, "action": "new_car","token":token})
    console.log("ListCars",  list)

  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  const changeexpanded = () => {
    console.log("setvalue")
    var newvalue = !expanded
    setexpanded(newvalue)
    console.log(props)
  }


  return (
    <View >
      <Text onPress={() => changeexpanded()} >  Add Car  <Icon name={expanded ? "arrow-drop-down" : "arrow-right"} size={40} color={COLORS.primary} > </Icon>
      </Text>
      <Collapse
        isExpanded={expanded}
        onToggle={() => changeexpanded()}>
        <CollapseHeader>
        </CollapseHeader>
        <CollapseBody>
          <View style={style.detailsContainer}>

            {/* <Loader visible={loading} /> */}
            <View style={{ paddingHorizontal: 20 }}>

              <Text style={{ color: COLORS.grey, fontSize: 18, }}>
                Enter Your Car Details
              </Text>
              <View style={{ marginVertical: 20 }}>
                <Input
                  onChangeText={text => handleOnchange(text, 'brand')}
                  onFocus={() => handleError(null, 'brand')}
                  iconName="passport"
                  label="brand"
                  placeholder="Enter your brand address"
                  error={errors.brand}
                />
                <Input
                  onChangeText={text => handleOnchange(text, 'type')}
                  onFocus={() => handleError(null, 'type')}
                  iconName="ocr"
                  label="Type"
                  placeholder="Enter your Type"
                  error={errors.type}
                />
                <Input
                  onChangeText={text => handleOnchange(text, 'name')}
                  onFocus={() => handleError(null, 'name')}
                  iconName="pill"
                  label="ability"
                  placeholder="Enter your name"
                  error={errors.name}
                />
                <Input
                  onChangeText={text => handleOnchange(text, 'registration')}
                  onFocus={() => handleError(null, 'registration')}
                  iconName="polaroid"
                  label="registration"
                  placeholder="Enter your registration"
                  error={errors.registration}
                />
                {/* <Button title="Save" onPress={validate} /> */}

              </View>
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
}
const style = StyleSheet.create({

  detailsContainer: {
    marginBottom: 7,
    borderRadius: 20,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
});
export default AddCar