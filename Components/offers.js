import React,{ useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Dimensions , StatusBar, Image, Animated } from "react-native";

const { width, height } = Dimensions.get('screen')

export default function Offers(){
    return(
        <View style = {{ flex: 1, width, height, backgroundColor: '#f1f1f6',  }} >
            <View style = {{ paddingHorizontal: 15, height: 58, width, backgroundColor: '#fff', justifyContent: 'center', elevation: 2, marginBottom: 4 }} >
                <Text style = {{ color: '#000', fontWeight: 'bold', fontSize: 18 }} >
                    Offers
                </Text>
            </View>
            <ScrollView>
                <View style = {{ width, height: height / 5.5, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff', marginBottom: 4 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <Text title style = {{ fontSize: 15, color: '#000', fontWeight: 'bold' }} >New user?First Wash Free!!!</Text>
                        <Text style = {{ fontSize: 13, color: 'gray' }} >Order Confirmed from the end to the beginning of the
                        last job wasn't there to eat the top level meeting on the ned of the graph <Text style = {{ color: 'dodgerblue' }} >  read more</Text></Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start', marginVertical: 10 }} >
                            <TouchableOpacity style = {{ height: 30, width: 100, borderWidth: 2, borderColor: 'gray', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 30 }} >
                                <Text style = {{ fontSize: 13, color: 'dodgerblue', fontWeight: 'bold' }} >Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ width, height: height / 5.5, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff', marginBottom: 4 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <Text title style = {{ fontSize: 15, color: '#000', fontWeight: 'bold' }} >New user?First Wash Free!!!</Text>
                        <Text style = {{ fontSize: 13, color: 'gray' }} >Order Confirmed from the end to the beginning of the
                        last job wasn't there to eat the top level meeting on the ned of the graph <Text style = {{ color: 'dodgerblue' }} >  read more</Text></Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start', marginVertical: 10 }} >
                            <TouchableOpacity style = {{ height: 30, width: 100, borderWidth: 2, borderColor: 'gray', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 30 }} >
                                <Text style = {{ fontSize: 13, color: 'dodgerblue', fontWeight: 'bold' }} >Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ width, height: height / 5.5, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff', marginBottom: 4 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <Text title style = {{ fontSize: 15, color: '#000', fontWeight: 'bold' }} >New user?First Wash Free!!!</Text>
                        <Text style = {{ fontSize: 13, color: 'gray' }} >Order Confirmed from the end to the beginning of the
                        last job wasn't there to eat the top level meeting on the ned of the graph <Text style = {{ color: 'dodgerblue' }} >  read more</Text></Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start', marginVertical: 10 }} >
                            <TouchableOpacity style = {{ height: 30, width: 100, borderWidth: 2, borderColor: 'gray', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 30 }} >
                                <Text style = {{ fontSize: 13, color: 'dodgerblue', fontWeight: 'bold' }} >Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ width, height: height / 5.5, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff', marginBottom: 4 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <Text title style = {{ fontSize: 15, color: '#000', fontWeight: 'bold' }} >New user?First Wash Free!!!</Text>
                        <Text style = {{ fontSize: 13, color: 'gray' }} >Order Confirmed from the end to the beginning of the
                        last job wasn't there to eat the top level meeting on the ned of the graph <Text style = {{ color: 'dodgerblue' }} >  read more</Text></Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start', marginVertical: 10 }} >
                            <TouchableOpacity style = {{ height: 30, width: 100, borderWidth: 2, borderColor: 'gray', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 30 }} >
                                <Text style = {{ fontSize: 13, color: 'dodgerblue', fontWeight: 'bold' }} >Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ width, height: height / 5.5, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff', marginBottom: 4 }} >
                    <TouchableOpacity activeOpacity = {0.9} >
                        <Text title style = {{ fontSize: 15, color: '#000', fontWeight: 'bold' }} >New user?First Wash Free!!!</Text>
                        <Text style = {{ fontSize: 13, color: 'gray' }} >Order Confirmed from the end to the beginning of the
                        last job wasn't there to eat the top level meeting on the ned of the graph <Text style = {{ color: 'dodgerblue' }} >  read more</Text></Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start', marginVertical: 10 }} >
                            <TouchableOpacity style = {{ height: 30, width: 100, borderWidth: 2, borderColor: 'gray', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 30 }} >
                                <Text style = {{ fontSize: 13, color: 'dodgerblue', fontWeight: 'bold' }} >Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}