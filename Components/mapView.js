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
                setData(responseJson)
                // console.log("posted");
                // console.log(responseJson);
                console.log(longitude);
            })

            .catch((error) => (console.log(error.toString())))
            .finally(() => setAppLoading(false));
           
        retrieveData()
    }

    const retrieveData = () => {
       
            data.forEach(element => {
                return (
                    setLongitude(element.service.nom_service),
                    setLatitude(element.service.nom_service)
                )
            })
       
    }
    
    
    

    return ( 
        <View style = {{ backgroundColor:'#f1f1f6', width, height, alignItems: 'center', }} >
            
           <View style = {{ paddingHorizontal: 5, zIndex: 2, height: height / 14.5, width: width - 15, backgroundColor: '#fff', marginTop: 45, borderRadius: 30, shadowOffset: { width: 10, height: 10 }, shadowColor: '#9a99a2', shadowRadius: 30, shadowOpacity: 1, elevation: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',  }} >                
                <TextInput onChangeText={ (val) => setSearch(val) } style = {{ height: '90%', width: '85%', borderRadius: 20,paddingLeft: 10 }} />
                <TouchableOpacity onPress = { () => getData() }  activeOpacity= {0.5} style = {{ marginLeft: 8, borderLeftWidth: 1, paddingLeft: 5, borderColor: '#9a99a2' }} >    
                    <Feather name = 'search' size = {32} color='dodgerblue' />
                </TouchableOpacity>
           </View>
           <Text>{longitude}</Text>
            <View style = {{ height: 178, width }} >
                {/* <FlatList 
                    data={data}
                    style = {{ opacity:0 }}
                    keyExtractor={data => data.user.id}
                    renderItem={({item}) => {
                        return (
                            useEffect(()=>{
                        setLongitude(item.adresse.longitude)
                            }),[0]
                        )
                    } }
                   
            /> */}
            </View>
            <Text>{longitude}</Text>
            {/* {
                        data.map(({item})=>{
                            return (
                                <Text style={{ color: 'red',fotnSize:19 }} >
                                {item.adresse.longitude}
                                </Text>
                            // setLongitude(item.adresse.longitude)
                            )
                        })
                    } */}
{/* {/*             */}
            <MapView style = {{ width, height, position: 'absolute',  }} />
        </View>
    )
}