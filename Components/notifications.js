import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity, Dimensions , FlatList, StatusBar, Image } from "react-native";
import { connect } from 'react-redux'

const { width, height } = Dimensions.get('screen')

function Notifications({navigation, commande}){
    const [clientCommande, setClientCommande] = useState([])
    useEffect(() => {
       fetch('http://pressingliveapp.herokuapp.com/viewset/order/')
       .then((response) => response.json())
       .then((commandeJson)=> {
           setClientCommande(commandeJson)
    //        commandeJson.map(item => {
    //         if (item.client.id === commande.client) {
    //             if( clientCommande.length != 0 ){
    //                 clientCommande.map(clientItem => {
    //                     if ( clientItem.id != item.id ) {
    //                     setClientCommande( prevComm => {
    //                         return [
    //                             ...prevComm, { id: item.id, client: item.client, date: item.date_commande, payment: item.mode_paiement, livraison: item.adresse_livraison, ramassage: item.addresse_ramassage }
    //                         ]
    //                     } )
    //                     }
    //                 })
    //             } else {
    //                 clientCommande.push( 
    //                         { id: item.id, client: item.client, date: item.date_commande, payment: item.mode_paiement, livraison: item.adresse_livraison, ramassage: item.addresse_ramassage }
    // )
    //             }
    //         }
    //         console.log(clientCommande);
    //        })
        })
    }, [0])
    console.log(commande.client);
    return (
        <View style = {{  width, height,backgroundColor: '#f1f1f5' }} >
          <View style = {{ height: 230, width }} >
          <FlatList
                data ={clientCommande}
                style = {{ backgroundColor: 'green' }}
                keyExtractor = { clientCommande => clientCommande.id.toString() }
                renderItem = { ({item}) => {
                   if (item.id === commande.client) {
                    return (
                        <TouchableOpacity style = {{ width: '90%', height: 75, backgroundColor: '#fff', marginVertical: 5, paddingHorizontal: 10, borderRadius: 6, marginBottom: 5, marginTop: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'  }} >
                        <View style = {{ height: 65, width: 65, alignItems: 'center', justifyContent: 'center', marginVertical: 5, marginRight: 10, borderRadius: 35, borderWidth: 2, borderTopColor: 'dodgerblue', borderColor: '#e1e2ed' }}> 
                            <Image style = {{height: 25, width: 25, }} source = {require('../icons/pressing/order_history.png')} />
                        </View>
                        <View style = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around', paddingHorizontal: 6 }} >
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%',  }} >
                                <Text style = {{ display: 'flex', fontSize: 16, fontWeight: 'bold' }} >Order No: 22029275</Text>
                                <Text>8655XAF</Text>
                            </View>
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%' , }} >
                                <Text style = {{ display: 'flex', color: 'dodgerblue', fontSize: 12 }} >Order Confirmed</Text>
                                <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} > {item.date_commande} </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    )
                   }
                } }
            />
          </View>
        </View>
    )
}

function mapStateToProps(state){
    return {
      commande: state.commande,
    }
}
export default connect(mapStateToProps, undefined)(Notifications)
