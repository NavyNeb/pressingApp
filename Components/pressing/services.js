import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, Flatlist, Animated, Easing, TextInput } from "react-native";
const { width, height } = Dimensions.get('screen')
import { BarIndicator,PulseIndicator } from "react-native-indicators";
import { Feather } from "@expo/vector-icons";

function Services() {
    const anim = useState(new Animated.Value(-500))[0]
    const fade = useState(new Animated.Value(0))[0]

     const [loading, setLoading] = useState(true);
     const [prestaData, setPrestaData] = useState();
     const [hidden, setHidden] = useState(true)
     const [id, setId] = useState(0)
     const [data, setData] = useState()
     const [disp, setDisp] = useState(true)
     const [nom_service, setNom_service] = useState('')
     const [caracteristique, setCaraterisque] = useState('')
     useEffect(() => {
          fetch('http://pressingliveapp.herokuapp.com/viewset/prestataire/' + 1)
          .then((response)=> response.json())
          .then((responseJson) => {
            setPrestaData(responseJson.service)
            setLoading(false)
            console.log(prestaData);
          } )
          .catch((error) => (console.log(error.toString())))
    }, [0]);

    const ajouterService = () => {
        return (
            fetch('http://pressingliveapp.herokuapp.com/viewset/prestataire/1/',{
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                },
                boby: JSON.stringify({
                    nom_service: nom_service,
                    caracteristique: caracteristique
                })
            })
            .then(()=> console.log(nom_service))
            .catch((err) => console.log(err.toString()))
      
        )
         }
 
    function loadServ(){
        setHidden(false)
        console.log(prestaData);
        let items = prestaData.find(el => el.id == id)
        translate()
        setData(items)
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
                toValue: -500,
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
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        }).start()
       
   }
    }

     const getServices = () => {
        
        if (loading) {
            return  <View style = {{ alignItems: 'center', width }} >
                <BarIndicator  animating interaction />
            </View>
    
        } else {
            
            return(
                prestaData.map((item)=>{
                    
            
                    return (
                        <TouchableOpacity key={item.id} onPress = { () => setId(item.id) } style = {{ alignItems: 'center', justifyContent: 'center', height: 120, width: width / 3, backgroundColor: '#fff', borderRadius: 9, paddingTop: 8, marginLeft: 8 }} > 
                            <Image style = {{height: 55, width: 55 }} source = {require('../../icons/pressing/001-washing-machine.png')} />
                            <Text style = {{ display: 'flex', fontSize: 20, fontWeight: 'bold', marginTop: 20 }} >{item.nom_service}</Text>
                            <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >Min 12 hours</Text>
                        </TouchableOpacity>
                    )
                })
            )
            
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
               <Text style = {{ color: '#9a81d2', fontSize: 17, marginBottom: 10 }} > Your Services </Text>
                <View style = {{ height: height / 2, width: width - 20, backgroundColor: '#f1f1f5', borderRadius: 15, justifyContent : 'space-between', alignItems: 'center', flexDirection: 'row', paddingRight: 10 }} >
                { getServices() }
                </View>
                <TouchableOpacity onPress = { () => loadServ() } style = {{ width: width-30, backgroundColor: '#9a81d2', height:65, marginTop: 50, borderRadius: 24, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style = {{ color: '#fff', fontSize: 24, marginBottom: 10 }} > <Text style = {{  color: 'white', textAlign: 'center', width: 50 , fontSize: 34, borderRadius: 35 , marginBottom: 10 }} >+</Text>  Add Service </Text>
                </TouchableOpacity>
                <Animated.View style = {{ position: 'absolute', width: width - 30, height: height / 1.5, backgroundColor: '#f0d1c8', borderRadius: 25, top: '10%', elevation: 2, transform: [{translateY: anim}], opacity: fade, alignItems: 'center' }} >
                    {
                        disp ?  ( <View style = {{ alignItems: 'center', width }} >
                        <PulseIndicator  animating interaction />
                    </View>) : (
                        <>
                        <TouchableOpacity onPress = { () => close() } style = {{ position: 'absolute', right: 10, top: 10 }} >
                                <Feather name = 'crosshair' size = {32} color = 'indigo' />    
                        </TouchableOpacity>
                        <Text style = {{ color: 'yellow', textAlign: 'center' }} >  </Text>
                        <View style = {{ paddingHorizontal: 5, height: height / 16, width: '85%', backgroundColor: '#fff', marginTop: 45, borderRadius: 30, 
                            elevation: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }} >                
                                <TextInput onChangeText = { (val) => setNom_service(val) } style = {{ height: '90%', width: '85%', borderRadius: 20,paddingLeft: 10, textAlign: 'center' }} placeholder = 'Enter Nom du service' />
                        
                        </View>
                        <View style = {{ paddingHorizontal: 5, height: height / 16, width: '85%', backgroundColor: '#fff', marginTop: 15, borderRadius: 30, 
                            elevation: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }} >                
                                <TextInput onChangeText = { (val) => setCaraterisque(val) } style = {{ height: '90%', width: '85%', borderRadius: 20,paddingLeft: 10, textAlign: 'center' }} placeholder = 'Enter caracteristique' />
                        
                        </View>
                       
                        <TouchableOpacity onPress = { () => ajouterService() }  style = {{ width: '85%', backgroundColor: '#9a81d2', height:65, marginTop: 50, borderRadius: 24, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style = {{ color: '#fff', fontSize: 24, marginBottom: 10 }} > <Text style = {{  color: 'white', textAlign: 'center', width: 50 , fontSize: 34, borderRadius: 35 , marginBottom: 10 }} >+</Text>  Add Service </Text>
                        </TouchableOpacity>
                     </>
                    )
                    }
                </Animated.View>
               
           </View>
          
       </View>
    )
}

export default Services
