import React, { useState } from 'react'
import { View,  Text, TouchableOpacity, Image, StatusBar, Dimensions, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import signUp from './signUp';
import { CheckBox } from "react-native-elements";
const {width, height} = Dimensions.get('screen')



export default function Login( {navigation} ){

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)

    function signUp () {
        fetch('http://pressingliveapp.herokuapp.com/login',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'username':username,
                'password':password,
            })
    
        }).then(res => res.json())
          .then(resp => {
            
            if (resp.token!=undefined) {
                navigation.navigate('map')
                
                console.log(resp);
            }
            else{
                alert('username or password incorrect')
            }
          })
        
    }

    function adminSignUp () {
        fetch('http://pressingliveapp.herokuapp.com/login',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'username':username,
                'password':password,
            })
    
        }).then(res => res.json())
          .then(resp => {
            
            if (resp.token!=undefined) {
                navigation.navigate('Pressing')
                
                console.log(resp);
            }
            else{
                alert('username or password incorrect')
            }
          })
        
        
    }

    return(
        
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss } >
            <View style = {{flex: 1, paddingTop: 55, alignItems: 'center'}}>
                <StatusBar backgroundColor="lightgray" />
                <View style = {{ marginVertical: 15 }} >
                    <Image style = {{height: 100, width: 100 }} source = {require('../assets/images/PHARMO_PRESS.png')} />
                </View>
                <Text style = {{ fontWeight: 'bold', fontSize: 28, letterSpacing: 2, color: 'dodgerblue', }} >Pharmony</Text>
                <Text style = {{ color: '#4f95cb', fontSize: 20, marginBottom: 10 }} >Pressing</Text>
                <Text style = {{ fontWeight: '800', fontSize: 24, color: '#4f95cb', marginBottom: 12 }} >Sign In Now</Text>
                <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9 }} >
                    <Entypo name = 'credit-card' color = '#4f95cb' size = {21}/>
                    <TextInput style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Username'
                      onChangeText={setUsername} placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center'
                     />
                </View>
                <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9 }} >
                    <Entypo name = 'lock' color = '#4f95cb' size = {21}/>
                    <TextInput style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Password' onChangeText={setPassword}
                     placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' secureTextEntry />
                    <TouchableOpacity style = {{ position: 'absolute' }} >
                        <Text style ={{ color: '#4f95cb', fontWeight: 'bold' }} ></Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={ admin ? adminSignUp : signUp }  style = {{ width: width -10, height: height / 15, backgroundColor: '#4f95cb', paddingVertical: 10, marginVertical: 10, borderRadius: 8 }} >  
                    <Text style = {{textAlign: 'center', color: '#ffff', fontSize: 18, fontWeight: '800', textAlign: 'center'}} >Sign In</Text>
                </TouchableOpacity>
                <View style = {{ display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', backgroundColor: 'indigo' }} >
                <CheckBox
                    center
                    title='Login as admin ?'
                    checkedColor='red'
                    checked={admin}
                    onPress={ () => setAdmin(!admin) }
                />
                <Text style = {{ fontWeight: 'bold', color: 'black', marginTop: 12, }} > Not yet Registered ? </Text>
                </View>
                <TouchableOpacity style = {{ width: width -10, height: height / 15, paddingVertical: 10, marginVertical: 25, borderWidth: 2, borderColor: '#4f95cb' }} onPress = { () => navigation.navigate('Register') } >
                    <Text style = {{textAlign: 'center', color: '#4f95cb', fontWeight: '900', fontSize: 16 }} >Register Now</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
        
    );
}