import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Image,View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export default function Assigned(){
    return (
        <View style = {{ width, flex: 1, backgroundColor: '#f1f1f5', paddingTop: 35 }} >
            <ScrollView style = {{ width, paddingHorizontal: 6, marginTop: 10, }} >
                <View style = {{ height: height / 3.4, backgroundColor: '#fff', borderRadius: 8, elevation: 1, paddingHorizontal: 10, paddingVertical: 20, marginBottom: 7 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start',  }} >
                            <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                <Image style={{ height: 20, width: 20 }} source={require('../../icons/deliveryvan.png')} />
                            </View>
                            <View style={{ width: width - 75, paddingHorizontal: 10 }}>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                    <View>
                                        <Text style = {{ color: 'dodgerblue', fontSize: 16 }} >Ready to Deliver</Text>
                                        <Text style = {{ color: '#000', fontSize: 12.4 }} >Order No.23122020</Text>
                                    </View>
                                    <TouchableOpacity style = {{ height: 45, width: 110, backgroundColor: 'dodgerblue', justifyContent: 'center', alignItems: 'center', borderRadius: 9 }} >
                                        <Text style = {{ color: '#fff', fontSize: 13 }} >Mark Delivered</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }} >
                                    <View style = {{ marginTop: 8 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >23 December 2020</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >01:00 pm</Text>
                                    </View>
                                    <View style = {{ marginTop: 8, justifyContent: 'flex-start', width: 110 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >3845XAF</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Paid by Cash</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery Address</Text>
                                    <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Douala, Nyalla Entre chinois derriere les te;eoin de jehovah</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ height: height / 3.4, backgroundColor: '#fff', borderRadius: 8, elevation: 1, paddingHorizontal: 10, paddingVertical: 20, marginBottom: 7 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start',  }} >
                            <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                <Image style={{ height: 20, width: 20 }} source={require('../../icons/deliveryvan.png')} />
                            </View>
                            <View style={{ width: width - 75, paddingHorizontal: 10 }}>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                    <View>
                                        <Text style = {{ color: 'dodgerblue', fontSize: 16 }} >Ready to Deliver</Text>
                                        <Text style = {{ color: '#000', fontSize: 12.4 }} >Order No.23122020</Text>
                                    </View>
                                    <TouchableOpacity style = {{ height: 45, width: 110, backgroundColor: 'dodgerblue', justifyContent: 'center', alignItems: 'center', borderRadius: 9 }} >
                                        <Text style = {{ color: '#fff', fontSize: 13 }} >Mark Delivered</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }} >
                                    <View style = {{ marginTop: 8 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >23 December 2020</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >01:00 pm</Text>
                                    </View>
                                    <View style = {{ marginTop: 8, justifyContent: 'flex-start', width: 110 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >3845XAF</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Paid by Cash</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery Address</Text>
                                    <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Douala, Nyalla Entre chinois derriere les te;eoin de jehovah</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ height: height / 3.4, backgroundColor: '#fff', borderRadius: 8, elevation: 1, paddingHorizontal: 10, paddingVertical: 20, marginBottom: 7 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start',  }} >
                            <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                <Image style={{ height: 20, width: 20 }} source={require('../../icons/deliveryvan.png')} />
                            </View>
                            <View style={{ width: width - 75, paddingHorizontal: 10 }}>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                    <View>
                                        <Text style = {{ color: 'dodgerblue', fontSize: 16 }} >Ready to Deliver</Text>
                                        <Text style = {{ color: '#000', fontSize: 12.4 }} >Order No.23122020</Text>
                                    </View>
                                    <TouchableOpacity style = {{ height: 45, width: 110, backgroundColor: 'dodgerblue', justifyContent: 'center', alignItems: 'center', borderRadius: 9 }} >
                                        <Text style = {{ color: '#fff', fontSize: 13 }} >Mark Delivered</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }} >
                                    <View style = {{ marginTop: 8 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >23 December 2020</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >01:00 pm</Text>
                                    </View>
                                    <View style = {{ marginTop: 8, justifyContent: 'flex-start', width: 110 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >3845XAF</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Paid by Cash</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery Address</Text>
                                    <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Douala, Nyalla Entre chinois derriere les te;eoin de jehovah</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ height: height / 3.4, backgroundColor: '#fff', borderRadius: 8, elevation: 1, paddingHorizontal: 10, paddingVertical: 20, marginBottom: 7 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start',  }} >
                            <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                <Image style={{ height: 20, width: 20 }} source={require('../../icons/deliveryvan.png')} />
                            </View>
                            <View style={{ width: width - 75, paddingHorizontal: 10 }}>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                    <View>
                                        <Text style = {{ color: 'dodgerblue', fontSize: 16 }} >Ready to Deliver</Text>
                                        <Text style = {{ color: '#000', fontSize: 12.4 }} >Order No.23122020</Text>
                                    </View>
                                    <TouchableOpacity style = {{ height: 45, width: 110, backgroundColor: 'dodgerblue', justifyContent: 'center', alignItems: 'center', borderRadius: 9 }} >
                                        <Text style = {{ color: '#fff', fontSize: 13 }} >Mark Delivered</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }} >
                                    <View style = {{ marginTop: 8 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >23 December 2020</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >01:00 pm</Text>
                                    </View>
                                    <View style = {{ marginTop: 8, justifyContent: 'flex-start', width: 110 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >3845XAF</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Paid by Cash</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery Address</Text>
                                    <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Douala, Nyalla Entre chinois derriere les te;eoin de jehovah</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ height: height / 3.4, backgroundColor: '#fff', borderRadius: 8, elevation: 1, paddingHorizontal: 10, paddingVertical: 20, marginBottom: 7 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start',  }} >
                            <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                <Image style={{ height: 20, width: 20 }} source={require('../../icons/pickvan.png')} />
                            </View>
                            <View style={{ width: width - 75, paddingHorizontal: 10 }}>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                    <View>
                                        <Text style = {{ color: 'dodgerblue', fontSize: 16 }} >Ready to Deliver</Text>
                                        <Text style = {{ color: '#000', fontSize: 12.4 }} >Order No.23122020</Text>
                                    </View>
                                    <TouchableOpacity style = {{ height: 45, width: 110, backgroundColor: 'dodgerblue', justifyContent: 'center', alignItems: 'center', borderRadius: 9 }} >
                                        <Text style = {{ color: '#fff', fontSize: 13 }} >Mark Delivered</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }} >
                                    <View style = {{ marginTop: 8 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >23 December 2020</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >01:00 pm</Text>
                                    </View>
                                    <View style = {{ marginTop: 8, justifyContent: 'flex-start', width: 110 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery time</Text>
                                        <Text style = {{ color: '#000', fontSize: 15, fontWeight: 'bold' }} >3845XAF</Text>
                                        <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Paid by Cash</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style = {{ color: 'gray', fontSize: 12.7, marginBottom: 8 }} >Delivery Address</Text>
                                    <Text style = {{ color: '#000', fontSize: 14, fontWeight: 'bold' }} >Douala, Nyalla Entre chinois derriere les te;eoin de jehovah</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}