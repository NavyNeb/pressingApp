import React, { useState } from "react";
import { View, ScrollView, Text, Dimensions, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('screen');
export default function OrderDetails({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f1f1f5', width, height }} >
            <View style={{ width, height: height / 3.3, backgroundColor: '#fff', marginBottom: 4 }} >
                <View style={{ dipslay: 'flex', flexDirection: 'row', paddingTop: 30, paddingHorizontal: 14, height: height / 14, backgroundColor: '#ffff' }} >
                    <TouchableOpacity onPress = { () => navigation.navigate('Home') } >
                        <Feather name='arrow-left' size={28} color='dodgerblue' />
                    </TouchableOpacity>
                    <View style={{ width: width - 70 }} >
                        <Text style={{ fontSize: 18, textAlign: 'center', textAlign: 'center' }} >Order No.20202830</Text>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: 'gray' }} >22 December 2020</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 25, width: width - 20, paddingHorizontal: 10 }} >
                    <View style={{ height: 130, width: 130, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                        <Image style={{ height: 55, width: 55 }} source={require('../icons/document.png')} />
                    </View>
                    <View style={{ alignItems: 'center', paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Text style={{ fontSize: 14, color: 'gray', marginBottom: 9 }} >Order Status</Text>
                        <Text style={{ fontSize: 14, color: 'dodgerblue' }} >Order Confirmed</Text>
                    </View>
                </View>
            </View>
            <View style={{ width, height: height / 5, display: 'flex', justifyContent: 'center', backgroundColor: '#fff', marginBottom: 4 }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    <View style={{ paddingHorizontal: 10 }} >
                        <Text style={{ fontSize: 14, color: 'gray', marginVertical: 5 }} >Pick Up</Text>
                        <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }} >Today, 22 December</Text>
                        <Text style={{ fontSize: 14, color: 'gray' }} >01:00 pm - 02:00 pm</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10 }} >
                        <Text style={{ fontSize: 14, color: 'gray', marginVertical: 5 }} >Delivery</Text>
                        <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }} >Tomorrow, 23 December</Text>
                        <Text style={{ fontSize: 14, color: 'gray' }} >09:00 am - 10:00 am</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 10, width, display: 'flex' }} >
                    <Text style={{ fontSize: 14, color: 'gray', marginBottom: 5 }} >Pick up Address</Text>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }} >Douala,Kotto village(carrefour soudeur face conteneur blue)</Text>
                </View>
            </View>
            <View style={{ width, height: height / 2.6, overflow: 'scroll' , backgroundColor: '#fff', paddingHorizontal: 8, display : 'flex', position :'relative'  }} >
                <Text style={{ fontSize: 14, color: 'gray', marginVertical: 15 }} >Cloth List</Text>
                <View>
                    <ScrollView style={{ height: height / 4.7,  }} >
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }} >
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Text>(2)</Text>
                                <Text style={{ marginHorizontal: 20 }} >X</Text>
                                <Text>shirt(Man)</Text>
                            </View>
                            <Text>854XAF</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }} >
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Text>(2)</Text>
                                <Text style={{ marginHorizontal: 20 }} >X</Text>
                                <Text>Troussers(Man)</Text>
                            </View>
                            <Text>854XAF</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }} >
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Text>(2)</Text>
                                <Text style={{ marginHorizontal: 20 }} >X</Text>
                                <Text>blue t-shirt(Man)</Text>
                            </View>
                            <Text>854XAF</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }} >
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Text>(2)</Text>
                                <Text style={{ marginHorizontal: 20 }} >X</Text>
                                <Text>blue t-shirt(Man)</Text>
                            </View>
                            <Text>854XAF</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }} >
                    <Text style={{ fontSize: 14, color: 'gray', }} >Sub Total</Text>
                    <Text style={{ fontWeight: 'bold', color: '#000', }} >TotalXAF</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }} >
                    <Text style={{ fontSize: 14, color: 'gray', }} >Transport</Text>
                    <Text style={{ fontWeight: 'bold', color: '#000', }} >TotalXAF</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
                    <Text style={{ fontSize: 14, color: 'dodgerblue', fontWeight: 'bold' }} >Paid vie Orange Money</Text>
                    <Text style={{ fontSize: 14, color: 'dodgerblue', fontWeight: 'bold' }} >TotalXAF</Text>
                </View>
            </View>
             <TouchableOpacity onPress = { () => navigation.navigate('OrderDetails') } style = {{ height: height / 12, width, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', justifyContent: 'center', }} >
                    <Text style = {{ fontSize: 18, color: '#fff' }} >Amount Payable (XAF) </Text>
            </TouchableOpacity>
        </View >
    )
}