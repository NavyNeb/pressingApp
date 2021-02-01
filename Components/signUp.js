import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert, StatusBar, Dimensions, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Entypo, Feather } from '@expo/vector-icons';
import {Picker} from  '@react-native-picker/picker';
import RadioButtonRN from 'radio-buttons-react-native';
const {width, height} = Dimensions.get('screen')

export default function SignUp( {navigation} ){
    const [data, setData] = useState(
        [
            {label: 'personne'}, 
            {label: 'entreprise'}
    ]
    )
    const [validData, setValidData] = useState(false)
    const [quarter, setQuarter] = useState('Kotto');
    const [city, setCity] = useState('Douala');
    const [clientType, setClientType] = useState('');
    const [pwd1, setPwd1] = useState('');
    const [pwd2, setPwd2] = useState('');
    const [active, setActive] = useState(0)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [telephone, setTelephone] = useState('')
    const [usernameError, setUsernameError] = useState('')

    function submitData(){
                    return(
                        
                        fetch('http://pressingliveapp.herokuapp.com/viewset/register/', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: username,
                                first_name: fname,
                                prenom: lname,
                                password: pwd1,
                                email: email,
                                type_client: clientType,
                                telephone: telephone
                            })
                      },  console.log('posted data') )
                    
                        .catch((e) => console.log(e))
                       )
                }

    const checkExistingUser = () =>{
        return(
            fetch('http://192.168.100.207:8000/viewset/register/', {
                method: 'POST',
                headers: {
                                'Accept': 'application/json',
                                'content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: username,
                                password: pwd1,
                                email: email,
                            })
            })
            .then((responseJson)=>responseJson.json)
            .then((responseJson)=>{
                if (responseJson.status==="success") {
                    Alert.alert('Registration Error', 'This user exist already', [
                                        {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                        },
                                        { text: "OK", onPress: () => console.log("OK Pressed") }
                            ],)
                } else {
                    submitData()
                    navigation.navigate('Login')
                }
            })
        )
    }

    function validate(){

        if ( username === '') {
             return Alert.alert(' Erreur ', ' Username ')
             setUsernameError('')
        }
        if(email){
              var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
     
                if (!re.test(String(email).toLowerCase())) {
                    return Alert.alert(' Erreur ', ' L`address email fournit n`est pas correcte ')
                }
            
        } 
        if (email === '') {
                 return Alert.alert(' Erreur ', ' L`address email ne dit pas etre vide ')
        }
        if(telephone === ''){
            return Alert.alert(' Erreur ', ' Entre un numero de telephone ')
        }
        if(telephone){
           var verifyTel = telephone.startsWith('6', 0)
           var verifyTel2 = telephone.charAt((1))
           if(telephone.length == 9 ){
               if (verifyTel === false) {
                   return Alert.alert(' Erreur ', ' le numero de telephone doit commencer pars 6 ')
               }else if (!verifyTel2 === ( '9' || '8' || '7' || '6' || '5' )) {
                    return Alert.alert(' Erreur ', ' le chiffre suivant le `6` doit etreentre 9 et 5 ')
               }
           } else {
            return Alert.alert(' Erreur ', ' Le numero de telephone doit contenir 9 chiffres ')
           }
        }
        if (!pwd1 || !pwd2) {
            return Alert.alert(' Erreur ', ' Les champ de password doivent etres non vide ')
        }
        if(pwd1 && pwd2){  
             if ( pwd1 === '' && pwd2 === '' ){
                setActive(0)
            } else if ( pwd1 === pwd2 ) {
                setActive(0)
            } else {
                setActive(1)
            }
        } 

        checkExistingUser()

    }

    function ErrorMessage({text}){
        return(
                <Text style = {[{ color: 'red', fontSize: 12, position: 'absolute',  opacity: active,}]} > <Feather name = 'alert-triangle' size = {12} color = 'red' /> {text} </Text>
        )
    }
    function comparePassword( password1, password2 ) {
        if ( password1 === '' && password2 === '' ){
            setActive(0)
        } else if ( password1 === password2 ) {
            setActive(0)
        } else {
            setActive(1)
        }
    }
   function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
     
        if (!re.test(String(email).toLowerCase())) {
            return Alert.alert(' Erreur ', ' L`address email fournit n`est pas correcte ')
        } else {
            return true
        }
        return  console.log(re.test(String(email).toLowerCase()));
        };
    return(
        <TouchableWithoutFeedback onPress = { Keyboard.dismiss } >
        <View style = {{flex: 1, paddingTop: 10, alignItems: 'center', backgroundColor: '#fff'}}>
            <StatusBar backgroundColor="lightgray" />
            <View style={{ dipslay: 'flex', flexDirection: 'row', paddingTop: 30, paddingHorizontal: 14, height: height / 14, backgroundColor: '#ffff', marginBottom: 45 }} >
                    <TouchableOpacity onPress = { () => navigation.navigate('Login') } >
                        <Feather name='arrow-left' size={24} color='dodgerblue' />
                    </TouchableOpacity>
                    <View style={{ width: width - 70, alignSelf: 'stretch' }} >
                        <Text style={{ fontSize: 20, textAlign: 'center', textAlign: 'center', color: 'dodgerblue',fontWeight: 'bold' }} >Register Now</Text>
                    </View>
            </View> 
            <ScrollView>
            <TouchableOpacity>
                <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2, borderBottomRadius: 15 }} >
                    <Text style = {[{ color: 'red', fontSize: 12, position: 'absolute',  opacity: 1,}]} > {usernameError} </Text>
                    <Entypo name = 'user' color = '#4f95cb' size = {21}/>
                    <TextInput onChangeText = { (val) => setUsername(val) } style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Nom Utilisateur' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2, borderBottomRadius: 15 }} >
                    <Entypo name = 'user' color = '#4f95cb' size = {21}/>
                    <TextInput onChangeText = { (val) => setFname(val) }  style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Nom' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2, borderBottomRadius: 15 }} >
                    <Entypo name = 'user' color = '#4f95cb' size = {21}/>
                    <TextInput onChangeText = { (val) => setLname(val) }  style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Prenoms' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                    <Entypo name = 'mail' color = '#4f95cb' size = {21}/>
                    <TextInput 
                    onChangeText={ (mail) => setEmail(mail)}
                        
                     style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Email Address ex. JonDoe@gmail.com' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' keyboardType = "email-address" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                    <Entypo name = 'phone' color = '#4f95cb' size = {21}/>
                    <TextInput onChangeText = { (val) => setTelephone(val) }  style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = 'Numero de Telephone ex. 690505536' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' keyboardType = 'numeric' />
                
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} >
            <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 5.5, paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 100, backgroundColor: 'transparent' }} >
                        <Entypo name = 'address' color = '#4f95cb' size = {21}/>
                        <Text style = {{ fontSize: 14, color: '#9a99a2' }} > Address </Text>
                </View>
                <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginVertical: 10 }} >
                    <View style = {{  borderWidth: 1, borderColor: 'dodgerblue', borderRadius: 20, alignItems: 'flex-start', justifyContent: 'center', }} >
                        <Text style = {{ fontSize: 16.4, color: '#9a99a2', marginLeft: 15, paddingTop: 7 }} >
                            Ville
                        </Text>
                        <Picker
                            selectedValue={city}
                            mode={'dropdown'}
                            style={{ height: 40, width: width * .42, borderWidth: 1, borderRadius: 20,marginTop: 10, marginHorizontal: 5,  }}
                            itemStyle={{ alignSelf: 'center', paddingVertical: 20, fontSize: 18 }}
                            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
                        >
                            <Picker.Item label="Douala" value="douala" />
                           
                        </Picker>
                    </View>
                    <View style = {{  borderWidth: 1, borderColor: 'dodgerblue', borderRadius: 20, alignItems: 'flex-start', justifyContent: 'center', }} >
                        <Text style = {{ fontSize: 16.4, color: '#9a99a2', marginLeft: 15, paddingTop: 7 }} >
                            Quartiers
                        </Text>
                        <Picker
                            selectedValue={quarter}
                            mode={'dropdown'}
                            style={{ height: 40, width: width * .42, borderWidth: 1, borderRadius: 20,marginTop: 10, marginHorizontal: 5,  }}
                            itemStyle={{ alignSelf: 'center', paddingVertical: 20 }}
                            onValueChange={(itemValue, itemIndex) => setQuarter(itemValue)}
                        >
                            <Picker.Item label="Kotto" value="kotto" />
                            <Picker.Item label="Bonaberi" value="bonaberi" />
                            <Picker.Item label="Japomo" value="japoma" />
                        </Picker>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} >
            <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 5.5, paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 130, backgroundColor: 'transparent' }} >
                        <Feather name = 'type' color = '#4f95cb' size = {21}/>
                        <Text style = {{ fontSize: 14, color: '#9a99a2' }} > Type de Clients </Text>
                </View>
                <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginVertical: 10 }} >
                    <View style = {{ display:'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%'}} >
                        <RadioButtonRN
                            data={ data }
                            initial={1}
                            selectedBtn={(e) => setClientType(e.label)}
                            style={{ alignItems: 'center', width: '100%', flexDirection:'row' }}
                            box
                            textStyle = {{ marginHorizontal: 6, fontSize: 16, color: '#000' }}
                            boxStyle={{ marginHorizontal: 10, width: 145  }}
                        />
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                <Entypo name = 'lock' color = '#4f95cb' size = {21}/>
                <TextInput onChangeText = { (value) => setPwd1(value) } style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = ' Create Password' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' secureTextEntry  />
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style = {{ backgroundColor: '#fafafa', width: width -10, height: height / 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 6, borderBottomWidth: 2, borderBottomColor:'#b2b0c0', marginVertical: 9, elevation: 2 }} >
                <ErrorMessage text = 'password not matching'  />
                <Entypo name = 'lock' color = '#4f95cb' size = {21}/>
                <TextInput onChangeText = { (value) => {
                    setPwd2(value);
                }} style = {{ width:width - 55, height: '100%', marginLeft: 25,}} placeholder = ' Confirm Password' placeholderTextColor= '#9a99a2' placeholderTextAlign = 'center' secureTextEntry />
            </View>
            </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style = {{ width: width -10, height: height / 15, backgroundColor: '#4f95cb', paddingVertical: 10, marginVertical: 10, borderRadius: 8 }}
                onPress = { () => validate()}
            
            >  
                <Text style = {{textAlign: 'center', color: '#ffff', fontSize: 18, fontWeight: '800', textAlign: 'center'}} >Register Now</Text>
            </TouchableOpacity>
           
        </View>
    </TouchableWithoutFeedback>
    );
}
