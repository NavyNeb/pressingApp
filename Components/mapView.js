import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, Dimensions } from 'react-native'
import { Feather, Entypo } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Button } from "react-native";
import { Image } from "react-native";
import MapView from 'react-native-maps';
const {width, height} = Dimensions.get('screen')

export default function Search(){
    const [data, setData] = useState([])
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [search, setSearch] = useState('')
    const [appLoading, setAppLoading] = useState(true)
    const getData = () => {
            fetch('http://192.168.100.207:8000/search?search=' + search)
            .then(Response => Response.json())
            .then(responseJson => {
                setAppLoading(false)
                setData(responseJson)
                console.log(responseJson);
            })

            .catch((error) => (console.log(error.toString())))
            .finally(() => setAppLoading(false));
            () => {console.log(latitude)}
        
    }
    
    
    

    return ( 
        <View style = {{ backgroundColor:'#f1f1f6', width, height, alignItems: 'center', }} >
            
           <View style = {{ paddingHorizontal: 5, zIndex: 6, height: height / 14.5, width: width - 15, backgroundColor: '#fff', marginTop: 45, borderRadius: 30, shadowOffset: { width: 10, height: 10 }, shadowColor: '#9a99a2', shadowRadius: 20, shadowOpacity: 1, elevation: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',  }} >                
                <TextInput onChangeText={ (val) => setSearch(val) } style = {{ backgroundColor: 'red', height: '90%', width: '85%', borderRadius: 20,paddingLeft: 10 }} />
                <TouchableOpacity onPress = { () => getData() }  activeOpacity= {0.5} style = {{ marginLeft: 8, borderLeftWidth: 1, paddingLeft: 5, borderColor: '#9a99a2' }} >    
                    <Feather name = 'search' size = {32} color='dodgerblue' />
                </TouchableOpacity>
           </View>
            <Text style ={{ zIndex: 6 }} >
                {/* {longitude} */}
               
            </Text>
            
            <MapView style = {{ width, height, position: 'absolute', zIndex:5 }} />
        </View>
    )
}