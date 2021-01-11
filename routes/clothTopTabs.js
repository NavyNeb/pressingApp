import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ClothMen from "../Components/clothsMen";
import Others from "../Components/Others";
import ClothWomen from "../Components/clothWomen";
import ClothKids from "../Components/clothKids";
import {Icon } from 'react-native-elements'
const ClothTabs = createMaterialTopTabNavigator()
import {  MaterialCommunityIcons, Entypo, Feather, Ionicons} from "@expo/vector-icons";

export default function ClothTopTabs(params) {
    return(
        <ClothTabs.Navigator
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Man') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                      } else if (route.name === 'Woman') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                      } else if( route.name == 'Kids' )
                        iconName = focused ? 'ios-person' : 'ios-person'
            
                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                },
            })} 
            tabBarOptions= {{
                activeTintColor: 'dodgerblue',
                inactiveTintColor: 'gray'
            }}      
        >
            <ClothTabs.Screen name = 'Man' component = {ClothMen} />
            <ClothTabs.Screen name = 'Women' component = {ClothWomen} />
            <ClothTabs.Screen name = 'Kids' component = {ClothKids} />
            <ClothTabs.Screen name = 'Others' component = {Others} />
        </ClothTabs.Navigator>
    )
}