import React from 'react';
import { TouchableOpacity, ScrollView, View, Text, Image, Dimensions, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function Address({navigation}){
    return(
        <TouchableWithoutFeedback  onPress = { Keyboard.dismiss }  >
            <View style = {{ width, height, flex: 1, backgroundColor: '#f1f1f5', }} >
                <StatusBar backgroundColor="lightgray" />
                <View style = {{ dipslay: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 15, height: height / 11.7, backgroundColor: '#ffff'  }} >
                    <TouchableOpacity onPress = { () => navigation.navigate('ReviewOrders') } >
                        <Feather name = 'arrow-left' size = {28} color = 'dodgerblue' />
                    </TouchableOpacity>
                    <Text style = {{ fontSize: 24, marginLeft: 20 }} >Select Address</Text>
                </View>
                <View>
                    <Text style = {{ marginVertical: 20, fontWeight: '900', fontSize: 17 }} >
                        Select Pick up & Delivery Address
                    </Text>
                </View>
                    <ScrollView style = {{ width }} >
                    <ScrollView horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingRight: 4 }}  style = {{ width, paddingHorizontal: 10, height: 190, }} >
                        <TouchableOpacity style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15 }} >
                            <Image style = {{height: 65, width: 65 }} source = {require('../icons/pressing/home_page_2.png')} />
                            <Text>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15, marginHorizontal: 20 }} >
                            <Image style = {{height: 65, width: 65 }} source = {require('../icons/pressing/office_2.png')} />
                            <Text>Office</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15, marginRight: 5 }} >
                            <Image style = {{height: 65, width: 65 }} source = {require('../icons/pressing/visit_2.png')} />
                            <Text>Others</Text>
                        </TouchableOpacity>

                    </ScrollView>
                
                    <View style = {{ backgroundColor: '#fff' }}>
                        <Text style = {{ fontWeight: 'bold', paddingHorizontal: 10, marginTop: 20, marginBottom: 34 }} >Enter Address Details</Text>
                        <View style = {{ paddingHorizontal: 10 }} >
                            <View style = {{ borderBottomWidth: 2, borderColor: 'gray', paddingVertical: 6, height: 55 }} >
                                <TextInput placeholder = 'City / Town' style = {{ height: '100%', }}  />
                            </View>
                            <View style = {{ borderBottomWidth: 2, borderColor: 'gray', paddingVertical:6, height: 55 }} >
                                <TextInput placeholder = 'Quarters' style = {{ height: '100%', }}  />
                            </View>
                            <View style = {{ borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 20, paddingVertical:6, height: 75 }} >
                                <TextInput multiple keyboardType = 'name-phone-pad' placeholder = 'Enter address description' style = {{ height: '100%', }}  />
                            </View>
                        </View>
                    </View>
                   
                </ScrollView>
                <TouchableOpacity onPress = { () => navigation.navigate('PickDelivery') } style = {{ height: height / 12, width, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }} >
                    <Text style = {{ fontSize: 18, color: '#fff' }} >Next <Entypo name = 'chevron-thin-right' color = '#fff' size = {14} /> </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}