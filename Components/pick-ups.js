import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Dimensions, View, Text, StatusBar } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function PickUps(){
    const [active, setActive] = useState(true)
    const setActiveState = () => (
        this.setActive(true)
    )
    return(
        <View style = {{ width, height, flex: 1, backgroundColor: '#fff', paddingLeft: 10, paddingTop: 20 }} >
            <Text style = {{ fontSize: 18, marginVertical: 20 }} >
                Select Pick up Date
            </Text>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {{ alignItems: 'center', justifyContent: 'center' }}  style = {{ height: 140, width }} >
                    <TouchableOpacity>
                        <View style = {{ height: 45, width: 210, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f5', borderRadius: 10, marginRight: 7 }} >
                            <Text>Today, 20 December</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { () => setActiveState } >
                        <View style = {[{ height: 45, width: 210, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f5', borderRadius: 10, marginRight: 7 }, active&&{backgroundColor: 'dodgerblue'} ]} >
                            <Text>Tomorrow, 21 December</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style = {{ height: 45, width: 210, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f5', borderRadius: 10, marginRight: 7 }} >
                            <Text>22 December</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style = {{ height: 45, width: 210, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f5', borderRadius: 10, marginRight: 7 }} >
                            <Text>23 December</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style = {{ backgroundColor: 'transparent', height: 90, justifyContent: 'center', borderTopWidth: 2, borderColor: '#f1f1f6' }} >
                <Text>Select Pick up Time</Text>
            </View>
            <View style = {{ paddingRight: 20, width}} >
                <View style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginVertical: 7 }} >
                    <TouchableOpacity style = {{ width: 170, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f6', borderRadius: 10, marginRight: 5 }} >
                        <Text style = {{ fontWeight: 'bold' }} >9:00 am to 10:00 am</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{ width: 170, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f6', borderRadius: 10 }} >
                        <Text style = {{ fontWeight: 'bold' }} >9:00 am to 10:00 am</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginVertical: 7 }} >
                    <TouchableOpacity style = {{ width: 170, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f6', borderRadius: 10, marginRight: 5 }} >
                        <Text style = {{ fontWeight: 'bold' }} >9:00 am to 10:00 am</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{ width: 170, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f6', borderRadius: 10 }} >
                        <Text style = {{ fontWeight: 'bold' }} >9:00 am to 10:00 am</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginVertical: 7 }} >
                    <TouchableOpacity style = {{ width: 170, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f6', borderRadius: 10, marginRight: 5 }} >
                        <Text style = {{ fontWeight: 'bold' }} >9:00 am to 10:00 am</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{ width: 170, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f6', borderRadius: 10 }} >
                        <Text style = {{ fontWeight: 'bold' }} >9:00 am to 10:00 am</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginVertical: 7 }} >
                    <TouchableOpacity style = {{ width: 170, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f6', borderRadius: 10, marginRight: 5 }} >
                        <Text style = {{ fontWeight: 'bold' }} >9:00 am to 10:00 am</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{ width: 170, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#f1f1f6', borderRadius: 10 }} >
                        <Text style = {{ fontWeight: 'bold' }} >9:00 am to 10:00 am</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}