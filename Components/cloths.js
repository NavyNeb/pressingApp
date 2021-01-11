import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import ClothTopTabs from "../routes/clothTopTabs";
import { connect } from "react-redux";
const { width, height } = Dimensions.get('screen');

function Cloth({ navigation, Total }) {
    
    function calcTotal() {
        let total = 0;
        Total.map(element => {
           
        });
    }
    return (
        <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5', height }} >
            <StatusBar backgroundColor="lightgray" />
            <View style = {{ display: 'flex', flexDirection: 'row', alignItems:'flex-start', justifyContent: 'flex-start', width, height: height / 16, backgroundColor: '#fff', paddingTop: 10, paddingLeft: 8 }} >
                <TouchableOpacity onPress = { () => navigation.navigate('Home') } >
                    <Feather name = 'arrow-left' size = {28} color = 'dodgerblue' />
                </TouchableOpacity>
                <Text style = {{ fontSize: 20, fontWeight: 'bold', marginLeft: 9 }} > Select Clothes </Text>
            </View>
            <ClothTopTabs />
            <View style = {{ backgroundColor: 'dodgerblue', width, height: height / 12, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }} >
                <Text style = {{ color: '#fff', fontSize: 18 }} >
                    Total (457XAF) |<Text style = {{ color: '#fff', fontSize: 12 }} > {calcTotal()} Items added </Text>
                </Text>
                <TouchableOpacity onPress = { () => navigation.navigate('ReviewOrders') }  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'  }} >
                    <Text style = {{ color: '#fff', fontSize: 14 }} >Next</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

function mapStateToProps(state) {
    return{
        Total: [
            {Men: state.counter_1},
            {Women: state.counter_2},
            {Kids: state.counter_3},
            {Others: state.counter_4}
        ]
    }
    
}

export default connect(mapStateToProps,undefined)(Cloth)