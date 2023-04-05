import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors'
export default function App(props) {
    const [currentStep, setCurrentStep] = useState(0)
    const [steps, setSteps] = useState([
        {
            image: require("../../assets/ev.jpg"),
            title: "Punto Ricarcia Mobile",
            description: "A breakdown service to recharge electric cars in the event of discharge on the roads."
        },
        {
            image: require("../../assets/06c5.jpg"),
            title: "Battery Replacement",
            description: "Position your new car battery on the tray. Replace the screws/fasteners to the new battery to secure it in place."
        },
        {
            image: require("../../assets/Electr.png"),
            title: "Charging electric cars on the road",
            description: "The world's first electrified road that recharges the batteries of cars and trucks driving on it has been opened"

        }
    ])
    const nextStep = () => {
        setCurrentStep(currentStep >= 2 ? 2 : currentStep + 1)
    }

    const prevStep = () => {
        setCurrentStep(currentStep <= 0 ? 0 : currentStep - 1)
    }
    return (
        <View style={styles.container}>
            <Image source={steps[currentStep].image} style={styles.stepImage} resizeMode="cover" />
            <View style={styles.stepIndicatorView}>
                {steps.map((step, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                ...styles.stepIndicator,
                                width: currentStep === index ? 40 : 30,
                                backgroundColor: currentStep === index ? Colors.primary : Colors.accent
                            }}></View>
                    )
                })}
            </View>
            <Text style={styles.title}>{steps[currentStep].title}</Text>
            <Text style={styles.description}>{steps[currentStep].description}</Text>

            {
                currentStep === 2 && <TouchableOpacity
                    onPress={() => props.navigation.replace("LoginPage")}
                    style={{ ...styles.navigationBtn, backgroundColor: Colors.listed, width: "30%", borderRadius: 20 }}>
                    <Text style={styles.navigationBtnTxt}>login</Text>
                </TouchableOpacity>

            }
            <View style={styles.navigationView}>
                {
                    currentStep > 0 ?
                        <TouchableOpacity
                            onPress={() => prevStep()}
                            style={{ ...styles.navigationBtn, borderTopEndRadius: 20, borderBottomEndRadius: 20, }}>
                            <Text style={styles.navigationBtnTxt}>Back</Text>
                        </TouchableOpacity>
                        :
                        <View></View>
                }

                {currentStep < 2 && <TouchableOpacity
                    onPress={() => nextStep()}
                    style={{ ...styles.navigationBtn, borderTopStartRadius: 20, borderBottomStartRadius: 20 }}>
                    <Text style={styles.navigationBtnTxt}>Next</Text>
                </TouchableOpacity>}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepImage: {
        width: "100%",
        height: "25%",
        marginVertical: 10
    },
    stepIndicatorView: {
        flexDirection: "row",
    },
    stepIndicator: {
        height: 10,
        marginHorizontal: 5,
        borderRadius: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        marginVertical: 20,
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        paddingHorizontal: 30,
        padding: 30
    },
    navigationView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    navigationBtn: {
        backgroundColor: Colors.primary,
        height: 40,
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    navigationBtnTxt: {
        color: "white",
        fontWeight: "bold"
    }

});
