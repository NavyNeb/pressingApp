import React from 'react';
import { TouchableOpacity, ScrollView, View, Text, Image, Dimensions, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function Payment({navigation}){
    return(
        <TouchableWithoutFeedback  onPress = { Keyboard.dismiss }  >
            <View style = {{ width, height, flex: 1, backgroundColor: '#f1f1f5', }} >
                <StatusBar backgroundColor="lightgray" />
                <View style = {{ dipslay: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 15, height: height / 11.7, backgroundColor: '#ffff'  }} >
                    <TouchableOpacity onPress = { () => navigation.navigate('PickDelivery') } >
                        <Feather name = 'arrow-left' size = {28} color = 'dodgerblue' />
                    </TouchableOpacity>
                    <Text style = {{ fontSize: 24, marginLeft: 20 }} >Payment</Text>
                </View>
                <View>
                    <Text style = {{ marginVertical: 20, fontWeight: '900', fontSize: 17, marginLeft: 15 }} >
                    Select Payment Method
                    </Text>
                </View>
                    <ScrollView style = {{ width }} >
                    <ScrollView horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 5, paddingRight: 4 }}  style = {{ width, paddingHorizontal: 10, height: 190,  }} >
                        <TouchableOpacity style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15, marginRight: 20 }} >
                            <Image style = {{height: 80, width: 80 }} source = {require('../icons/download.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15 }} >
                            <Image style = {{height: 65, width: 80 }} source = {require('../icons/Orange-Money.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15, marginHorizontal: 20, alignSelf: 'auto' }} >
                            <Image style = {{height: 100, width: 100, borderRadius: 10 }} source = {require('../icons/mobile-money.png')} />
                        </TouchableOpacity>
                    </ScrollView>
                
                    <View style = {{ backgroundColor: '#fff' }}>
                        <Text style = {{ fontWeight: 'bold', paddingHorizontal: 10, marginTop: 20, marginBottom: 34 }} >Enter Account Deatils</Text>
                        <View style = {{ paddingHorizontal: 10 }} >
                            <View style = {{ borderBottomWidth: 2, borderColor: 'gray', paddingVertical: 6, height: 55 }} >
                                <TextInput placeholder = 'Enter Telephone number' style = {{ height: '100%', }}  />
                            </View>
                            <View style = {{ height: 350, marginTop: 35 }} >
                                <Text style = {{ color: 'gray' }} >
                                    You will receive a message on your device shorty. Please follow the steps to complete the operation  within the times limits
                                </Text>
                            </View>
                        </View>
                    </View>
                   
                </ScrollView>
                <TouchableOpacity onPress = { () => navigation.navigate('OrderDetails') } style = {{ height: height / 12, width, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 20 }} >
                    <Text style = {{ fontSize: 18, color: '#fff' }} >Amount Payable (XAF) </Text>
                    <Text style = {{ fontSize: 18, color: '#fff' }} >Next <Entypo name = 'chevron-thin-right' color = '#fff' size = {14} /> </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}