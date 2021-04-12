import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, StatusBar, Image, FlatList } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons'
const { width, height } = Dimensions.get('screen');
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { addWomen, removeWomen, increase_women, decrease_women } from '../Action/clothWomenAction'
import { WaveIndicator } from "react-native-indicators"
import CounterMen from '../Reducers/CounterMen';
import TarifWomen from "./tarifWomen";

function Women({  servId, prestaId, }){
    
    
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
                    if( item.article.categorie_article == 2 ){
                        if ( local.length != 0 ) {
                            let existedTarif = local.find( tarif => tarif.id == item.id )
                            if ( existedTarif ) {
                                return false
                            } else {
                                return local.push({name: item.article.description, id: counter, price: item.prix, category: 'Femme', quantity: 0, totalItem: 0, tarif: item.id  })
                            }
                        } else {
                        setLocal(prevState => {
                            
                            console.log("prevState",prevState); 
                            
                            return[
                                ...prevState, 
                                {name: item.article.description, id: counter, price: item.prix, category: 'Femme', quantity: 0, totalItem: 0, tarif: item.id  },
                            ]
                            
                        })
                        }
                    }
                counter += 1
                })
                setLoading(false)
        })
    }, [0])

    console.log('presta',prestaId.value);
    console.log('serv',servId.value);
    
    return(
            <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5', height, alignItems: 'center', justifyContent: 'center' }} >
            {
                    loading ? ( <WaveIndicator size = {60} animating interaction /> ) : local.length !== 0 ? ( 
                     <FlatList 
                        data = {local}
                        keyExtractor = { local => local.id.toString() }
                        renderItem = { ({item}) => (
                            <View>
                                <TarifWomen name={item.name} price={item.price} totalItem={item.totalItem} id={item.id} category={item.category} tarif = {item.tarif} />
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
    return{
        prestaId: state.getId,
        servId: state.servId,
        counters: state.counter_2
    }
}

function mapDispatchToProps(dispatch){
   return {
       dispatch,
       ...bindActionCreators({
        addWomen, removeWomen, increase_women, decrease_women
       }, dispatch)
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Women)