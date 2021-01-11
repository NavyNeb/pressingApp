import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Components/home";
import Notification from "../Components/notifications";
import Offers from "../Components/offers";

const HomeTabs = createBottomTabNavigator();

export default function HomeTab(params) {
    return(
        <HomeTabs.Navigator>
            <HomeTabs.Screen name = 'Home' component = {Home} />
            <HomeTabs.Screen name = 'Notifications' component = {Notification} />
            <HomeTabs.Screen name = 'Offers' component = {Offers} />
        </HomeTabs.Navigator>
    )
}