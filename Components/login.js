import React, { useState, useEffect } from 'react'
import { View,  Text, TouchableOpacity, Image, Dimensions, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import signUp from './signUp';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCLient } from "../Action/getClient";
import { CheckBox } from "react-native-elements";
import { SkypeIndicator } from "react-native-indicators";

const {width, height} = Dimensions.get('screen')



function Login( {navigation, getCLient} ){

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/register/')
        .then((response) => response.json())
        .then(( userList ) => {
            setUsers(userList)
        })
        .catch((err) => alert(err.toString()))
     }, [0])

    function signUp () {
        setLoading(true)
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
                const client = users.find( item => item.user.id == resp.user.id )
                setLoading(false)
                getCLient(client.id)
                navigation.navigate('map')
                console.log(resp);
            }
            else{
                setLoading(false)
                alert('username or password incorrect')
            }
          })
        
    }

    function adminSignUp() {
        setLoading(true)
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
                setLoading(false)
                navigation.navigate('Pressing')
                console.log(resp);
            }
            else{
                setLoading(false)
                alert('username or password incorrect')
            }
          })
        
        
    }

    return(
        
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss } >
            {
                loading ? ( <SkypeIndicator style = {{ backgroundColor: '#f1f1f5', }} color = 'dodgerblue' size = { 60 } animating interaction /> ) : ( <View style = {{flex: 1, paddingTop: 55, alignItems: 'center'}}>
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
                <View style = {{ display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-around', width: '100%', backgroundColor: 'transparent' }} >
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
            </View> )
            }
        </TouchableWithoutFeedback>
        
    );
}


function mapDispatchToProps(dispatch){
    return{
        dispatch,
        ...bindActionCreators({
            getCLient
        }, dispatch)
    }
}

export default connect(undefined, mapDispatchToProps)(Login)