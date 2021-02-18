import React,{ useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import PickDeliveryTopTabs from "../routes/pickDeliveryTopTabs";
const { width, height } = Dimensions.get('screen');
import { connect } from "react-redux";

function PickDelivery({ navigation, commande }) {
   useEffect(() => {
    commande.pickAddress.city = '';
    commande.pickAddress.desc = '';
    commande.pickAddress.quarters = '';
    commande.deliveryAddress.city = '';
    commande.deliveryAddress.desc = '';
    commande.deliveryAddress.quarters = '';
   }, [0])
    return (
        <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5', height }} >
            <StatusBar backgroundColor="lightgray" />
            <View style = {{ display: 'flex', flexDirection: 'row', alignItems:'flex-start', justifyContent: 'flex-start', width, height: height / 16, backgroundColor: '#fff', paddingTop: 10, paddingLeft: 8 }} >
                <TouchableOpacity onPress = { () => navigation.navigate('ReviewOrders') } >
                    <Feather name = 'arrow-left' size = {28} color = 'dodgerblue' />
                </TouchableOpacity>
                <Text style = {{ fontSize: 20, fontWeight: 'bold', marginLeft: 9 }} > Select Pick Up & Delivery Address </Text>
            </View>
            <PickDeliveryTopTabs />
            <TouchableOpacity onPress = { () => navigation.navigate('Payment') }  style = {{ width, height: height / 12, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', position: 'absolute', bottom: 0  }} >
                <Text style = {{ color: '#fff', fontSize: 20 }} >Next</Text>
                <Feather name="chevron-right" size={32} color="white" />
            </TouchableOpacity>
        </View>
    )
}

function mapStateToProps(state){
    return {
        commande: state.commande
    }
}

export default connect(mapStateToProps, undefined)(PickDelivery)