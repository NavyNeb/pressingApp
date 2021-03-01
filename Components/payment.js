import React, { useState, useEffect } from 'react';
import { TouchableOpacity, BackHandler , ScrollView, View, Text, Image, Dimensions, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
    const navigate = () => {
        reqOrder(commande)
        navigation.navigate('OrderDetails')
    }
    console.log("commande", commande);
    var total = commande.commande.payment.total
    var URL = '';
    const makePayment = ()=> {
        fetch('https://api.sandbox.paypal.com/v1/oauth2/token?grant_type=client_credentials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization": "Basic QWZZTmdoSWNmN2pndUxLdlNWRE5KQjVQTzdUOXk1QTRpNnB5VVEzaldKVWR6RmkxNzVJeno5QzlET1NCYURLejlqaGVLWDNlNk0wYWk4WlA6RUhqcjFwcVdkWENac1A4Sk1vdDF4MjV6c3V1WEJFN1Z6WjNtbTV1b3pGWk5Wd1JkSEVfeTdiZnNtSFo3QzEybzA5a2Z0WXFtYVRBUGgyM2k="
            },
      },)
      .then((Response) => Response.json())
      .then((ResponseJson)=> {
          console.log("getToken ",ResponseJson);
          setToken(ResponseJson.access_token);
        fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+token,
          },
          body: JSON.stringify({
            
            "application_context": {
              "brand_name": "MY BRAND", //The label that overrides the business name in the PayPal account on the PayPal site
             "locale": "en-IN",
              "user_action": "PAY_NOW", //Process the payment immediately when the customer clicks Pay Now
            //Payment cancel redirection URL
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
                  "value": total.toString()
                }
              }
            ]
          })
        })
        .then(()=>{
          fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+token,
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
                  "value": total.toString()
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
      })
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
              <View>
                  <Text style = {{ marginVertical: 20, fontWeight: '900', fontSize: 17, marginLeft: 15 }} >
                  Select Payment Method
                  </Text>
              </View>
                  <ScrollView style = {{ width }} >
                  <ScrollView horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 5, paddingRight: 4 }}  style = {{ width, paddingHorizontal: 10, height: 190,  }} >
                      <TouchableOpacity style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15, marginRight: 20 }} >
                          <Image style = {{height: 80, width: 80 }} source = {require('../icons/download.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress = { () => makePayment() } style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 125, height: 125, borderRadius: 15 }} >
                          <Image style = {{height: '90%', width: "95%" }} source = {require('../assets/images/paypal-logo.png')} />
                      </TouchableOpacity>
                  </ScrollView>
              
                  <View style = {{ backgroundColor: '#fff' }}>
                      <Text style = {{ fontWeight: 'bold', paddingHorizontal: 10, marginTop: 20, marginBottom: 34 }} >Enter Account Deatils</Text>
                      <View style = {{ paddingHorizontal: 10 }} >
                          <View style = {{ borderBottomWidth: 1, borderColor: 'gray', paddingVertical: 6, height: 55 }} >
                              <TextInput placeholder = 'Enter Telephone number' style = {{ height: '100%', }}  />
                          </View>
                          <View style = {{ height: 350, marginTop: 35 }} >
                              <Text style = {{ color: 'gray' }} >
                                  You will receive a message on your device shorty. Please follow the steps to complete the operation  within the times limits
                              </Text>
                          </View>
                      </View>
                  </View>
                 
              </ScrollView>
              <TouchableOpacity onPress = { () => navigate()  } style = {{ height: height / 12, width, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 20 }} >
                  <Text style = {{ fontSize: 18, color: '#fff', paddingHorizontal: 5 }} >Amount Payable (XAF) {commande.commande.payment.total} </Text>
                  <Text style = {{ fontSize: 28, color: '#fff' }} >Next <Entypo name = 'chevron-thin-right' color = '#fff' size = {24} /> </Text>
              </TouchableOpacity>
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
         navigation.navigate('OrderDetails')
       }
       console.log( 'doSomething response', responseJson);
     })

     .catch((error)=> console.log('here eror', error))
     if (navState.url.includes('https://www.paypal.com/')) {
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