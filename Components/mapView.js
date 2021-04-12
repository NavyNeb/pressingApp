import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput, Dimensions, Image, StyleSheet, ActivityIndicator, } from 'react-native'
import { Feather, Ionicons} from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Location from "expo-location";
import { getPrestaId } from "../Action/getPrestaId";
import MapView, {  PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { getPresta } from "../Action/getClient";
import { WaveIndicator } from "react-native-indicators";
import PolyLine from "@mapbox/polyline";

const {width, height} = Dimensions.get('screen')

function Search({navigation, idPresta, getPrestaId}){
    const [id, setId] = useState(0);
    const [loading, setLoading] = useState(false)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [data, setData] = useState([])
    const [active, setActive] = useState(0)
    const [coords, setCoords] = useState([]);
    const [position, setPosition] = useState({
      coordinates: ([]),
    })
    const [position1, setPosition1] = useState({
      coordinates: ([]),
    })
    const [search, setSearch] = useState('')
    
    const getData = () => {
      setLoading(true)
      var count = 0
            if (search === '') {
              fetch('http://pressingliveapp.herokuapp.com/search')
            .then(Response => Response.json())
            .then(responseJson => {
                
                setData(responseJson)
                data.map(element => {
                    setPosition( prevState => {
                      return{ 
                        coordinates: [...prevState.coordinates, { id: element.id, latitude: element.adresse.latitude_presta, longitude: element.adresse.longitude_presta, title: element.enseigne_juridique }]
                      }
                    } )
                    count += 1;
                })
                setLoading(false)
            })

            .catch((error) => (console.log(error.toString())))
            
           
      
            } else {
              fetch('http://pressingliveapp.herokuapp.com/search?search=' + search)
            .then(Response => Response.json())
            .then(responseJson => {
              console.log("response",responseJson);
              setData(responseJson)
              data.map(element => {
                setPosition1( prevState => {
                  return{ 
                    coordinates: [...prevState.coordinates, { id: element.id, latitude: element.adresse.latitude_presta, longitude: element.adresse.longitude_presta, title: element.enseigne_juridique }]
                  }
                } )
                count += 1;
            })
            setLoading(false)
               
            })

            .catch((error) => (console.log(error.toString())))
            
           
       
        // console.log(longitude);
        // console.log(latitude);
            }
        setActive(1)
    }

    var Latitude =  0
    var Longitude =  0

// const getDirections = (startLoc, destinationLoc) => {
//   let KEY = 'AIzaSyB8thpB4hETSXj_wmKL-Rz7XNKIU_Ej0sc';
//   fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`)
//   .then((response) => response.json())
//   .then((respJson) => {
//     let points = PolyLine.decode(respJson.routes[0].overview_polyline.points);
//     console.log(points);
//     let coords = points.map((point) => {
//       return {
//         latitude: point[0],
//         longitude: point[1]
//       };
//     });
//     return setCoords(coords);
//   })
//   .catch((error) => (console.log(error.toString())))
// }


    useEffect(() => {
      (async () => {
        setLoading(true)
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLoading(false)
        Latitude = location.coords.latitude;
        Longitude = location.coords.longitude;
        // getDirections("4.0981139,9.7537465", "4.0924608,9.7496356");
        fetch('http://pressingliveapp.herokuapp.com/search_dist/?longitude=' + location.coords.longitude.toString() +'&latitude='+ location.coords.latitude.toString() + '&query=Douala' )
        .then(response => response.json())
        .then((jsonResp) => {
          console.log(jsonResp);
        })
      })();
     
    }, [0]);

   

  console.log(location);
  
    return ( 
        <>
          {
            loading ? ( <WaveIndicator size = { 60 } animating color = "dodgerblue" interaction /> ) : (
              <View style = {{ backgroundColor:'#f1f1f6', width, height, alignItems: 'center', }} >
            <View style = {{ paddingHorizontal: 5, zIndex: 2, height: height / 14.5, width: width - 15, backgroundColor: '#fff', marginTop: 75, 
            borderRadius: 30, shadowOffset: { width: 10, height: 10 }, shadowColor: '#9a99a2', shadowRadius: 30, shadowOpacity: 1, 
            elevation: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }} >                
                <TextInput onChangeText={ (val) => setSearch(val) } style = {{ height: '90%', width: '85%', borderRadius: 20,paddingLeft: 10, textAlign: 'center' }} placeholder = 'Rechercher un pressing' />
                <TouchableOpacity onPress = { () => getData() }  activeOpacity= {0.5} style = {{ marginLeft: 8, borderLeftWidth: 1, paddingLeft: 5, borderColor: '#9a99a2' }} >    
                    <Feather name = 'search' size = {32} color='dodgerblue' />
                </TouchableOpacity>
            </View>
           <View style = {{ marginTop: 10, width, height: height / 3, backgroundColor: '#dodgerblue', width: width - 15, borderRadius: 30, opacity: active, zndex: 3 }} >
  
           </View>
            <MapView  showsUserLocation
        followUserLocation
        loadingEnabled
        moveOnMarkerPress
        showsBuildings
        showsIndoors
        minZoomLevel = {16}
        showsMyLocationButton
        showsPointsOfInterest
        initialRegion = {{
          latitude: 4.0980845,
          longitude: 9.7537555,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121
    }} 
        zoomEnabled={true} provider = { PROVIDER_GOOGLE } style = {{ position: 'absolute', width, height, ...StyleSheet.absoluteFillObject }}>
              { 
                search === '' ? position.coordinates.map((item)=> (
                  <MapView.Marker key = { item.id } onPress = { () => {
                   getPrestaId(item.id);
                   getPresta(item.id); 
                   navigation.navigate("Home") 
                 } } coordinate = {{ 
                   latitude: Number(item.latitude),
                   longitude: Number(item.longitude),
                 }}
                 title = {item.title}
                 description = {item.title}
                 >
                </MapView.Marker>
           )) : position1.coordinates.map((item)=> (
            <MapView.Marker key = { item.id } onPress = { () => {
             getPrestaId(item.id);
             getPresta(item.id); 
             navigation.navigate("Home") 
           } } coordinate = {{ 
             latitude: Number(item.latitude),
             longitude: Number(item.longitude),
           }}
           title = {item.title}
           description = {item.title}
           >
          </MapView.Marker>
     ))
              }
              <Polyline 
              coordinates = {coords}
              strokeWidth= {2}
              strokeColor = 'dodgerblue'
              />
          </MapView> 
        </View> 
            )
          }
        </>
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




export default connect(mapStateToProps,mapDispatchToProps)(Search)