import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { TouchableOpacity, TextInput , ScrollView, View, Alert, Text, Image, Dimensions, StatusBar, TouchableWithoutFeedback, Keyboard, Animated } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import {orderAction} from "../Action/orderAction";
import { reqOrder } from "../Action/redOrderAc";

const { width, height } = Dimensions.get('screen');

function Payment({navigation, commandeAction, commande, ligne, reqOrder, total }){

  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const [load, setLoad] = useState(true)
  const [hidden,setHidden] = useState(true)
  const [payment, setPayment] = useState('');
  const [receive, setReceive] = useState('')
  const [amount, setAmount] = useState(0)
  const [methods, setMethods] = useState([
    {label: 'Complete'},
    {label: 'In Parts'}
  ])
  const Anim = useRef(new Animated.Value(900)).current;
    const navigate = () => {
        reqOrder(commande)
        navigation.navigate('OrderDetails')
    }

    var total = commande.commande.payment.total
    var URL = '';

    const slide = () => {

     if(hidden){
      Animated.timing(Anim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start()
      setHidden(!hidden)
     } else {
      Animated.timing(Anim, {
        toValue: 900,
        duration: 1000,
        useNativeDriver: true
      }).start()
      setHidden(!hidden)
     }
    }

    var price = receive === 'In Parts' ? (amount * 0.0018) : (total * 0.0018)

    // const setOrderItem = () => {
    //   commande.commande.orderItem.map(item => {
    //     return (
         
    //     )
    //   })
    // }

    const createCompleteCommande = () => {
      fetch('http://pressingliveapp.herokuapp.com/viewset/order/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          client: commande.client,
          mode_paiement: payment,
          livraison: 1,
          ramassage: 3
        })
      })
      .then((response) => response.json())
      .then( respJson => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/facture/',{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
          },
          body: JSON.stringify({
            frais_ramassage: 0,
            frais_livraison: 0,
            total: commande.commande.payment.total,
            commande: respJson.id
          })
        })
        .then(response => response.json() )
        .then(facResp => {
          fetch('http://pressingliveapp.herokuapp.com/viewset/reglement/',{
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'accept': 'application/json'
            },
            body: JSON.stringify({
              facture: 2,
              commande: facResp.id
            })
          })
        }) 
      })
      .catch(e => console.log(e.toString())) 
    }

    // function rest(total){
    //   let amount = ( 15 / 100 ) * total
    //   let remainder = total -
    // }

    const makePayment = ()=> {
        fetch('https://api.sandbox.paypal.com/v1/oauth2/token?grant_type=client_credentials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization": "Basic QWZZTmdoSWNmN2pndUxLdlNWRE5KQjVQTzdUOXk1QTRpNnB5VVEzaldKVWR6RmkxNzVJeno5QzlET1NCYURLejlqaGVLWDNlNk0wYWk4WlA6RUhqcjFwcVdkWENac1A4Sk1vdDF4MjV6c3V1WEJFN1Z6WjNtbTV1b3pGWk5Wd1JkSEVfeTdiZnNtSFo3QzEybzA5a2Z0WXFtYVRBUGgyM2k="
            },
      },)
      .then((Response) => Response.json())
      .then((ResponseJson)=>{
        console.log("getToken ",ResponseJson);
      setToken(ResponseJson.access_token);
        fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer "+ResponseJson.access_token,
        },
        body: JSON.stringify({
          "intent": "CAPTURE",
          "application_context": {
            "brand_name": "MY BRAND", //The label that overrides the business name in the PayPal account on the PayPal site
           "locale": "en-IN",
            "user_action": "PAY_NOW", //Process the payment immediately when the customer clicks Pay Now
           "return_url": "https://www.paypal.com/", //Payment successful redirection URL
            "cancel_url": "http://localhost:3000/cancel", //Payment cancel redirection URL
           "payment_method": {
           "payer_selected": "PAYPAL"
           }
           },
           "payer": { //Pass and prefill buyer details like first name, last name, email address and phone number
           "name": {
           "given_name": "Youbissi",
           "surname": "Yvan"
           },
           "email_address": "youbissiyvan@gmail.com",
           "phone": {
           "phone_number": {
           "national_number": "4089372075"
           }
           },
           "address": { //Pass and prefill buyer billing address details
           "address_line_1": "Douala, Nyalla",
           "address_line_2": "Entree Chinois",
           "admin_area_2": "Nkolmbong",
           "admin_area_1": "derriere temoins de jehovah",
           "postal_code": "400029",
           "country_code": "US"
           }
           },
           
          "purchase_units": [
            {
              "amount": {
                "currency_code": "USD",
                "value": price.toFixed(2).toString()
              }
            }
          ]
        })
      })
      .then((response)=> response.json())
      .then((responseJson)=> {
        console.log("order  ",responseJson) 
        setId(responseJson.id);
        const approval = responseJson.links.find((item) => item.rel === 'approve')
        URL = approval.href
        console.log('approvalnew  ',URL);
        setLoad(false)
      })
      .catch((e) => console.log( '1st err', e))
      })
      // .then((ResponseJson)=> {
      //     
      //   fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders',{
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': "Bearer "+token,
      //     },
      //     body: JSON.stringify({
            
      //       "application_context": {
      //         "brand_name": "MY BRAND", //The label that overrides the business name in the PayPal account on the PayPal site
      //        "locale": "en-IN",
      //         "user_action": "PAY_NOW", //Process the payment immediately when the customer clicks Pay Now
      //       //Payment cancel redirection URL
      //        "payment_method": {
      //        "payer_selected": "PAYPAL"
      //        }
      //        },
      //        "payer": { //Pass and prefill buyer details like first name, last name, email address and phone number
      //        "name": {
      //        "given_name": "Youbissi",
      //        "surname": "Yvan"
      //        },
      //        "email_address": "youbissiyvan@gmail.com",
      //        "phone": {
      //        "phone_number": {
      //        "national_number": "4089372075"
      //        }
      //        },
      //        "address": { //Pass and prefill buyer billing address details
      //        "address_line_1": "Douala, Nyalla",
      //        "address_line_2": "Entree Chinois",
      //        "admin_area_2": "Nkolmbong",
      //        "admin_area_1": "derriere temoins de jehovah",
      //        "postal_code": "400029",
      //        "country_code": "US"
      //        }
      //        },
             
      //       "purchase_units": [
      //         {
      //           "amount": {
      //             "currency_code": "USD",
      //             "value": price.toFixed(2).toString()
      //           }
      //         }
      //       ]
      //     })
      //   })
      // })
      .catch((e) => console.log('2nd err',e))
  
}
    return(
      <>
      {
          load ? <TouchableWithoutFeedback  onPress = { Keyboard.dismiss }  >
          <View style = {{ width, height, flex: 1, backgroundColor: '#f1f1f5', }} >
              <StatusBar backgroundColor="lightgray" />
              <View style = {{ dipslay: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 15, height: height / 11.7, backgroundColor: '#ffff'  }} >
                  <TouchableOpacity onPress = { () => navigation.navigate('PickDelivery') } >
                      <Feather name = 'arrow-left' size = {28} color = 'dodgerblue' />
                  </TouchableOpacity>
                  <Text style = {{ fontSize: 24, marginLeft: 20 }} >Payment</Text>
              </View>
              <View style = {{ width: '100%', marginBottom: 3, marginTop: 2, paddingHorizontal: 15, height: height / 6, backgroundColor: '#fff', }} >
                    <Text style = {{ marginTop: 10, fontWeight: '900', fontSize: 17, }} >
                      Select Payment Type
                    </Text>
                    <View style = {{ display:'flex', alignItems: 'center', width: '100%'}} >
                        <RadioButtonRN
                            data={ methods }
                            initial={1}
                            selectedBtn={(e) => setReceive(e.label)}
                            style={{ alignItems: 'center', width: '100%', flexDirection:'row' }}
                            box
                            textStyle = {{ marginHorizontal: 6, fontSize: 16, color: '#000' }}
                            boxStyle={{ marginHorizontal: 10, width: 145  }}
                        />
                    </View>
                </View>
                <View pointerEvents = { receive === 'In Parts' ? 'auto' : 'none' } style = { receive === 'In Parts' ? { height: height / 13, backgroundColor: '#fff', width, alignItems: 'center', justifyContent: 'center' } : { height: height / 13, backgroundColor: '#fff', width, alignItems: 'center', justifyContent: 'center', opacity: 0.3 } } >
                  <Text>Enter Amount you wish to pay now</Text>
                  <TextInput onChangeText = { (val) => {setAmount(val)} } style = {{ width: '85%', height: '80%', backgroundColor: 'lightgray', textAlign: 'center', borderRadius: 20 }} placeholder = 'Enter Amount' /> 
                </View>
              <View>
                  <Text style = {{ marginTop: 20, fontWeight: '900', fontSize: 17, marginLeft: 15 }} >
                  Select Payment Method
                  </Text>
              </View>
                  <ScrollView style = {{ width }} >
                  <ScrollView horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 30 }}  style = {{ width, paddingHorizontal: 10, height: 190,  }} >
                      <TouchableOpacity onPress = { () => {
                        setPayment('CASH PAYMENT')
                        Alert.alert("Cash Payment", " You choosed cash payment. By choosing this, you accept to pay your bill at the of pick-up of your dresses ", [
                          { text: 'AGREE',
                            onPress: () => {commande.commande.payment.paymentMethod = "CASH PAYMENT"; commande.commande.payment.leftOver = total - amount; commande.commande.payment.paymentStatus = "PENDING"; commande.commande.payment.amountGiven = receive === 'In Parts' ? amount : total; navigation.navigate("OrderDetails"); },
                          
                          },
                          {
                            text: 'CANCEL',
                        
                          }
                        ],
                          {
                            cancelable: true
                          }
                        );
                      } } style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15, marginRight: 20 }} >
                          <Image style = {{height: 80, width: 80 }} source = {require('../icons/download.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress = { () => {
                        setPayment('PAYPAL')
                      slide()
                      } } style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15 }} >
                          <Image style = {{height: '90%', width: "95%" }} source = {require('../assets/images/paypal-logo.png')} />
                      </TouchableOpacity>
                  </ScrollView>
              
              </ScrollView>
              <TouchableOpacity onPress = { () => createCompleteCommande()  } style = {{ height: height / 12, width, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 20 }} >
                  <Text style = {{ fontSize: 18, color: '#fff', paddingHorizontal: 5 }} >Amount Paid (XAF) {commande.commande.payment.total} </Text>
                  <Text style = {{ fontSize: 28, color: '#fff' }} >Next <Entypo name = 'chevron-thin-right' color = '#fff' size = {24} /> </Text>
              </TouchableOpacity>
              <Animated.View style = {{ width, height: '100%', transform: [{translateY: Anim}], backgroundColor: 'rgba( 0, 0, 0, 0.5 )', position: 'absolute', }} >
                  <View style = {{ height: height / 2.5, width, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, borderRadius: 30,  opacity: 1 }} >
                      <TouchableOpacity onPress = {() => slide()} style = {{ position: 'absolute', top: 10, right: 20 }} >
                        <Entypo name = 'cross' size = {34} color = 'dodgerblue' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress = { () => {
                        makePayment()
                        setPayment('PAYPAL')
                        slide()
                      } } style = {{ height: 65, width: '80%', backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'center', borderRadius: 25 }} >
                          <Text style = {{ color: 'white', fontSize: 28, fontWeight: 'bold' }} >
                            PayNow
                          </Text>
                      </TouchableOpacity>
                  </View>
              </Animated.View>
          </View>
      </TouchableWithoutFeedback> :  <WebView style = {{ height: 260, width: '100%' }}  javaScriptEnabled={true}
                     domStorageEnabled={true}
                     startInLoadingState={false}
                     style={{ marginTop: 20 }} source = {{ uri: 'https://www.sandbox.paypal.com/checkoutnow?token='+id }} onNavigationStateChange = { (navState) => {
                       console.log(navState);
                       fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders/'+id+'/capture ',{
       method:'POST',
       headers: {
         'Content-type': "application/json",
         'Authorization': "Bearer "+token,
       }
     })
     .then((response)=> response.json())
     .then((responseJson)=>{
       if(navState.url.includes('https://www.paypal.com/')){
        commande.commande.payment.paymentMethod = "PAYPAL"
        commande.commande.payment.amountGiven = receive === 'In Parts' ? amount : total;
        commande.commande.payment.leftOver = total - amount;
        commande.commande.payment.paymentStatus = "COMPLETED"
        navigation.navigate('OrderDetails')
       }
       console.log( 'doSomething response', responseJson);
     })

     .catch((error)=> console.log('here eror', error))
     if (navState.url.includes('https://www.paypal.com/')) {
      commande.commande.payment.paymentMethod = "PAYPAL"
      commande.commande.payment.amountGiven = receive === 'In Parts' ? amount : total;
      commande.commande.payment.leftOver = amount === 0 ? 0 : total - amount;
      commande.commande.payment.paymentStatus = "COMPLETED"
       navigation.navigate("OrderDetails")
     }
                     } } />
   } 
   </>
    )
}

function mapStateToProps(state){
    return{
      commande: state.commande,
    }
}

function mapDispatchToProps(dispatch){
    return {
       dispatch,
       ...bindActionCreators({
           reqOrder
       }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)