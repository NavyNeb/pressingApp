import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Dimensions , StatusBar, Image } from "react-native";

const { width, height } = Dimensions.get('screen')

export default function Notifications(){
    return (
        <View style = {{ flex: 1, width, height,backgroundColor: '#f1f1f6' }} >
            <View style = {{ paddingHorizontal: 15, height: 58, width, backgroundColor: '#fff', justifyContent: 'center', elevation: 2, marginBottom: 4 }} >
                <Text style = {{ color: '#000', fontWeight: 'bold', fontSize: 18 }} >
                    Notifications
                </Text>
            </View>
                <ScrollView>
                    <View style = {{ width, height: height / 6.5, paddingHorizontal: 10, paddingVertical: 20, backgroundColor: '#fff', marginBottom: 4 }} >
                        <TouchableOpacity activeOpacity = {0.9} >
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',  }} >
                                <View style={{ height: 58, width: 58, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                    <Image style={{ height: 30, width: 30 }} source={require('../icons/document.png')} />
                                </View>
                                <View style={{ alignItems: 'center', paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'flex-start', width: width - 65 }}>
                                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 4}} >Order Confirmed</Text>
                                    <Text multiple style={{ fontSize: 14, color: 'dodgerblue', }}>Order Confirmed from the end to the beginning of the last job wasn't there to eat the top level meeting on the ned of the graph</Text>
                                </View>
                            </View>
                            <Text style = {{ position: 'absolute', color: 'gray', right: 10, top: 2, fontSize: 12 }} >
                                11:20
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{ width, height: height / 6.5, paddingHorizontal: 10, paddingVertical: 20, backgroundColor: '#fff', marginBottom: 4 }} >
                        <TouchableOpacity activeOpacity = {0.9} >
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',  }} >
                                <View style={{ height: 58, width: 58, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                    <Image style={{ height: 30, width: 30 }} source={require('../icons/document.png')} />
                                </View>
                                <View style={{ alignItems: 'center', paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'flex-start', width: width - 65 }}>
                                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 4}} >Order Ready To Deliver</Text>
                                    <Text multiple style={{ fontSize: 14, color: 'dodgerblue', }}>Order Confirmed from the end to the beginning of the last job wasn't there to eat the top level meeting on the ned of the graph</Text>
                                </View>
                            </View>
                            <Text style = {{ position: 'absolute', color: 'gray', right: 10, top: 2, fontSize: 12 }} >
                                11:20
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{ width, height: height / 6.5, paddingHorizontal: 10, paddingVertical: 20, backgroundColor: '#fff', marginBottom: 4 }} >
                        <TouchableOpacity activeOpacity = {0.9} >
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',  }} >
                                <View style={{ height: 58, width: 58, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                    <Image style={{ height: 30, width: 30 }} source={require('../icons/document.png')} />
                                </View>
                                <View style={{ alignItems: 'center', paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'flex-start', width: width - 65 }}>
                                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 4}} >Order Confirmed</Text>
                                    <Text multiple style={{ fontSize: 14, color: 'dodgerblue', }}>Order Confirmed from the end to the beginning of the last job wasn't there to eat the top level meeting on the ned of the graph</Text>
                                </View>
                            </View>
                            <Text style = {{ position: 'absolute', color: 'gray', right: 10, top: 2, fontSize: 12 }} >
                                11:20
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{ width, height: height / 6.5, paddingHorizontal: 10, paddingVertical: 20, backgroundColor: '#fff', marginBottom: 4 }} >
                        <TouchableOpacity activeOpacity = {0.9} >
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',  }} >
                                <View style={{ height: 58, width: 58, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                    <Image style={{ height: 30, width: 30 }} source={require('../icons/document.png')} />
                                </View>
                                <View style={{ alignItems: 'center', paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'flex-start', width: width - 65 }}>
                                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 4}} >Order Ready To Deliver</Text>
                                    <Text multiple style={{ fontSize: 14, color: 'dodgerblue', }}>Order Confirmed from the end to the beginning of the last job wasn't there to eat the top level meeting on the ned of the graph</Text>
                                </View>
                            </View>
                            <Text style = {{ position: 'absolute', color: 'gray', right: 10, top: 2, fontSize: 12 }} >
                                11:20
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{ width, height: height / 6.5, paddingHorizontal: 10, paddingVertical: 20, backgroundColor: '#fff', marginBottom: 4 }} >
                        <TouchableOpacity activeOpacity = {0.9} >
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',  }} >
                                <View style={{ height: 58, width: 58, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                    <Image style={{ height: 30, width: 30 }} source={require('../icons/document.png')} />
                                </View>
                                <View style={{ alignItems: 'center', paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'flex-start', width: width - 65 }}>
                                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 4}} >Order Confirmed</Text>
                                    <Text multiple style={{ fontSize: 14, color: 'dodgerblue', }}>Order Confirmed from the end to the beginning of the last job wasn't there to eat the top level meeting on the ned of the graph</Text>
                                </View>
                            </View>
                            <Text style = {{ position: 'absolute', color: 'gray', right: 10, top: 2, fontSize: 12 }} >
                                11:20
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{ width, height: height / 6.5, paddingHorizontal: 10, paddingVertical: 20, backgroundColor: '#fff', marginBottom: 4 }} >
                        <TouchableOpacity activeOpacity = {0.9} >
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',  }} >
                                <View style={{ height: 58, width: 58, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                                    <Image style={{ height: 30, width: 30 }} source={require('../icons/document.png')} />
                                </View>
                                <View style={{ alignItems: 'center', paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'flex-start', width: width - 65 }}>
                                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 4}} >Order Confirmed</Text>
                                    <Text multiple style={{ fontSize: 14, color: 'dodgerblue', }}>Order Confirmed from the end to the beginning of the last job wasn't there to eat the top level meeting on the ned of the graph</Text>
                                </View>
                            </View>
                            <Text style = {{ position: 'absolute', color: 'gray', right: 10, top: 2, fontSize: 12 }} >
                                11:20
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </View>
    )
}
