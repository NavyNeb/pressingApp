import React, { useState } from 'react'
import axios from "axios";
import {
    View,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'

import { useEffect } from 'react';

export default function Paypal({navigation}){

  
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
                      "value": "100.00"
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
                      "value": "100.00"
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
          .catch((e) => console.log('2ndErr', e))
      
    }

    const doSomething = (navState) => {
          
      }
  
      

    return(
      <Text>hello</Text>
    )
} 

 
         