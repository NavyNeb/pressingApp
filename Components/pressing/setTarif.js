import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, Flatlist, Animated, Easing, TextInput } from "react-native";
const { width, height } = Dimensions.get('screen')
import { BarIndicator,PulseIndicator } from "react-native-indicators";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { modifyTarif, saveModif } from "../../Action/setTarifAc";
import Tarif from "./tarifManager";

const setTarif = ({navigation}) => {
    const anim = useState(new Animated.Value(0))[0]
    const fade = useState(new Animated.Value(0))[0]

     const [loading, setLoading] = useState(true);
     const [prestaData, setPrestaData] = useState();
     const [hidden, setHidden] = useState(true)
     const [services, setServices] = useState([])
     const [data, setData] = useState()
     const [disp, setDisp] = useState(true)
     const [caracteristique, setCaraterisque] = useState('')

     useEffect(() => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/prestataire/' + 1)
        .then((response)=> response.json())
        .then((responseJson) => {
            console.log(responseJson);
          responseJson.service.map(item => {
              console.log('item', item);
            if ( services.length > 0 ) {
                services.map((servItem)=>{
                    if ( servItem.id != item.id ) {
                        services.push({name: item.nom_service, id: item.id})
                    }
                    
                })
            } else {
              setServices(prevState => {
                
                  console.log("NprevState",prevState); 
                  
                  return[
                      ...prevState, 
                      {name: item.nom_service, id: item.id},
                  ]
                  
              })
            }
           })
            
          setLoading(false)
          console.log(services);
        })
        .catch((error) => (console.log(error.toString())))
  }, [0]);

    

    function loadServ(id){
        setHidden(false)
        translate()
        setDisp(false)
    } 

    function close() {
        setHidden(true)
        translate()
    }

    const translate = () => {
        if (!hidden) {
            Animated.timing(fade, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start()
                Animated.timing(anim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                }).start()
            
        } else {
     Animated.timing(fade, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
    }).start()
        Animated.timing(anim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
   
    }
     }
    return (
        <View style = {{ flex: 1, backgroundColor: '#f1f1f5',  }} >
        
        <View style = {{ height: 50, backgroundColor: '#fff', justifyContent:'center', elevation: 2, borderBottomEndRadius: 35, borderBottomStartRadius: 35}} >
            <Text style = {{ textAlign: 'center', fontSize: 24, color: '#9a81d2' }} >
                Pressing Name   
            </Text>
        </View>
        
        <View style = {{ backgroundColor: '#fff', flex: 1 , marginTop: 10, width , alignSelf: 'center', borderRadius: 35, elevation: 2, alignItems: 'center', paddingTop: 20 }} >
            <Text style = {{ color: '#9a81d2', fontSize: 17, marginBottom: 10 }} > Selectioner un service </Text>
             <View style = {{ height: height / 2, width: width - 20, backgroundColor: '#f1f1f5', borderRadius: 15, justifyContent : 'space-between', alignItems: 'center', flexDirection: 'row', paddingRight: 10 }} >
             { loading ? ( <View style = {{ alignItems: 'center', width }} >
             <BarIndicator  animating interaction />
         </View>) :  (<FlatList
                     data = {services}
                     numColumns = {2}
                     contentContainerStyle = {{ paddingHorizontal: 20 }}
                     keyExtractor = { services => services.id.toString() }
                     renderItem = {({item}) => {
                         return (
                             <TouchableOpacity onPress = { () =>{ navigation.navigate('manager', { servId: item.id }) } } style = {{ alignItems: 'center', justifyContent: 'center', height: 120, width: width / 3, backgroundColor: '#fff', borderRadius: 9, paddingTop: 8, margin: 15 }} > 
                                 <Image style = {{height: 55, width: 55 }} source = {require('../../icons/pressing/001-washing-machine.png')} />
                                 <Text style = {{ display: 'flex', fontSize: 20, fontWeight: 'bold', marginTop: 20 }} >{item.name}</Text>
                                 <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >Min 12 hours</Text>
                             </TouchableOpacity>
                         )
                     }}
                />) 
                }
             </View>
             <TouchableOpacity style = {{ width: width-30, backgroundColor: '#9a81d2', height:65, marginTop: 50, borderRadius: 24, justifyContent: 'center', alignItems: 'center' }} >
                 <Text style = {{ color: '#fff', fontSize: 24, marginBottom: 10 }} > <Text style = {{  color: 'white', textAlign: 'center', width: 50 , fontSize: 34, borderRadius: 35 , marginBottom: 10 }} >+</Text>  Add Service </Text>
             </TouchableOpacity>
             <Animated.View style = {{ position: 'absolute', width: width - 20, height: height / 1.5, backgroundColor: '#ffff', borderRadius: 25, top: '10%', elevation: 2, transform: [{scale: anim}], opacity: fade, alignItems: 'center' }} >
                
                 {
                     disp ?  ( <View style = {{ alignItems: 'center', width }} >
                     <PulseIndicator  animating interaction />
                 </View>) : (
                     <>
                     <TouchableOpacity onPress = { () => close() } style = {{ position: 'absolute', right: 10, top: 6 }} >
                             <Feather name = 'crosshair' size = {32} color = 'indigo' />    
                     </TouchableOpacity>
                     <View style = {{ backgroundColor: 'transparent', height: 20, width: width - 40, display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }} >
                        <Text>
                            Articles
                        </Text>
                        <Text>
                            Price
                        </Text>
                    </View>
                     {/* <TouchableOpacity onPress = { () => ajouterService() }  style = {{ width: '85%', backgroundColor: '#9a81d2', height:65, marginTop: 50, borderRadius: 24, justifyContent: 'center', alignItems: 'center' }} >
                 <Text style = {{ color: '#fff', fontSize: 24, marginBottom: 10 }} > <Text style = {{  color: 'white', textAlign: 'center', width: 50 , fontSize: 34, borderRadius: 35 , marginBottom: 10 }} >+</Text>  Add Service </Text>
                     </TouchableOpacity> */}
                  </>
                 )
                 }
             </Animated.View>
            
        </View>
       
    </View>
    )
}

function mapStateToProps(state) {
    return{
        setOrders: state.Order
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
        modifyTarif, saveModif
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(setTarif)
