import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Components/login";
import Register from "../Components/signUp";
const LoginStack = createStackNavigator()

export default function LogStack(params) {
    return(
        <LoginStack.Navigator
        screenOptions = {{
            headerShown:  false
        }}
        >
            <LoginStack.Screen name = 'Login' component = { Login } />
            <LoginStack.Screen name = 'Register' component = { Register } />
        </LoginStack.Navigator>
    )
}