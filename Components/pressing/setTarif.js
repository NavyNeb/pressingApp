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


const setTarif = () => {
    const anim = useState(new Animated.Value(0))[0]
    const fade = useState(new Animated.Value(0))[0]

     const [loading, setLoading] = useState(true);
     const [prestaData, setPrestaData] = useState();
     const [hidden, setHidden] = useState(true)
     const [services, setServices] = useState([])
     const [tarif, setTarif] = useState([])
     const [data, setData] = useState()
     const [disp, setDisp] = useState(true)
     const [nom_service, setNom_service] = useState('')
     const [caracteristique, setCaraterisque] = useState('')

     useEffect(() => {
        fetch('http://192.168.100.207:8000/viewset/prestataire/' + 1)
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

    const getTarif = (Id) => {
      
        fetch('http://192.168.100.207:8000/viewset/tarif/?idprestataire=1&idservice=' + Id.toString() )
        .then((servResponse) => servResponse.json())
        .then((servJson)=>{
            console.log(servJson);
            servJson.map(item => {
              if ( tarif.length > 0 ) {
                  tarif.map((tarifItem)=>{
                      if ( tarifItem.id != item.id ) {
                          tarif.push({price: item.prix, id: item.id, name: item.article.description})
                      }
                      
                  })
              } else {
                setTarif(prevState => {
                  
                    console.log("NewprevState",prevState); 
                    
                    return[
                        ...prevState, 
                        {price: item.prix, id: item.article.id, name: item.article.description, Value: '' }
                    ]
                    
                })
              }
        })
        console.log(tarif)
    })

}
    const update = (id) => {
        fetch('http://192.168.100.207:8000/viewset/tarif/' + id.toString(),{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                      service: {
                        prix: nom_service,
                        caracteristique: caracteristique   
                      }
                })
            })
            .then(()=> {
                console.log(nom_service);
                console.log(caracteristique);
                fetch('http://192.168.100.207:8000/viewset/prestataire/3/')
                .then((response)=> response.json())
                .then((responseJson) => console.log('Yeah', responseJson))
            })
            .catch((err) => alert(err.toString()))
    }

     function loadServ(){
        setHidden(false)
        translate()
        console.log('retDat',data);
        setDisp(false)
    } 

    function close() {
        setHidden(true)
        translate()
    }

    const translate = () => {
        if (!hidden) {
            console.log('hidden', hidden);
            Animated.timing(fade, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true
            }).start()
                Animated.timing(anim, {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: true
                }).start()
            
        } else {
     console.log('not hidden', hidden);
     Animated.timing(fade, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
    }).start()
        Animated.timing(anim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        }).start()
   
    }
     }
    return (
        <View style = {{ flex: 1, backgroundColor: '#f1f1f5', paddingTop: 30 }} >
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
                             <TouchableOpacity onPress = { () => getTarif(item.id) } style = {{ alignItems: 'center', justifyContent: 'center', height: 120, width: width / 3, backgroundColor: '#fff', borderRadius: 9, paddingTop: 8, margin: 15 }} > 
                                 <Image style = {{height: 55, width: 55 }} source = {require('../../icons/pressing/001-washing-machine.png')} />
                                 <Text style = {{ display: 'flex', fontSize: 20, fontWeight: 'bold', marginTop: 20 }} >{item.name}</Text>
                                 <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >Min 12 hours</Text>
                             </TouchableOpacity>
                         )
                     }}
                />) 
                }
             </View>
             <TouchableOpacity onPress = { () => loadServ() } style = {{ width: width-30, backgroundColor: '#9a81d2', height:65, marginTop: 50, borderRadius: 24, justifyContent: 'center', alignItems: 'center' }} >
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
                     <Text style = {{ color: 'yellow', textAlign: 'center' }} >  </Text>
                     <FlatList
                     data = {tarif}
                     style = {{  backgroundColor: 'green', marginTop: 20, width: width - 40, height: height / 1.4, borderRadius: 20, backgroundColor: '#f1f1f5' }}
                     contentContainerStyle = {{ paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}
                     keyExtractor = { tarif => tarif.id.toString() }
                     renderItem = {({item}) => {
                         return (
                            <View style={{ marginVertical: 4, width: width - 56, borderRadius: 20, height: 105, backgroundColor: '#fff', paddingVertical: 10 }} >
                                <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '90%' }} >
                                <Text style = {{ color: '#000', fontSize: 18, fontWeight: '800',  }} >{item.name}</Text>
                                <TextInput onChangeText = { (val) => setTarif(item.Value=val) } placeholder = {item.price.toString()} style = {{ width: 106 }} />
                                </View>
                                <TouchableOpacity onPress = { () => update(item.id) } style = {{ width: 75, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: 'dodgerblue', marginLeft: 20, borderRadius: 15 }} >
                                    <Text style = {{ color: '#fff', fontSize: 18, fontWeight: '800',  }} >
                                        Save
                                    </Text>
                                </TouchableOpacity>
                            </View>
                         )
                     }}
                />
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
