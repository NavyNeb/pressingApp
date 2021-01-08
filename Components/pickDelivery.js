import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import PickDeliveryTopTabs from "../routes/pickDeliveryTopTabs";
const { width, height } = Dimensions.get('screen');

export default function PickDelivery({ navigation }) {
    return (
        <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5', height }} >
            <StatusBar backgroundColor="lightgray" />
            <View style = {{ display: 'flex', flexDirection: 'row', alignItems:'flex-start', justifyContent: 'flex-start', width, height: height / 16, backgroundColor: '#fff', paddingTop: 10, paddingLeft: 8 }} >
                <TouchableOpacity onPress = { () => navigation.navigate('SelectAddress') } >
                    <Feather name = 'arrow-left' size = {28} color = 'dodgerblue' />
                </TouchableOpacity>
                <Text style = {{ fontSize: 20, fontWeight: 'bold', marginLeft: 9 }} > Select Dates & Time </Text>
            </View>
            <PickDeliveryTopTabs />
            <TouchableOpacity onPress = { () => navigation.navigate('Payment') }  style = {{ width, height: height / 12, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', position: 'absolute', bottom: 0  }} >
                <Text style = {{ color: '#fff', fontSize: 14 }} >Next</Text>
                <Feather name="chevron-right" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}