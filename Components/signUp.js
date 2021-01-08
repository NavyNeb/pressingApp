import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, StatusBar, Dimensions, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Entypo, Feather } from '@expo/vector-icons'
const {width, height} = Dimensions.get('screen')

export default function SignUp( {navigation} ){
    const [pwd1, setPwd1] = useState('');
    const [pwd2, setPwd2] = useState('');
    const [active, setActive] = useState(0)
    function comparePassword( password1, password2 ) {
        if ( password1 === '' && password2 === '' ){
            setActive(0)
        } else if ( password1 === password2 ) {
            setActive(0)
        }  else {
            setActive(1)
        }
    }
    return(
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss } >
        <View style = {{flex: 1, paddingTop: 10, alignItems: 'center', backgroundColor: '#fff'}}>
            <StatusBar backgroundColor="lightgray" />
            <View style={{ dipslay: 'flex', flexDirection: 'row', paddingTop: 30, paddingHorizontal: 14, height: height / 14, backgroundColor: '#ffff', marginBottom: 45 }} >
                    <TouchableOpacity onPress = { () => navigation.navigate('Login') } >
                        <Feather name='arrow-left' size={24} color='dodgerblue' />
                    </TouchableOpacity>
                    <View style={{ width: width - 70 }} >
                        <Text style={{ fontSize: 18, textAlign: 'center', textAlign: 'center' }} >Order No.20202830</Text>
                    </View>
            </View>
            <TouchableOpacity style = {{ height: 86, width: 86, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}  >
                <Entypo name = 'camera' color = '#4f95cb' size = {21}/>
            </TouchableOpacity>
            <Text style = {{ fontWeight: 'bold', fontSize: 16, color: '#4f95cb', marginVertical: 15 }} >Register Now</Text>
            <ScrollView>
            <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2, borderBottomRadius: 15 }} >
                <Entypo name = 'user' color = '#4f95cb' size = {21}/>
                <TextInput style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Full Name' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' />
            </View>
            <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                <Entypo name = 'mail' color = '#4f95cb' size = {21}/>
                <TextInput style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Email Address' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' keyboardType = "email-address" />
            </View>
            <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                <Entypo name = 'phone' color = '#4f95cb' size = {21}/>
                <TextInput style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Telephone' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' keyboardType = 'numeric' />
            </View>
            <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                <Entypo name = 'lock' color = '#4f95cb' size = {21}/>
                <TextInput onChangeText = { (value) => setPwd1(value) } style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = ' Create Password' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center'  />
            </View>
            
            <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                <Text style = {[{ color: 'red', fontSize: 12, position: 'absolute', opacity: active},]} > <Feather name = 'alert-triangle' size = {12} color = 'red' /> Password no matching</Text>
                <Entypo name = 'lock' color = '#4f95cb' size = {21}/>
                <TextInput onEndEditing = { (value) => {
                    setPwd2(value);
                    comparePassword(pwd1, pwd2)
                }} style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = ' Confirm Password' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center'  />
            </View>
            </ScrollView>
            <TouchableOpacity style = {{ width: width -10, height: height / 15, backgroundColor: '#4f95cb', paddingVertical: 10, marginVertical: 10, borderRadius: 8 }} >  
                <Text style = {{textAlign: 'center', color: '#ffff', fontSize: 18, fontWeight: '800', textAlign: 'center'}} >Register Now</Text>
            </TouchableOpacity>
           
            
        </View>
    </TouchableWithoutFeedback>
    );
}
