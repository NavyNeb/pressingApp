import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Dimensions, Animated, StatusBar,TextInput, FlatList } from "react-native";
import TarifComp from "./tarifComponemt";
const {width, height} = Dimensions.get('screen')

function TarifManager({route, navigation, servId}) {
    servId = route.params
    const Id = JSON.stringify(servId.servId)
    console.log(JSON.stringify(servId));

    const [tarif, setTarif] = useState([])
   


    const getTarif = () => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/tarif/?idprestataire=1&idservice=' + Id )
        .then((servResponse) => servResponse.json())
        .then((servJson)=>{
            
            servJson.map(item => {
              if ( tarif.length != 0 ) {
                      let existedItem = tarif.find( tarif => tarif.id === item.id )
                      if ( !existedItem ) {
                        return tarif.push({price: item.prix, id: item.id, name: item.article.description,})
                      }
              } else {
                setTarif(prevState => {
                    return[
                        ...prevState, 
                        {price: item.prix, id: item.id, name: item.article.description, Value: '' }
                    ]
                })
              }
        })
        
        console.log(tarif)
    })

}



    useEffect(() => {
       getTarif();
    }, [0])

    return (
        <View style = {{ width, height, backgroundColor: 'rgba( 0, 0, 0, 0.2 )', }} >
            <StatusBar backgroundColor = 'rgba( 0, 0, 0, 0.2 )' />
            <View style= {{ height: height - 30, width, backgroundColor: '#fff', borderTopEndRadius: 20, borderTopStartRadius: 20,alignItems: 'center' }} >
                <View style = {{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: "column-reverse", width: '93%', height: height / 7 }} >
                    <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '80%', }} >
                        <TouchableOpacity style ={{ backgroundColor: '#9a81d2', width: "60%", height: height / 15, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }} >
                            <Text style = {{ color: 'white', fontSize: 16.5 }} >
                                Create Tarifs
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                     data = {tarif}
                     style = {{  marginTop: 20, width, height: height / 1.2, borderRadius: 20, backgroundColor: '#f1f1f5' }}
                     contentContainerStyle = {{ paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}
                     keyExtractor = { tarif => tarif.id.toString() }
                     renderItem = {({item}) => {
                         return (
                           <TarifComp name = {item.name} price = {item.price} id = {item.id} />
                         )
                     }}
                />

            </View>
        </View>
    )
}
{/* <View style={{ marginVertical: 4, width: width - 56, borderRadius: 20, height: 105, backgroundColor: '#fff', paddingVertical: 10 }} >
<View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '90%' }} >
<Text style = {{ color: '#000', fontSize: 18, fontWeight: '800',  }} >{item.name}</Text>
<TextInput onChangeText = { (val) => setTarif_price(val) } placeholder = {item.price.toString()} style = {{ width: 106 }} />
</View>
<TouchableOpacity onPress = { () => update(item.id) } style = {{ width: 75, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: 'dodgerblue', marginLeft: 20, borderRadius: 15 }} >
    <Text style = {{ color: '#fff', fontSize: 18, fontWeight: '800',  }} >
        Save: {item.id}
    </Text>
</TouchableOpacity>
</View> */}
export default TarifManager
