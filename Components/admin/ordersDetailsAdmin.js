import React, { useState } from "react";
import { FlatList, View, Text, Dimensions, TouchableOpacity,StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get('screen')

export default function Orderdetails(params) {
    const [items, setItems] = useState([
        {
            key: '1', item: "jecket", qty: '3', amount: 200
        },
        {
            key: '2', item: "jecket", qty: '3', amount: 200
        },
        {
            key: '3', item: "jecket", qty: '3', amount: 200
        },
        {
            key: '4', item: "jecket", qty: '3', amount: 200
        },
    ])

    const calcTotal = () => {
        var total = 0
        items.forEach((item) => {
                total += item.amount * item.qty
            })
        return total + 1000
    }
    return(
        <View style ={{ flex: 1, width, backgroundColor: '#f1f1f5', }} >
            <StatusBar backgroundColor = 'lightgray' />
            <View style = {{ backgroundColor: '#fff', height: height / 3.6 }} >
                <View style = {{ flexDirection: 'row', alignItems: 'center',justifyContent: "flex-start", marginTop: 10, paddingHorizontal: 10 }} >
                    <Feather name = 'chevron-left' size = {28} color= 'dodgerblue' />
                    <Text style = {{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginLeft: 65 }} > Order UDL 2214 </Text>
                </View>
                <View style = {{ marginBottom: 30 }} >
                    <Text style = {{ textAlign: 'center' }} >20 Jun,11:30am</Text>
                </View>
                <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }} >
                    <Text style = {{ fontSize: 15, fontWeight: 'bold', color: '#000' }} >Sam Smith</Text>
                    <Text style = {{ fontSize: 15, fontWeight: 'bold', color: '#000' }} >65700XAF</Text>
                </View>
                <Text style = {{ marginBottom: 16, paddingHorizontal: 10 }} >
                    Addressof the client provided by the API
                </Text>
                <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }} >
                    <View>
                        <Text style = {{ fontSize: 12.5, fontWeight: '600', color: 'gray' }} >
                           Pickup
                        </Text>
                        <Text style = {{ fontSize: 15, fontWeight: 'bold', color: '#000' }} >
                            21 June, 21:00
                        </Text>
                    </View>
                    <View>
                        <Text style = {{ fontSize: 12.5, fontWeight: '600', color: 'gray' }} >
                            Delivery
                        </Text>
                        <Text style = {{ fontSize: 15, fontWeight: 'bold', color: '#000' }} >
                            21 June, 21:00
                        </Text>
                    </View>
                </View>

            </View>
            <View style = {{ backgroundColor: '#f1f1f5', height: height / 2 }} >
                <View style = {{ width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#d4d4d4', marginVertical: 2, height: 50, paddingHorizontal: 10  }} >
                    <Text>
                        Items
                    </Text>
                    <View style = {{ width: width / 2.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                        <Text>Qtty</Text>
                        <Text>Amount</Text>
                    </View>
                </View>
                <FlatList
                    data = {items}
                    keyExtractor = {items.key}
                    renderItem = { ({item}) => (
                        <View style = {{ width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#fff', marginVertical: 1, height: 50, paddingHorizontal: 10  }} >
                            <Text>
                                {item.item}
                            </Text>
                            <View style = {{ width: width / 2.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
                                <Text>{item.qty}</Text>
                                <Text>{item.amount} XAF</Text>
                            </View>
                        </View>
                    )}
                />
                <View style = {{ backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, height: 56 }} >
                    <Text style ={{ fontSize: 17, fontWeight: 'bold', color: '#000' }} >Order Status</Text>
                    <TouchableOpacity>
                        <Text style ={{ fontSize: 15.5, fontWeight: 'bold', color: 'dodgerblue' }} >Pending</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style = {{ position: 'absolute', bottom: 0, backgroundColor: '#fff', width, height: height / 5.5, paddingTop: 10 }} >
                <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }} >
                    <Text style ={{ fontSize: 17, fontWeight: 'bold', color: '#000' }} >Transport fee</Text>
                    <Text style ={{ fontSize: 15.5, fontWeight: 'bold', color: 'dodgerblue' }} >1000XAF</Text>
                </View>
                <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 10 }} >
                    <Text style ={{ fontSize: 18, fontWeight: 'bold', color: '#000' }} >Total</Text>
                    <Text style ={{ fontSize: 18, fontWeight: 'bold', color: 'dodgerblue' }} >{calcTotal()} XAF</Text>
                </View>
                <TouchableOpacity style = {{ bottom: 0, position: 'absolute', height: 56, width, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'center' }} >
                    <Text style = {{ fontSize: 20, color: '#fff' }} >Update</Text>
                </TouchableOpacity>
            </View>
            <View style = {{ position: 'absolute', height: height / 2.4, width: width / 1.4, borderRadius: 20, backgroundColor: '#fff', alignSelf: 'center', elevation: 3, bottom: 60, right: 10 }} >
                <View style = {{ marginTop: 6, marginBottom: 10 }} >
                    <Text style = {{ textAlign: 'center' }} >Update Order Status</Text>
                </View>
                <TouchableOpacity activeOpacity = {0.5} style = {{ marginVertical: 13.3, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <Text>Processing</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = {0.5} style = {{ marginVertical: 13.3, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <Text>On Hold</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = {0.5} style = {{ marginVertical: 13.3, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <Text>ready to Deliver</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = {0.5} style = {{ marginVertical: 13.3, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <Text>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = {0.5} style = {{ marginVertical: 13.3, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    <Text>Cancelled</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = {0.5} style = {{ width: '100%', height: 45, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'center',position: 'absolute', bottom: 0, borderBottomEndRadius: 20, borderBottomStartRadius: 20 }} >
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}