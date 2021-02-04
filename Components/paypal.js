import React, { useState } from 'react'
import axios from "axios";
import {
    View,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { WebView } from 'react-native-webview';

export default function Paypal(){
    const  [data, setData ] = useState([]);
    const [token, setToken] = useState('');
    const [id, setId] = useState('');
    const [approve, setApprove] = useState('');
    const [load, setLoad] = useState(true)
    const makePayment = () => {
        return(
                        
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
                "intent": "CAPTURE",
                "application_context": {
                  "brand_name": "MY BRAND", //The label that overrides the business name in the PayPal account on the PayPal site
                 "locale": "en-IN",
                  "user_action": "PAY_NOW", //Process the payment immediately when the customer clicks Pay Now
                 "return_url": "http://localhost:3000/process", //Payment successful redirection URL
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
                      "value": "1000.00"
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
              setApprove(approval.href)
              console.log('approval  ',approval.href);
              setLoad(false)
            })
            .catch((e) => console.log( '1st err', e))
          })
          .catch((e) => console.log('2nd err',e))
        )
    }

    const doSomething = () => {
      fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders/'+id+'/capture ',{
        method:'POST',
        headers: {
          'Content-type': "application/json",
          'Authorization': "Bearer "+token,
        }
      })
      .then((response)=> response.json())
      .then((responseJson)=>{
        console.log( 'doSomething response', responseJson);
      })
      .catch((error)=> console.log('here eror', error))
    }

    return(
      <>
         {
             load ?  <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f1f5', paddingTop: 20 }} >  
             <TouchableOpacity onPress = { () => makePayment() } style = {{ width: 120, height: 54, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent:'center', borderRadius: 20 }} >
             <Text style = {{ color:"#f1f1f6", fontSize: 15.7 }} >Pay with PayPal</Text>
           </TouchableOpacity>
        </View> :  <WebView style = {{ height: 260, width: '100%' }} source = {{ uri: approve }} onNavigationStateChange = {doSomething} />
      } 
      </>
    )
} 

 
         