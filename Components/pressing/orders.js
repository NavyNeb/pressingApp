import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";
const { width, height } = Dimensions.get('screen')

function Orders({ navigation, Order }) {
    const getOrders = () => {
        return Order.map((item)=> {

        })
    }
    return (
        <View style = {{ flex: 1, marginTop: 8, }} >
           <TouchableOpacity activeOpacity = {0.3} >
            <View style ={{ backgroundColor: '#fff', width: width - 10, paddingHorizontal: 15, alignSelf:'center', elevation: 3, borderRadius: 10 }} >
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, marginTop: 14 }} >
                        <Text style = {{ fontSize: 18, fontWeight: 'bold', color: '#000' }} > Sam Smith </Text>
                        <Text style = {{ fontSize: 18, fontWeight: 'bold', color: '#000' }} > Total XAF </Text>
                    </View>
                    <Text style = {{ color: 'gray', width: '70%', fontSize: 15, marginBottom: 20 }} >Here is where huhjlkhbcakodajkbdjkljbhdaoklndabjkvdaalk; the address of the client will be going</Text>
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }} >
                        <View>
                            <Text style = {{ fontSize: 16, color: 'gray' }} >Order ID</Text>
                            <Text style = {{ fontSize: 18.5, color: '#000',fontWeight: 'bold' , }} >UDL22234</Text>
                        </View>
                        <View>
                            <Text style = {{ fontSize: 16, color: 'gray' }} >Ordered On</Text>
                            <Text style = {{ fontSize: 18.5, color: '#000', fontWeight: 'bold' }} >20 Jun, 11:30am</Text>
                        </View>
                        <View>
                            <Text style = {{ fontSize: 16, color: 'gray' }} >Ordered Status</Text>
                            <Text style = {{ fontSize: 18.5, color: 'dodgerblue', fontWeight: 'bold' }} >Pending</Text>
                        </View>
                    </View>
                </View>
           </TouchableOpacity>
        </View>
    )
}

function mapStateToProps(state){
    return {
        Order: state.Orders
    }
}

export default connect(mapStateToProps, undefined)(Orders)
