import React from 'react'
import Orders from "../Components/pressing/orders";
import Past from "../Components/pressing/pastOrders";


import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const pressing = createMaterialTopTabNavigator()
export default function PressingOrders(params) {
    return (
        <pressing.Navigator>
            <pressing.Screen name = 'CurrentOrdres' component={Orders} />
            <pressing.Screen name = 'PastOrders' component={Past } />
        </pressing.Navigator>
    )
}