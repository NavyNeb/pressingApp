import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons'
const { width, height } = Dimensions.get('screen');

export default function Kids(){
    return(
        <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5', height }} >
            
            <Text style = {{ alignSelf: 'center' }} >Hello from Kids</Text>
            <ScrollView style = {{ width }} >
                <View style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                    <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                    <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                        <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >T-shirt</Text>
                        <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90 }} > 
                            <TouchableOpacity style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                               <Feather name= 'minus' size = {16} color = 'white' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                <Text> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                <Feather name= 'plus' size = {16} color = 'white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                    <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                    <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                        <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >T-shirt</Text>
                        <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90 }} > 
                            <TouchableOpacity style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                               <Feather name= 'minus' size = {16} color = 'white' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                <Text> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                <Feather name= 'plus' size = {16} color = 'white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                    <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                    <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                        <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >T-shirt</Text>
                        <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90 }} > 
                            <TouchableOpacity style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                               <Feather name= 'minus' size = {16} color = 'white' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                <Text> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                <Feather name= 'plus' size = {16} color = 'white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                    <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                    <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                        <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >T-shirt</Text>
                        <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90 }} > 
                            <TouchableOpacity style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                               <Feather name= 'minus' size = {16} color = 'white' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                <Text> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                <Feather name= 'plus' size = {16} color = 'white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                    <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                    <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                        <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >T-shirt</Text>
                        <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90 }} > 
                            <TouchableOpacity style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                               <Feather name= 'minus' size = {16} color = 'white' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                <Text> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                <Feather name= 'plus' size = {16} color = 'white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                    <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                    <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                        <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >T-shirt</Text>
                        <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90 }} > 
                            <TouchableOpacity style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                               <Feather name= 'minus' size = {16} color = 'white' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                <Text> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                <Feather name= 'plus' size = {16} color = 'white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                    <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                    <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                        <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >Pantalon</Text>
                        <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90 }} > 
                            <TouchableOpacity style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                               <Feather name= 'minus' size = {16} color = 'white' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                <Text> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                <Feather name= 'plus' size = {16} color = 'white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                    <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                    <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                        <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >T-shirt</Text>
                        <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90 }} > 
                            <TouchableOpacity style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                               <Feather name= 'minus' size = {16} color = 'white' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                <Text> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                <Feather name= 'plus' size = {16} color = 'white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
}