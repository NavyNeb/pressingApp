import React from 'react'
import OrderAdmin from '../Components/admin/odersAdmin';
import OrdersDetailsAdmin from "../Components/admin/ordersDetailsAdmin";
import Assigned from "../Components/pressing/assigned";
import DashboardAdmin from "../Components/pressing/adminLogin";
import Services from "../Components/pressing/services";
import Completed from "../Components/pressing/completed";
import Tarif from "../Components/pressing/setTarif";
import OrderTabs from "../routes/pressingOrders";
import Article from "../Components/pressing/articles";
import TarifManager from '../Components/pressing/tarifManager'

import {createStackNavigator} from "@react-navigation/stack";

const pressing = createStackNavigator()
export default function StackPresing(params) {
    return (
        <pressing.Navigator
            screenOptions = {{
                headerShown: false
            }}
        >
            <pressing.Screen name = 'dashboard' component = {DashboardAdmin}/>
            <pressing.Screen name = 'orderadmin' component = {OrderAdmin}/>   
            <pressing.Screen name = 'orderdetailsadmin' component = {OrdersDetailsAdmin}/>
            <pressing.Screen name = 'ordertab' component={OrderTabs} />
            <pressing.Screen name = 'assigned' component={Assigned} />
            <pressing.Screen name = 'tarif'     component = {Tarif} />
            <pressing.Screen name = 'manager'     component = {TarifManager} />
            <pressing.Screen name = 'services' component = {Services}/>
            <pressing.Screen name = 'article' component = {Article}/>
            <pressing.Screen name = 'completed' component={Completed} />
        </pressing.Navigator>
    )
}