import React,{ useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image, StatusBar, ScrollView } from 'react-native';
import { Entypo, Ionicons, Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen')
export default function Home( {navigation} ){
    return(
        <View style = {{ flex: 1, alignItems: 'center', backgroundColor: '#f1f1f5',  }} >
            <StatusBar backgroundColor="lightgray" />
            <View style = {{ height: height / 3.8, width, paddingHorizontal: 7, backgroundColor: '#ffff',marginBottom: 25, borderBottomLeftRadius: 15, borderBottomRightRadius: 15  }} >
                <View style= {{ width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16 }} >
                    <Text style = {{ display: 'flex', fontSize: 26, fontWeight: 'bold' }} >LOGO</Text>
                    <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 10 }} >
                        <View style = {{ height: 7, width: 7, backgroundColor: 'dodgerblue', borderRadius: 10, marginHorizontal: 3 }} ></View>
                        <View style = {{ height: 7, width: 7, backgroundColor: 'gray', borderRadius: 10, marginHorizontal: 3 }} ></View>
                        <View style = {{ height: 7, width: 7, backgroundColor: 'gray', borderRadius: 10, marginHorizontal: 3 }} ></View>
                    </View>
                </View>
                <View style = {{ width, heigth: 130, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 30, }} >
                    <View style = {{ }} >
                        <Text style = {{ display: 'flex', fontSize: 22, fontWeight: '900' }} >Order Title</Text>
                        <TouchableOpacity onPress = { () => navigation.navigate('Offers') } style = {{ marginRight: 75 }} >
                            <Text style = {{ display: 'flex', textAlign: 'center', paddingVertical: 5, color: 'dodgerblue' }} >
                                View all offers <Text style = {{ fontSize: 30 }} >→</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image style = {{height: 100, width: 100 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                </View>
            </View>
            <View style = {{ alignItems: 'flex-start', justifyContent: 'flex-start', width, marginBottom:12 }} >
                <Text style = {{ display: 'flex', color: '#97989f', fontSize: 20, paddingLeft: 10 }} >Services</Text>
            </View>
            <View style = {{ height: height / 4.1,  }} >
                <ScrollView horizontal showsHorizontalScrollIndicator = {false} style = {{ width, paddingHorizontal: 10, height: 190 }} >
                    <TouchableOpacity onPress = { () => navigation.navigate('Cloth') } style = {{ alignItems: 'center', height: 180, width: width / 2.3, backgroundColor: '#fff', borderRadius: 9, paddingTop: 8 }} > 
                        <Image style = {{height: 85, width: 85 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                        <Text style = {{ display: 'flex', fontSize: 20, fontWeight: 'bold', marginTop: 20 }} >Classic</Text>
                        <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >Min 12 hours</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { () => navigation.navigate('Cloth') } style = {{ alignItems: 'center', height: 180, width: width / 2.3, backgroundColor: '#fff', borderRadius: 9, paddingTop: 8, marginHorizontal: 10 }} > 
                        <Image style = {{height: 85, width: 85 }} source = {require('../icons/pressing/024-electric-iron.png')} />
                        <Text style = {{ display: 'flex', fontSize: 20, fontWeight: 'bold', marginTop: 20 }} >Express</Text>
                        <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >Min 6 hours</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { () => navigation.navigate('Cloth') } style = {{ alignItems: 'center', height: 180, width: width / 2.3, backgroundColor: '#fff', borderRadius: 9, paddingTop: 8 }} > 
                        <Image style = {{height: 85, width: 85 }} source = {require('../icons/pressing/006-shirt.png')} />
                        <Text style = {{ display: 'flex', fontSize: 20, fontWeight: 'bold', marginTop: 20 }} >At Home</Text>
                        <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >Min 24 hours</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style = {{ width, paddingHorizontal: 10, marginVertical: 8 }} >
                <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Text style = {{ display: 'flex', color: '#97989f' }} >Your Active Orders (counter)</Text>
                    <TouchableOpacity><Text style= {{ color: 'dodgerblue', fontSize: 18 }} >Past Orders</Text></TouchableOpacity>
                </View>
                <View>
                <ScrollView>
                    <TouchableOpacity activeOpacity = {0.2} style = {{ height: 75, backgroundColor: '#fff', marginVertical: 5, paddingHorizontal: 10 , borderRadius: 6, marginBottom: 5, marginTop: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'  }} >
                        <View style = {{ height: 65, width: 65, alignItems: 'center', justifyContent: 'center', marginVertical: 5, marginRight: 10, borderRadius: 35, borderWidth: 2, borderTopColor: 'dodgerblue', borderColor: '#e1e2ed' }}> 
                            <Image style = {{height: 25, width: 25, }} source = {require('../icons/pressing/order_history.png')} />
                        </View>
                        <View style = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around',  paddingHorizontal: 6 }} >
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%',  }} >
                                <Text style = {{ display: 'flex', fontSize: 16, fontWeight: 'bold' }} >Order No: 22029275</Text>
                                <Text  style = {{ display: 'flex', }}>8655XAF</Text>
                            </View>
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%' , }} >
                                <Text style = {{ display: 'flex', color: 'dodgerblue', fontSize: 12 }} >Order Confirmed</Text>
                                <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >23 June 2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{ height: 75, backgroundColor: '#fff', marginVertical: 5, paddingHorizontal: 10, borderRadius: 6, marginBottom: 5, marginTop: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'  }} >
                        <View style = {{ height: 65, width: 65, alignItems: 'center', justifyContent: 'center', marginVertical: 5, marginRight: 10, borderRadius: 35, borderWidth: 2, borderTopColor: 'dodgerblue', borderColor: '#e1e2ed' }}> 
                            <Image style = {{height: 25, width: 25, }} source = {require('../icons/pressing/order_history.png')} />
                        </View>
                        <View style = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around', paddingHorizontal: 6 }} >
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%',  }} >
                                <Text style = {{ display: 'flex', fontSize: 16, fontWeight: 'bold' }} >Order No: 22029275</Text>
                                <Text>8655XAF</Text>
                            </View>
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%' , }} >
                                <Text style = {{ display: 'flex', color: 'dodgerblue', fontSize: 12 }} >Order Confirmed</Text>
                                <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >23 June 2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                   
                </ScrollView>
            </View>
            </View>
        </View>
    )
}