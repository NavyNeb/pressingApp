import React, { useState, useEffect } from 'react';
import { Flatlist, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import { connect } from "react-redux";
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { ADD_TO_MEN, REMOVE_FROM_MEN } from "../Store/types";
import { bindActionCreators } from "redux";
import { addMen, removeMen } from "../Action/counterMen";
import { ScrollView } from 'react-native';
const { width, height } = Dimensions.get('screen');

var articles


 function Men({ counters, increaseCounter, decreaseCounter, servId, prestaId } ){
    
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/tarification/?idPrestataire=' + prestaId.value + '&idService=' + servId.value)
        .then((response)=> response.json())
        .then((articleJson)=> {
            setData(articleJson)
            console.log('response', articleJson );
            articles = data.map(item => {
                return{
                    items: [
                        { name: item.article.description, price: item.article.prix, quantity: 0, totalItem: 0, id: item.id },
                       
                    ], 
                    total: 0,
                    addedItem: []
                }
            })
            setLoading(false)
        })
    }, [0])

    console.log('presta',prestaId.value);
    console.log('serv',servId.value);
    // function list_2() {
    //     return data.map((item, i) => {
    //             return (
    //                 <View key = {i} style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
    //                 <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
    //                     <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/002-t-shirt.png')} />
    //                 </View>
    //                 <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
    //                     <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >T-shirt</Text>
    //                     <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
    //                     <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90, }} > 
    //                         <TouchableOpacity onPress = { () => {decreaseCounter(i)} } style = {[{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'} ,  { counter: 0 ? {opacity: 0} : {opacity: 1} }]}   >
    //                            <Feather name= 'minus' size = {16} color = 'white' />
    //                         </TouchableOpacity>
    //                         <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
    //                             <Text> {value} </Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity onPress = { () => {increaseCounter(i)} }  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
    //                             <Feather name= 'plus' size = {16} color = 'white' />
    //                         </TouchableOpacity>
    //                     </View>
    //                 </View>
    //             </View>
    //             )
    //         })
    //     }
    

    function list() {
        return counters.map((value, i) => {
                return (
                    <View key = {i} style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                    <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image style = {{height: 55, width: 55 }} source = {require('../icons/pressing/002-t-shirt.png')} />
                    </View>
                    <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                        <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >T-shirt</Text>
                        <Text style = {{ fontSize: 12, fontWeight: '900' }} >450XAF</Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90, }} > 
                            <TouchableOpacity onPress = { () => {decreaseCounter(i)} } style = {[{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'} ,  { counter: 0 ? {opacity: 0} : {opacity: 1} }]}   >
                               <Feather name= 'minus' size = {16} color = 'white' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                <Text> {value} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => {increaseCounter(i)} }  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                <Feather name= 'plus' size = {16} color = 'white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                )
            })
        }

        return(
            <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5', height }} >
                 <Text style = {{  color: 'lightgray', fontSize: 16, fontWeight: 'bold', alignSelf:'center' }} >
               Total items selected: {counters.reduce((acc, value) => ( acc + value ))}
            </Text>
              <ScrollView>
                {
                    list()
                }
              </ScrollView>
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
           addMen, removeMen
       }, dispatch )
    }
}

export function CounterMen(state = articles, action){
    if(action.type === ADD_TO_MEN){
        let addedItem = state.items.find(item=> item.id === action.payload)
        //check if the action id exists in the addedItems
       let existed_item = state.addedItems.find(item=> action.payload === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1
          addedItem.totalItem = addedItem.quantity * addedItem.price;
        
           return{
              ...state,
               total: state.total + addedItem.price
                }
      }
       else{
          addedItem.quantity = 1;
          addedItem.totalItem = addedItem.quantity * addedItem.price;
          //calculating the total
          let newTotal = state.total + addedItem.price
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  else if(action.type === REMOVE_FROM_MEN){
    let addedItem = state.items.find(item=> item.id === action.payload)
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item=> action.payload === item.id)
    if (existed_item) {
       if ( addedItem.quantity > 0 ) {
           addedItem.quantity -= 1;
           addedItem.totalItem -= addedItem.price;
           return {
               ...state,
               total: state.total - addedItem.price
           }
           
       } else if (addedItem.quantity === 0 ) {
           
           return {
               addedItems: [ state.addedItems.filter(item => item.id != action.payload) ],
               ...state
           }
       }
    } else {
        return state
    }
  }

  else {
      return state
  }

  }



export default connect(mapStateToProps,mapDispatchToProps)(Men)