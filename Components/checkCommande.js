import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'


const {width, height} = Dimensions.get('screen')

const CheckCommande = () => {
    const [dataFacture, setDataFacture] = useState([])
    const [datatarif, setDataTarif] = useState([])
    const [dataArticle, setDataArticle] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/facture/')
        .then((response) => response.json())
        .then((respfac)=> {
            setDataFacture(respfac)
            fetch('http://192.168.100.207:8000/viewset/order/2')
            .then((response) => response.json())
        .then((resporder)=> {
            setDataTarif(resporder)
            resporder.orderitem.map(item => {
                fetch('http://192.168.100.207:8000/viewset/tarif/'+ item.tarification.id.toString())
                .then((response)=>response.json())
                .then((respTarif) => {
                    setData(prev => {
                        return [ ...prev, respTarif ]
                    })
                })
            })
        })
        })
    }, [0])
    return (
        <View>
            <Text>Hello</Text>
            <View style = {{ height: 230, width }} >
                <FlatList 
                    data={dataFacture}
                    keyExtractor = { dataFacture => dataFacture.id.toString() }
                    renderItem={ ({item}) => {
                        if ( item.commande === 3 ) {
                            return (
                                <Text>
                                    {item.total}
                                </Text>
                            )
                        }
                    } }
                />
            </View>
        </View>
    )
}

export default CheckCommande

const styles = StyleSheet.create({})
