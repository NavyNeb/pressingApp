import React from 'react'
import Assigned from "../Components/pressing/assigned";
import Completed from "../Components/pressing/completed";
import OrderTabs from "../routes/pressingOrders";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const pressing = createBottomTabNavigator()
export default function StackPresing(params) {
    return (
        <pressing.Navigator>
            <pressing.Screen name = 'OrderTab' component={OrderTabs} />
            <pressing.Screen name = 'Assigned' component={Assigned} />
            <pressing.Screen name = 'Completed' component={ Completed } />
        </pressing.Navigator>
    )
}