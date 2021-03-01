import React from 'react'
import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get('screen')
 
function FirstPage({navigation}) {
    return (
        <View style = {{ height, width, backgroundColor: '#f1f1f5', alignItems: 'center', paddingTop: 20, paddingHorizontal: 15 }} >

            <Text style = {{ textAlign: 'center', fontSize: 24, color: 'dodgerblue', fontWeight: 'bold', marginVertical: 20 }} > Welcome To PharmoPressing App </Text>
            
            <Image style = {{ height: height / 1.7, width: width - 10,  }} source = { require('../assets/images/PHARMO_PRESS.png') } />

            <TouchableOpacity onPress = { () => navigation.navigate('map') } style={{ height: 85, width: width - 45, backgroundColor: 'dodgerblue', borderRadius: 20, position: 'absolute', bottom: 50, alignItems: 'center', justifyContent: 'center'  }} >
                <Text style = {{ textAlign: 'center', fontSize: 24, color: 'white', fontWeight: 'bold' }} >
                    Get Started <Feather name = 'arrow-right' size = {24} color = 'white' />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FirstPage
