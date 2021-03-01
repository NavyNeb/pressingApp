import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import { connect } from "react-redux";
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { ADD_TO_MEN, REMOVE_FROM_MEN } from "../Store/types";
import { bindActionCreators } from "redux";
import { addMen, removeMen, increase_men, decrease_men } from "../Action/counterMen"
import { ScrollView } from 'react-native';
import TarifList from "./tarifList";
const { width, height } = Dimensions.get('screen');

var articles


function Men({ counters, increase_men, decrease_men, servId, prestaId } ){
    
    
    const [data, setData] = useState([]);
    const [see, setSee] = useState(true)
    const [local, setLocal] = useState([]);
    const [loading, setLoading] = useState(true)
    // const renderList = () => {
    //    return local.map((item, index)=>{
    //        function increase(index){
         
    //             if ( item.id === index ) {
    //                 return item.quantity += 1
    //             } else {
    //                 return false
    //             }
                
    //     }
    //         function decrease(index){
    //             if (item.quantity > 0 ) {
    //                 return item.quantity -= 1
    //             } else {
    //                 return 0
    //             }
    //         }
    //         return (
                       
    //             )
    //     })
    // }
    useEffect(() => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/tarification/?idPrestataire=' + prestaId.value + '&idService=' + servId.value)
        .then((response)=> response.json())
        .then((articleJson)=> {
            console.log('response', articleJson );
            // articleJson.map(item => {
                let counter = 0
            //     counter += 1
            //    setLocal(prevState => {
            //        return[
            //            ...prevState, 
            //            {name: item.article.description, id: counter, price: item.prix, category: 'Kids', quantity: 0, totalItem: 0, see: see  },
            //        ]
            //    })
            // })
            articleJson.map(item => {
                console.log('item', item);
              if ( local.length > 0 ) {
                  local.map((servItem)=>{
                      if ( servItem.id != item.id ) {
                          local.push({name: item.article.description, id: counter, price: item.prix, category: 'Kids', quantity: 0, totalItem: 0, see: see  })
                      }
                  })
              } else {
                setLocal(prevState => {
                  
                    console.log("prevState",prevState); 
                    
                    return[
                        ...prevState, 
                        {name: item.article.description, id: counter, price: item.prix, category: 'Kids', quantity: 0, totalItem: 0, see: see  },
                    ]
                    
                })
              }
              counter += 1
             })
            setLoading(false)
        })
    }, [0])

    console.log('presta',prestaId.value);
    console.log('serv',servId.value);
    // function list_2() {
    //     return data.map((item, i) => {
    //          
    //         })
    //     }
    

   

        return(
            <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5', height }} >
                 <Text style = {{  color: 'lightgray', fontSize: 16, fontWeight: 'bold', alignSelf:'center' }} >
            </Text>
            <FlatList 
                data = {local}
                keyExtractor = { local => local.id.toString() }
                renderItem = { ({item}) => (
                    <View>
                        <TarifList name={item.name} price={item.price} totalItem={item.totalItem} id={item.id}  />
                    </View>
                )}
            />
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