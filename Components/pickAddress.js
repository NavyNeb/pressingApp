import React from 'react';
import { TouchableOpacity, ScrollView, View, Text, Image, Dimensions, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCity,getQuarters, getDesc } from "../Action/address";

const { width, height } = Dimensions.get('screen');

function PickAddress({navigation, getCity, getQuarters, getDesc, pickAddress }){
    console.log("this",pickAddress);
    return(
        <TouchableWithoutFeedback  onPress = { Keyboard.dismiss }  >
            <View style = {{ width, height, flex: 1, backgroundColor: '#f1f1f5', }} >
                <StatusBar backgroundColor="lightgray" />
                <View>
                    <Text style = {{ marginVertical: 20, fontWeight: '900', fontSize: 17 }} >
                        Select Pick Up Address
                    </Text>
                </View>
                    <ScrollView style = {{ width }} >
                   
                    <View style = {{ backgroundColor: '#fff', borderRadius: 20, height: height / 2, justifyContent: 'center' }}>
                        <Text style = {{ fontWeight: 'bold', paddingHorizontal: 10, marginTop: 20, marginBottom: 34 }} >Enter Address Details</Text>
                        <View style = {{ paddingHorizontal: 10 }} >
                            <View style = {{ borderBottomWidth: 1, borderColor: 'gray', paddingVertical: 6, height: 55 }} >
                                <TextInput onChangeText = { (val) => getCity(val) } placeholder = 'City / Town' style = {{ height: '100%', }}  />
                            </View>
                            <View style = {{ borderBottomWidth: 1, borderColor: 'gray', paddingVertical:6, height: 55 }} >
                                <TextInput onChangeText = { (val) => getQuarters(val) } placeholder = 'Quarters' style = {{ height: '100%', }}  />
                            </View>
                            <View style = {{ borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginVertical: 20, paddingVertical:6, paddingHorizontal: 6, height: 75 }} >
                                <TextInput onChangeText = { (val) => getDesc(val) } multiple keyboardType = 'name-phone-pad' placeholder = 'Enter address description' style = {{ height: '100%', }}  />
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
function mapStateToProps(state){
    return{
        pickAddress: state.pickAddress
    }
}

function mapDispatchToProps(dispatch){
    return{
        dispatch,
        ...bindActionCreators({
            getCity, getQuarters, getDesc
        }, dispatch )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickAddress)
