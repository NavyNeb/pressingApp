import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get('screen');

export default function Reiview(){
    return (
        <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5' }} >
            <View style = {{ width, height: height / 3, backgroundColor: '#fff' }} >
                <View style={{ dipslay: 'flex', flexDirection: 'row', paddingTop: 30, paddingHorizontal: 14, height: height / 14, backgroundColor: '#ffff', marginBottom: 45 }} >
                    <TouchableOpacity>
                        <Feather name='arrow-left' size={28} color='dodgerblue' />
                    </TouchableOpacity>
                    <View style={{ width: width - 70 }} >
                        <Text style={{ fontSize: 18, textAlign: 'center', textAlign: 'center' }} >Order No.20202830</Text>
                    </View>
                </View>
                <View style = {{ display: 'flex', flexDirection: 'column', paddingHorizontal: 20 }} >
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25 }} >
                        <View>
                            <Text style = {{ color: 'gray' }} >Ordered by</Text>
                            <Text style = {{ color: '#000', fontWeight: 'bold' }} >Youbissi Yvan</Text>
                        </View>
                        <TouchableOpacity>
                            <View style = {{ height: 40, width: 40, borderRadius: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'dodgerblue' }} >
                                <Feather name = 'phone' size = {18} color = 'dodgerblue' />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25 }} >
                        <View>
                            <Text style = {{ color: 'gray' }} >Ordered by</Text>
                            <Text style = {{ color: '#000', fontWeight: 'bold' }} >Youbissi Yvan</Text>
                        </View>
                        <TouchableOpacity>
                            <View style = {{ height: 40, width: 40, borderRadius: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'dodgerblue' }} >
                                <Feather name = 'phone' size = {18} color = 'dodgerblue' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}