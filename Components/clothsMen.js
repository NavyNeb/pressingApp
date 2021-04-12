import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import { connect } from "react-redux";
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { ADD_TO_MEN, REMOVE_FROM_MEN } from "../Store/types";
import { bindActionCreators } from "redux";
import { addMen, removeMen, increase_men, decrease_men } from "../Action/counterMen"
import { ScrollView } from 'react-native';
import { WaveIndicator } from "react-native-indicators"
import TarifList from "./tarifList";
const { width, height } = Dimensions.get('screen');




function Men({ counters, increase_men, decrease_men, servId, prestaId, } ){
    
    
    const [data, setData] = useState([]);
    const [see, setSee] = useState(true)
    const [local, setLocal] = useState([]);
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
        setLoading(true)
        fetch('http://pressingliveapp.herokuapp.com/viewset/tarif/?idprestataire=' + prestaId.value + '&idservice=' + servId.value)
        .then((response)=> response.json())
        .then((articleJson)=> {
            console.log('response', articleJson );
                let counter = 0
            articleJson.map(item => {
                console.log('item', item);
                if( item.article.categorie_article == 1 ){
                    if ( local.length != 0 ) {
                        let existedTarif = local.find( tarif => tarif.id == item.id )
                        if ( existedTarif ) {
                            return false
                          } else {
                              return local.push({name: item.article.description, id: counter, price: item.prix, category: 'Homme', quantity: 0, totalItem: 0, tarif: item.id  })
                          }
                    } else {
                      setLocal(prevState => {
                        
                          console.log("prevState",prevState); 
                          
                          return[
                              ...prevState, 
                              {name: item.article.description, id: counter, price: item.prix, category: 'Homme', quantity: 0, totalItem: 0, tarif: item.id  },
                          ]
                          
                      })
                    }
                }
              counter += 1
             })
            setLoading(false)
        })
    }, [0])

    
    return(
            <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5', height, alignItems: 'center', justifyContent: 'center' }} >
                {
                    loading ? ( <WaveIndicator size = {60} animating interaction /> ) : local.length !== 0 ? ( 
                     <FlatList 
                        data = {local}
                        keyExtractor = { local => local.id.toString() }
                        renderItem = { ({item}) => (
                            <View>
                                <TarifList name={item.name} price={item.price} totalItem={item.totalItem} id={item.id} category={item.category} tarif = {item.tarif} />
                            </View>
                        )}
                    />
                     ) : ( <Text>
                         No item here 
                     </Text> )
                }
           
            </View>
        )
    }


function mapStateToProps(state){
    return {
        prestaId: state.getId,
        servId: state.servId,
        counters: state.counter_1

    }
}

function mapDispatchToProps(dispatch){
    return {
       dispatch,
       ...bindActionCreators({
           addMen, removeMen, increase_men, decrease_men
       }, dispatch )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Men)