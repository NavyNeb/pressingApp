import React, { useState, useEffect } from 'react';
import { Flatlist, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import { connect } from "react-redux";
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native';
import { State } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen');

 function Men({ counters, increaseCounter, decreaseCounter, servId, prestaId } ){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(servId);
    useEffect(() => {
        fetch('http://192.168.100.207:8000/viewset/tarification/?idprestataire=' + prestaId + '&idservice=' + servId)
        .then((response)=> response.json())
        .then((responseJson)=> {
            setData(responseJson)
            console.log('response', data);
            setLoading(false)
        })
    }, [0])

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
        increaseCounter: ( index ) => dispatch({ type: 'INCREMENT_MEN', payload: { index: index } }) ,
        decreaseCounter: ( index ) => dispatch({ type: 'DECREMENT_MEN', payload: { index: index } }) 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Men)