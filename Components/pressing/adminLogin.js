import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native'

const { width, height } = Dimensions.get('screen')

function DashboardAdmin({navigation}){
    const [ options, setOptions ] = useState([
        { title: 'Commands', desc: 'Manage all commands affected to you', id: 1, navigation: 'ordertab' },
        { title: 'Sevices', desc: 'Manage your services at ease', id: 2, navigation: 'services' },
        { title: 'Tarification', desc: 'Manage yout tarification', id: 3, navigation: 'tarif' },
    ])
    return (
        <View style = {{ flex: 1, backgroundColor: '#f1f1f5', paddingTop: 30 }} >
        <View style = {{ height: 50, backgroundColor: '#fff', justifyContent:'center', elevation: 2, borderBottomEndRadius: 35, borderBottomStartRadius: 35}} >
            <Text style = {{ textAlign: 'center', fontSize: 24, color: '#9a81d2' }} >
                Pressing Name
            </Text>
        </View>
       
        <View style = {{ backgroundColor: '#fff', flex: 1 , marginTop: 10, width , alignSelf: 'center', borderRadius: 35, elevation: 2, alignItems: 'center', paddingTop: 20 }} >
            <Text style = {{ color: '#9a81d2', fontSize: 17, marginBottom: 10 }} > Dashboard Panel </Text>
             <View style = {{ height: height / 2, width: width - 20, backgroundColor: '#f1f1f5', borderRadius: 15, justifyContent : 'space-between', alignItems: 'center', flexDirection: 'row', paddingRight: 10 }} >
             <FlatList
                        data = {options}
                        numColumns = {2}
                        contentContainerStyle = {{ paddingHorizontal: 10 }}
                        keyExtractor = { options => options.id.toString() }
                        renderItem = {({item}) => {
                            return (
                                <TouchableOpacity onPress = { () => navigation.navigate(item.navigation) } style = {{ alignItems: 'center', justifyContent: 'center', height: 140, width: width / 2.7, backgroundColor: '#fff', borderRadius: 9, paddingTop: 8, margin: 15 }} > 
                                    <Image style = {{height: 55, width: 55 }} source = {require('../../icons/pressing/001-washing-machine.png')} />
                                    <Text style = {{ display: 'flex', fontSize: 20, fontWeight: 'bold', marginTop: 20 }} >{item.title}</Text>
                                    <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12, textAlign: 'center', paddingHorizontal: 8, }} > {item.desc} </Text>
                                </TouchableOpacity>
                            )
                        }}
                   />
             </View>
             <TouchableOpacity style = {{ width: width-30, backgroundColor: '#9a81d2', height:65, marginTop: 50, borderRadius: 24, justifyContent: 'center', alignItems: 'center' }} >
                 <Text style = {{ color: '#fff', fontSize: 24, marginBottom: 10 }} > <Text style = {{  color: 'white', textAlign: 'center', width: 50 , fontSize: 34, borderRadius: 35 , marginBottom: 10 }} >+</Text>  Add Service </Text>
             </TouchableOpacity>
             
            
        </View>
       
    </View>
    )
}

export default DashboardAdmin
