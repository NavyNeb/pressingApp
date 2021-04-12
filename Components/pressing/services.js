import React, { useEffect, useState, useRef } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, FlatList, Animated, Easing, TextInput, ScrollView } from "react-native";
const { width, height } = Dimensions.get('screen')
import { BarIndicator,PulseIndicator } from "react-native-indicators";
import { Feather, Entypo } from "@expo/vector-icons";
import {Picker} from '@react-native-picker/picker';
import Articles from "./articles_list";
import { set } from 'react-native-reanimated';

function Services() {
    const anim = useState(new Animated.Value(-500))[0]
    const fade = useState(new Animated.Value(0))[0]
    const Anim = useRef(new Animated.Value(1000)).current;
    const [categoryFilter, setCategoryFilter] = useState('')
    const [searchFilter, setSearchFilter] = useState('')
    const [addArticles,setAddArticles] = useState([])
    const [addedArticles, setAddedArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [prestaData, setPrestaData] = useState();
    const [servId, setServId] = useState(0)
    const [hidden, setHidden] = useState(true)
    const [services, setServices] = useState([])
    const [ show, setShow ] = useState(false)
    const [disp, setDisp] = useState(true)
    const [nom_service, setNom_service] = useState('')
    const [caracteristique, setCaraterisque] = useState('')
    var saveArticle = []
     useEffect(() => {
          fetch('http://pressingliveapp.herokuapp.com/viewset/prestataire/' + 3)
          .then((response)=> response.json())
          .then((responseJson) => {
            getArticles()
            responseJson.service.map(item => {
              if ( services.length !== 0 ) {
                  services.map((servItem)=>{
                      if ( servItem.id != item.id ) {
                          services.push({name: item.nom_service, id: item.id})
                      }
                  })
              } else {
                setServices(prevState => {
                    return[
                        ...prevState, 
                        {name: item.nom_service, id: item.id},
                    ]
                    
                })
              }
             })
            saveArticle = addArticles
            console.log("save",saveArticle);
            setLoading(false)
          })
          .catch((error) => (console.log(error.toString())))
    }, [0]);

    const  reloadData = () => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/prestataire/' + 3)
        .then((response)=> response.json())
        .then((responseJson) => {
          setPrestaData(responseJson.service)
          setLoading(false)
        })
        .catch((error) => (console.log(error.toString())))
    }
    const ajouterService = () => {
        return (
            fetch('http://pressingliveapp.herokuapp.com/viewset/prestataire/3/',{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                      service: {
                        nom_service: nom_service,
                        caracteristique: caracteristique   
                      }
                })
            })
            .then(()=> {
                fetch('http://192.168.100.207:8000/viewset/prestataire/3/')
                .then((response)=> response.json())
                .then((responseJson) => console.log('Yeah', responseJson))
            })
            .catch((err) => alert(err.toString()))
      
        )}
 
    function loadServ(){
        setHidden(false)
        translate()
        setDisp(false)
    } 

    function close() {
        reloadData()
        setHidden(true)
        translate()
    }

    const getArticles = () => {
            fetch('http://pressingliveapp.herokuapp.com/viewset/article/')
            .then((response) => response.json())
            .then((articlesResp) => {
              articlesResp.map(articles => {
                if ( addArticles.length !== 0 ) {
                   let checkItem = addArticles.find(item => (item.id === articles.id));
                   if (!checkItem) {
                       setAddArticles( prevArticles => {
                           return [
                               ...prevArticles, { id: articles.id, name: articles.description, category: articles.categorie_article.nom_categorie, type:articles.type_article.nom_type }
                           ]
                       } )
                   }
                } else {
                    setAddArticles( prevArticles => {
                        return  [
                            ...prevArticles, { id: articles.id, name: articles.description, category: articles.categorie_article.nom_categorie, type:articles.type_article.nom_type }
                        ]
                    })
                }
              })
            })
    }

    const translate = () => {
       if (!hidden) {
          
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

    const addService = () => {
       if (show) {
        Animated.timing(Anim, {
            toValue: 1000,
            duration: 800,
            useNativeDriver: true
        }).start()
       } else {
        Animated.timing(Anim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()
       }
       setShow(!show)
    }

    const articleFilter = (text) => {
        return addArticles.filter(
            (listItem) => listItem.category.toLowerCase().includes(text.toLowerCase()) 
          );
    }

    const filterCategory = () => {
       if (categoryFilter) {
        if ( categoryFilter === 'all' ) {
            console.log( categoryFilter );
            return setAddArticles(saveArticle)
        } else {
            console.log( categoryFilter );
           return setAddArticles(addArticles.filter( item => item.category.toLowerCase() == categoryFilter.toLowerCase() ))
        }
       }
        return setAddArticles(saveArticle)
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
                { loading ? ( <View style = {{ alignItems: 'center', width }} >
                <BarIndicator  animating interaction />
            </View>) :  (<FlatList
                        data = {services}
                        numColumns = {2}
                        contentContainerStyle = {{ paddingHorizontal: 20 }}
                        keyExtractor = { services => services.id.toString() }
                        renderItem = {({item}) => {
                            return (
                                <TouchableOpacity onPress = { () => {addService(); 
                                    setServId(item.id)
                                } } style = {{ alignItems: 'center', justifyContent: 'center', height: 120, width: width / 3, backgroundColor: '#fff', borderRadius: 9, paddingTop: 8, margin: 15 }} > 
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
                <Animated.View style = {{ width, height: height, transform: [{translateY: Anim}], backgroundColor: 'rgba( 0, 0, 0, 0.5 )', position: 'absolute', bottom: 0,  }} >
                <View style = {{ height: '95%', width, backgroundColor: '#fff', alignItems: 'center', position: 'absolute', bottom: 0, borderRadius: 30,  opacity: 1, paddingTop: 30 }} >
                    <TouchableOpacity onPress = { () => addService() } style = {{ position: 'absolute', alignItmes: 'center', justifyContent: 'center', right: 20, top: 0, backgroundColor: 'red' }} >
                        <Entypo name = 'cross' color='dodgerblue' size = {38} />
                    </TouchableOpacity>
                    <View style = {{ alignItems:'center', justifyContent: 'center', width:'80%', borderBottomWidth: 1, borderColor: '#9a81d2', marginTop: 10 }} >
                        <Text style = {{ color: 'lightgray', fontSize: 16, fontWeight: 'bold' }} >
                            Service Name
                        </Text>
                        <Text style = {{ color: '#9a81d2', fontSize: 28, fontWeight: 'bold' }} >
                            Service Name
                        </Text>
                    </View>
                    <View style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'  }} >
                        <Text style = {{ color: 'lightgray', fontSize: 16, fontWeight: 'bold' }} >
                            Articles present in this service
                        </Text>
                    </View>
                    <View style = {{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', height: height / 10,  width,  }} >
                        <Text style = {{ position: 'absolute', top: 0 }} > Search articles </Text>
                        <Picker 
                             selectedValue={categoryFilter}
                             mode={'dropdown'}
                             style={{ height: 40, width: width * .34, borderWidth: 1, borderRadius: 20, marginHorizontal: 5, elevation: 2, backgroundColor: '#fff', }}
                             itemStyle={{ alignSelf: 'center', paddingVertical: 20, fontSize: 18 }}
                             onValueChange={(itemValue, itemIndex) => { 
                                 setCategoryFilter(itemValue);
                                 filterCategory()
                             }}
                        >
                            <Picker.Item label="All" value="all" />
                            <Picker.Item label="Homme" value="homme" />
                            <Picker.Item label="Femme" value="femme" />
                            <Picker.Item label="Enfant" value="enfant" />
                            <Picker.Item label="Bebe" value="bebe" />
                        </Picker>
                        <View style = {{ height: 40, width: width * .60, backgroundColor: 'green', borderRadius: 30, elevation: 2 }} >
                            <TextInput onChangeText = { (val) => articleFilter(val) } style = {{ width: '100%', height: '100%', backgroundColor: 'white', textAlign:'center' }} placeholder= 'Search articles'  />
                        </View>
                    </View>
                    <View style = {{ backgroundColor: 'lightgray', height: '65%', width, marginTop: 10, }} >
                        <FlatList
                            data = {addArticles}
                            keyExtractor={ addArticles => addArticles.id.toString() }
                            renderItem = { ({item}) =>  {
                                return (
                                    <View>
                                        <Articles id={item.id} name={item.name} category={item.category} type={item.type} servId={servId} />
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            </Animated.View>
               
           </View>
          
          
       </View>
    )
}

export default Services
