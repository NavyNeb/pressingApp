import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PickUp from "../Components/pick-ups";
import Delivery from "../Components/delivery";
const PickDeliveryTabs = createMaterialTopTabNavigator()

export default function PickDelivery(params) {
    return(
        <PickDeliveryTabs.Navigator>
            <PickDeliveryTabs.Screen name = 'PickUp' component = {PickUp} />
            <PickDeliveryTabs.Screen name = 'Delivery' component = {Delivery} />
        </PickDeliveryTabs.Navigator>
    )
}