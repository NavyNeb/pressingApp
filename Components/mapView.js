import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput, Dimensions, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { Feather, Entypo } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Location from "expo-location";
import { getPrestaId } from "../Action/getPrestaId";
import MapView, { Marker } from 'react-native-maps';
import { WaveIndicator } from "react-native-indicators";
const {width, height} = Dimensions.get('screen')


function Search({navigation, idPresta, getPrestaId}){
    const [id, setId] = useState(0);
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [data, setData] = useState([])
    const [active, setActive] = useState(0)
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [search, setSearch] = useState('')
    const getData = () => {
            if (search === '') {
              fetch('http://pressingliveapp.herokuapp.com/search')
            .then(Response => Response.json())
            .then(responseJson => {
                setData(responseJson)
                setLoading(false)
            })

            .catch((error) => (console.log(error.toString())))
            
           
        retrieveData()
        console.log(longitude);
        console.log(latitude);
            } else {
              fetch('http://pressingliveapp.herokuapp.com/search?search=' + search)
            .then(Response => Response.json())
            .then(responseJson => {
                setData(responseJson)
                
            })

            .catch((error) => (console.log(error.toString())))
            
           
        retrieveData()
        console.log(longitude);
        console.log(latitude);
            }
        setActive(1)
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
  
  console.log(location);
  
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
            <TouchableOpacity onPress ={() =>  setActive(0) } style = {{ zIndex: 2, width: 32, backgroundColor: 'transparent', position: 'absolute', right: 15, top: height / 6.7, opacity: 0.6  }} >
                <Feather name = 'crosshair' size={32} style = {{ opacity: active }} />
              </TouchableOpacity>
           <View style = {{ marginTop: 10, width, height: height / 3, backgroundColor: '#dodgerblue', width: width - 15, borderRadius: 30, opacity: active }} >
             {
               loading ? ( <WaveIndicator animating interaction /> ) : (
                <FlatList
                data= {data}
                style = {{ backgroundColor:'transparent',borderRadius:20 }}
                keyExtractor={ data => data.user.id.toString() }
                renderItem={({item})=>{
                  return(
                  <TouchableOpacity onPress = { () => {
                    getPrestaId(item.id), navigation.navigate("Home") 
                  }} style = {{alignItems: 'center', justifyContent:'center',height: height / 10, backgroundColor:'#fff' }} >
                      <Text style = {{ fontSize: 18, color: '#000', letterSpacing: 1 }} >
                        {item.enseigne_juridique}
                        {item.user.id}
                      </Text>
                    </TouchableOpacity>
                  )
                }}
              />
               )
             }
           </View>
           <TouchableOpacity>
             <Text  style = {{ fontSize: 18, color: '#000', letterSpacing: 1 }} >
                Search Pressing
             </Text>
           </TouchableOpacity>
            {/* <MapView style = {{ position: 'absolute', width, height }}>
            <Marker 
                      coordinate = {{ 
                        latitude: 4.0980875,
                        longitude: 9.7537301,
                       }}
                       title = 'hello'
                  />
          </MapView>  */}
        </View> 
    )
}



function mapStateToProps(state){
  return {
    idPresta: state.getId
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatch,
    ...bindActionCreators({
      getPrestaId
    }, dispatch )
  }
}



export const getId = (id) => {
  const det = id
  return det;
} 



export default connect(mapStateToProps,mapDispatchToProps)(Search)