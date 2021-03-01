import { Provider } from "react-redux";
import React, {useState} from 'react';
import Store from '../pressingApp/Store/'
import { NavigationContainer } from "@react-navigation/native";
import BottonTabs from "./routes/clientStack";
import Paypal from "./Components/paypal";
import  AppLoading  from "expo-app-loading";
import * as Font from "expo-font";
import Assigned from "./Components/pressing/assigned";
import Service from "./Components/pressing/services";
import Dash from "./Components/pressing/adminLogin";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 const [fontsLoaded, setFontsLoaded] = useState(false)
 const getFont = () => (
  Font.loadAsync({
    'Cookies-Reg': require('./assets/fonts/Cookie-Regular.ttf'),
  })
)
    if (fontsLoaded) {
     return (
      // <Dash />
      <NavigationContainer>
        <Provider store = {Store} >
        <BottonTabs />
        </Provider>
      </NavigationContainer>
     )
    } else {
     return(
      <AppLoading 
      startAsync = {getFont}
      onFinish = { () => setFontsLoaded(true) }
      onError={console.warn}
      />
     )
    }
    

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
