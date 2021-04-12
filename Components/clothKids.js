import React, { useEffect, useState } from 'react';
import { Flatlist, View, Text, TouchableOpacity, Dimensions, StatusBar, Image, FlatList } from 'react-native';
import { connect } from "react-redux";
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native';
import { bindActionCreators } from "redux";
import { WaveIndicator } from "react-native-indicators"
const { width, height } = Dimensions.get('screen');
import TarifKids from "./tarifKids";

function Kids({ prestaId, servId }){
        
    
    const [data, setData] = useState([]);
    const [see, setSee] = useState(true)
    const [local, setLocal] = useState([]);
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/tarif/?idprestataire=' + prestaId.value + '&idservice=' + servId.value)
        .then((response)=> response.json())
        .then((articleJson)=> {
            console.log('response', articleJson );
                let counter = 0
            articleJson.map(item => {
                console.log('item', item);
                if( item.article.categorie_article == 6 ){
                    if ( local.length != 0 ) {
                        let existedTarif = local.find( tarif => tarif.id == item.id )
                        if ( existedTarif ) {
                            return false
                          } else {
                              return local.push({name: item.article.description, id: counter, price: item.prix, category: 'Enfant', quantity: 0, totalItem: 0, tarif: item.id  })
                          }
                    } else {
                      setLocal(prevState => {
                        
                          console.log("prevState",prevState); 
                          
                          return[
                              ...prevState, 
                              {name: item.article.description, id: counter, price: item.prix, category: 'Enfant', quantity: 0, totalItem: 0, tarif: item.id  },
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
                                <TarifKids name={item.name} price={item.price} totalItem={item.totalItem} id={item.id} category={item.category} tarif = {item.tarif} />
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
        kidsCoths: state.counter_3,
        prestaId: state.getId,
        servId: state.servId,
    }
}


export default connect(mapStateToProps, undefined)(Kids)

