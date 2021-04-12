import React, { useState } from 'react'
import { View, TouchableOpacity, Text, ScrollView, Dimensions, FlatList } from "react-native";

const { width, height } = Dimensions.get('screen')

function ClientData() {
    const [items, setItems] = useState([
        {
            key: '1', item: "jecket", qty: '3', amount: 200
        },
        {
            key: '2', item: "jecket", qty: '3', amount: 200
        },
        {
            key: '3', item: "jecket", qty: '3', amount: 200
        },
        {
            key: '4', item: "jecket", qty: '3', amount: 200
        },
    ])
    const [activeItems, setActiveItems] = useState(true)
    const [activeInfo,setActiveInfo] = useState(false)
    return (
        <View style = {{ flex: 1, paddingTop: 20, }} >
            <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, paddingHorizontal: 30 }} >
                <TouchableOpacity onPress = { () =>{ setActiveInfo(false); setActiveItems(true)} } style = { activeItems ? { borderBottomWidth: 2, borderColor: 'dodgerblue', borderBottomEndRadius: 5, borderBottomStartRadius: 5  } : { backgroundColor: 'transparent' } } >
                    <Text style = { activeItems ? { fontSize: 22, fontWeight: 'bold', color: 'dodgerblue' } : { fontSize: 22, fontWeight: 'bold', color: 'gray' } } >
                        Order Items
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () =>{ setActiveInfo(true); setActiveItems(false)} } style = { activeInfo ? { borderBottomWidth: 2, borderColor: 'dodgerblue', borderBottomEndRadius: 5, borderBottomStartRadius: 5  } : { backgroundColor: 'transparent' } } >
                    <Text style = { activeInfo ? { fontSize: 22, fontWeight: 'bold', color: 'dodgerblue' } : { fontSize: 22, fontWeight: 'bold', color: 'gray' } } >
                        Order Info
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    activeItems ? 
                    (
                        <>
                            <View style = {{ width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#d4d4d4', marginVertical: 2, height: 50, paddingHorizontal: 10  }} >
                                <Text>
                                    Items
                                </Text>
                                <View style = {{ width: width / 2.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                    <Text>Qtty</Text>
                                    <Text>Amount</Text>
                                </View>
                            </View>
                            <FlatList
                                    data = {items}
                                    style = {{ backgroundColor: '#d4d4d4' }}
                                    keyExtractor = {items.key}
                                    renderItem = { ({item}) => (
                                        <View style = {{ width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#fff', marginBottom: 2, height: 50, paddingHorizontal: 10  }} >
                                            <Text>
                                                {item.item}
                                            </Text>
                                            <View style = {{ width: width / 2.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
                                                <Text>{item.qty}</Text>
                                                <Text>{item.amount} XAF</Text>
                                            </View>
                                        </View>
                                    )}
                            />
                        </>
                    ) : activeInfo ? 
                    (<>
                        <View style = {{ width: '100%', backgroundColor: '#fff', padding: 20, marginVertical: 10, borderBottomRadius: 20 }} >
                            <View style = {{ marginBottom: 20, width: '100%' }} >
                                <Text style = {{ color: 'dodgerblue', fontSize: 20, fontWeight: 'bold' }} >
                                    Phone Number
                                </Text>
                                <Text style = {{ color: 'lightgray', fontSize: 17, fontWeight: 'bold' }} >
                                    +237 682822663
                                </Text>
                            </View>
                            <View style = {{ marginBottom: 20, width: '100%' }} >
                                <Text style = {{ color: 'dodgerblue', fontSize: 20, fontWeight: 'bold' }} >
                                    Email Address
                                </Text>
                                <Text style = {{ color: 'lightgray', fontSize: 17, fontWeight: 'bold' }} >
                                    samsmith@gmail.com
                                </Text>
                            </View>
                            <View style = {{ marginBottom: 20, width: '100%' }} >
                                <Text style = {{ color: 'dodgerblue', fontSize: 20, fontWeight: 'bold' }} >
                                    Pick Up Address
                                </Text>
                                <Text style = {{ color: 'lightgray', fontSize: 17, fontWeight: 'bold' }} >
                                    
                                </Text>
                            </View>
                            <View style = {{ marginBottom: 20, width: '100%' }} >
                                <Text style = {{ color: 'dodgerblue', fontSize: 20, fontWeight: 'bold' }} >
                                Delivery  Address
                                </Text>
                                <Text style = {{ color: 'lightgray', fontSize: 17, fontWeight: 'bold' }} >
                                    +237 682822663
                                </Text>
                            </View>
                        </View>
                    </> ) : ( <Text>
                        Nothing to show here 
                    </Text> )
                }
                
               
            </View>
        </View>
    )
}

export default ClientData
