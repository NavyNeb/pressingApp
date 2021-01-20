import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput, Dimensions, Image, StyleSheet } from 'react-native'
import { Feather, Entypo } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Button } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from 'react-native-maps';
const {width, height} = Dimensions.get('screen')

export default function Search(){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [data, setData] = useState([])
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [search, setSearch] = useState('')
    const getData = () => {
            fetch('http://192.168.100.207:8000/search?search=' + search)
            .then(Response => Response.json())
            .then(responseJson => {
                setData(responseJson)
                
            })

            .catch((error) => (console.log(error.toString())))
            
           
        retrieveData()
        console.log(longitude);
        console.log(latitude);
    }

    const retrieveData = () => {
            data.forEach(element => {
                return (
                    setLongitude(element.adresse.longitude_presta),
                    setLatitude(element.adresse.latitude_presta)
                )
            })
    }


    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);

    let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  console.log(text);
    return ( 
        <View style = {{ backgroundColor:'#f1f1f6', width, height, alignItems: 'center', }} >
            <View style = {{ paddingHorizontal: 5, zIndex: 2, height: height / 14.5, width: width - 15, backgroundColor: '#fff', marginTop: 45, 
            borderRadius: 30, shadowOffset: { width: 10, height: 10 }, shadowColor: '#9a99a2', shadowRadius: 30, shadowOpacity: 1, 
            elevation: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }} >                
                <TextInput onChangeText={ (val) => setSearch(val) } style = {{ height: '90%', width: '85%', borderRadius: 20,paddingLeft: 10 }} />
                <TouchableOpacity onPress = { () => getData() }  activeOpacity= {0.5} style = {{ marginLeft: 8, borderLeftWidth: 1, paddingLeft: 5, borderColor: '#9a99a2' }} >    
                    <Feather name = 'search' size = {32} color='dodgerblue' />
                </TouchableOpacity>
            </View>
            <Text>{longitude}</Text>
            <Text>{longitude}</Text>
            <MapView style = {{ position: 'absolute', width, height }}>
            <Marker 
                      coordinate = {{ 
                        latitude: Number(latitude),
                        longitude: Number(longitude),
                       }}
                       title = 'hello'
                  />
          </MapView> 
        </View> 
    )
}
