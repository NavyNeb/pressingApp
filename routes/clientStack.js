import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTabs from "./homeBottomTabs";
import ReviewOrder from "../Components/reviewOrder";
import Payment from "../Components/payment";
import OrderDetails from "../Components/orderDetails";
import Cloths from "../Components/cloths";
import Login from "./loginStack";
import PickDelivery from "../Components/pickDelivery";
import PressingStack from './pressingStack'
import Welcome from '../Components/welcome'
import Search from "../Components/mapView"
import paypal from "../Components/paypal";
import GetPrestaData from "../Components/getPrestaData";

const clientStack = createStackNavigator();

export default function InOutStack(){
    return (
        <clientStack.Navigator
            screenOptions = {{
                headerShown:  false
            }}
        >
           <clientStack.Screen name = 'map'  component = {Search} />
            <clientStack.Screen name = 'Home'  component = {HomeBottomTabs}  />
            <clientStack.Screen name = 'Paypal'  component = {paypal} />
            <clientStack.Screen name = 'Pressing'  component = {PressingStack} />
            <clientStack.Screen name = 'Cloth'  component = {Cloths} />
            <clientStack.Screen name = 'welcome'  component = {Welcome} />
            <clientStack.Screen name = 'login'  component = {Login} />
            <clientStack.Screen name = 'ReviewOrders'  component = {ReviewOrder} />
            <clientStack.Screen name = 'PickDelivery'  component = {PickDelivery} />
            <clientStack.Screen name = 'Payment'  component = {Payment} />
            <clientStack.Screen name = 'pressing'  component = {PressingStack} />
            <clientStack.Screen name = 'OrderDetails'  component = {OrderDetails} />
        </clientStack.Navigator>
    )
}