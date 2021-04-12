import React, { useState, useEffect } from "react";
import { ScrollView, FlatList, Text, View, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get('screen')
export default function AdminOrders({navigation}) {
    const [orders, setOrders] =useState([
        {
            key: '1', client: 'Sam Smith', amount: '5546800XAf', address: '15th street great avenue', 
            description: 'behind great bar / pressing center', orderId: 'UDL2234', orderDate: '20 Jun, 1:30am',
            orderStatus: 'pending'
        },
        {
            key: '2', client: 'Sam Smith', amount: '5546800XAf', address: '15th street great avenue', 
            description: 'behind great bar / pressing center', orderId: 'UDL2234', orderDate: '20 Jun, 1:30am',
            orderStatus: 'pending'
        },
        {
            key: '3', client: 'Sam Smith', amount: '5546800XAf', address: '15th street great avenue', 
            description: 'behind great bar / pressing center', orderId: 'UDL2234', orderDate: '20 Jun, 1:30am',
            orderStatus: 'pending'
        },
        {
            key: '4', client: 'Sam Smith', amount: '5546800XAf', address: '15th street great avenue', 
            description: 'behind great bar / pressing center', orderId: 'UDL2234', orderDate: '20 Jun, 1:30am',
            orderStatus: 'pending'
        },
    ])
    useEffect(() => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/orderItem/')
        .then((response) => response.json())
        .then(respJson => {
    
        }) 
    }, [0])
    return (
        <View style = {{ flex: 1, width, height, backgroundColor: '#f1f1f5',  }} >
            <StatusBar backgroundColor = 'lightgray' />
            <View style = {{ height: height / 5.5, backgroundColor: '#fff', borderTopRadius: 50, marginBottom: 9}} >
                <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 15, marginVertical: 10 }} >
                    <TouchableOpacity><Feather name = 'menu' color = 'dodgerblue' size = {32} /></TouchableOpacity>
                    <Text style = {{ fontSize: 24, color: '#000', fontWeight: 'bold', marginLeft: 90 }} >Orders</Text>
                </View>
            </View>
                <FlatList
                    data = { orders }
                    keyExtractor = { orders.key }
                    renderItem = { ({item}) => (
                        <TouchableOpacity onPress = { () => navigation.navigate('orderdetailsadmin') } activeOpacity = {0.7} >
                            <View style = {{ padding: 20, backgroundColor: '#fff', height: height / 5, marginBottom: 8, borderRadius: 9 }} >
                                <View style = {{ flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between' }} >
                                    <Text style = {{ color: '#000', fontSize: 15.5, fontWeight: 'bold' }} >{item.client}</Text>
                                    <Text>{item.amount}</Text>
                                </View>
                                <View style = {{ marginVertical: 10 }}>
                                    <Text style = {{ fontSize: 13, color: 'gray', width: '85%' }} >{item.address}. ({item.description}) </Text>
                                </View>
                                <View style = {{  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15}} >
                                    <View>
                                        <Text style = {{ color: 'gray', fontSize: 12.5 }} >OrderID</Text>
                                        <Text style = {{ color: '#000', fontSize: 13.5, fontWeight: 'bold' }} >{item.orderId}</Text>
                                    </View>
                                    <View style = {{ marginHorizontal: 40 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.5 }} >Ordered On</Text>
                                        <Text style = {{ color: '#000', fontSize: 13.5, fontWeight: 'bold' }} >20 June, 11:30QM</Text>
                                    </View>
                                    <View style = {{ marginRight: 60 }} >
                                        <Text style = {{ color: 'gray', fontSize: 12.5 }} >OrderStatus</Text>
                                        <Text style = {{ color: 'dodgerblue', fontSize: 13.5, fontWeight: 'bold' }} >Pending</Text>
                                    </View>
                                </View> 
                            </View>
                        </TouchableOpacity>
                    )
                     }
                />
        </View>
    )
}


 