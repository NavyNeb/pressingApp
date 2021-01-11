import { Provider } from "react-redux";
import React from 'react';
import Store from '../pressingApp/Store/'
import { NavigationContainer } from "@react-navigation/native";
import BottonTabs from "./routes/clientStack";
import Welcome from "./Components/welcome";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 
  return (
    <Welcome />
    // <NavigationContainer>
    //   <Provider store = {Store} >
    //     <BottonTabs />
    //   </Provider>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
