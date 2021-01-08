import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, StatusBar, Dimensions, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Entypo } from '@expo/vector-icons'
const {width, height} = Dimensions.get('screen')
export default function Login( {navigation} ){
    return(
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss } >
            <View style = {{flex: 1, paddingTop: 55, alignItems: 'center'}}>
                <StatusBar backgroundColor="lightgray" />
                <Text>This is login</Text>
                <View style = {{ marginVertical: 15 }} >
                    <Image style = {{height: 100, width: 100 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                </View>
                <Text style = {{ fontWeight: 'bold', fontSize: 28, letterSpacing: 2, color: '#8b9ca9', marginBottom: 15 }} >Washee</Text>
                <Text style = {{ fontWeight: '800', fontSize: 24, color: '#4f95cb', marginBottom: 12 }} >Sign In Now</Text>
                <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9 }} >
                    <Entypo name = 'credit-card' color = '#4f95cb' size = {21}/>
                    <TextInput style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Email/Telephone' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' />
                </View>
                <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9 }} >
                    <Entypo name = 'lock' color = '#4f95cb' size = {21}/>
                    <TextInput style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Password' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' secureTextEntry />
                    <TouchableOpacity style = {{ position: 'absolute' }} >
                        <Text style ={{ color: '#4f95cb', fontWeight: 'bold' }} >Forgot ? </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress = { () => navigation.navigate('Home') }  style = {{ width: width -10, height: height / 15, backgroundColor: '#4f95cb', paddingVertical: 10, marginVertical: 10, borderRadius: 8 }} >  
                    <Text style = {{textAlign: 'center', color: '#ffff', fontSize: 18, fontWeight: '800', textAlign: 'center'}} >Sign In</Text>
                </TouchableOpacity>
                <Text style = {{ fontWeight: 'bold', color: 'black', marginTop: 12, }} > Not yet Registered ? </Text>
                <TouchableOpacity style = {{ width: width -10, height: height / 15, paddingVertical: 10, marginVertical: 25, borderWidth: 2, borderColor: '#4f95cb' }} onPress = { () => navigation.navigate('Register') } >
                    <Text style = {{textAlign: 'center', color: '#4f95cb', fontWeight: '900', fontSize: 16 }} >Register Now</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
        
    );
}