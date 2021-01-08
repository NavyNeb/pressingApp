import React from 'react';
import { TouchableOpacity, Text, View, Dimensions, StatusBar } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function ReviewsOrder({navigation}){
    return(
        <View style = {{ width, height, flex: 1, backgroundColor: '#f1f1f5', }} >
             <StatusBar backgroundColor="lightgray" />
             <View style = {{ backgroundColor: '#fff', paddingHorizontal: 10 }} >
                <View style = {{ dipslay: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 15,  }} >
                    <TouchableOpacity onPress = { () => navigation.navigate('Cloth') } >
                        <Feather name = 'arrow-left' size = {28} color = 'dodgerblue' />
                    </TouchableOpacity>
                    <Text style = {{ fontSize: 24, marginLeft: 20 }} >Review Order</Text>
                </View>
                <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25 }} >
                    <Text style = {{ fontSize: 18, color: '#97989f' }} >Your Clothes</Text>
                    <TouchableOpacity><Text style = {{ fontSize: 18, color: 'dodgerblue' }} >Edit</Text></TouchableOpacity>
                </View>
                <View style = {{ marginBottom: 20, }} >
                  <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, width: '100%' }} >
                         <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%' }} >
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >3</Text>
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >X</Text>
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >shirts (Man)</Text>
                       </View>
                       <Text style = {{ fontWeight: 'bold', color: '#000' }} >450XAF</Text>
                    </View>
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, width: '100%' }} >
                         <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%' }} >
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >3</Text>
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >X</Text>
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >shirts (Man)</Text>
                       </View>
                       <Text style = {{ fontWeight: 'bold', color: '#000' }} >450XAF</Text>
                    </View>
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, width: '100%' }} >
                         <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%' }} >
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >3</Text>
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >X</Text>
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >shirts (Man)</Text>
                       </View>
                       <Text style = {{ fontWeight: 'bold', color: '#000' }} >450XAF</Text>
                    </View>
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, width: '100%' }} >
                         <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%' }} >
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >3</Text>
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >X</Text>
                           <Text style = {{ fontWeight: 'bold', color: '#000' }} >shirts (Man)</Text>
                       </View>
                       <Text style = {{ fontWeight: 'bold', color: '#000' }} >450XAF</Text>
                    </View>
                </View>
                <TouchableOpacity onPress = { () => navigation.navigate('Cloth') } ><Text style = {{ fontSize: 18, color: 'dodgerblue' }} >Add more</Text></TouchableOpacity>
             </View>

             <Text>Hello Review</Text>

             <View style = {{ height: height / 3.5, width, backgroundColor: '#ffff', marginTop: 20, bottom: 0, position: 'absolute' }} >
                <View style = {{ paddingHorizontal: 10 }} >
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderBottomWidth: 2, borderColor: '#f1f1f5' }} >
                        <Text style = {{ fontWeight: 'bold', color: '#97989f', fontSize: 17 }} >Sub Total</Text>
                        <Text style = {{ fontWeight: 'bold', color: '#000', fontSize: 17 }} >1800XAF</Text>
                    </View>
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderBottomWidth: 2, borderColor: '#f1f1f5', marginBottom: 10}} >
                        <Text style = {{ fontWeight: 'bold', color: '#97989f', fontSize: 17 }} >Transport</Text>
                        <Text style = {{ fontWeight: 'bold', color: '#000', fontSize: 17 }} >1000XAF</Text>
                    </View>
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderBottomWidth: 2, borderColor: 'dodgerblue'}} >
                        <Text style = {{ fontWeight: 'bold', color: 'dodgerblue', fontSize: 17 }} >Payable amount</Text>
                        <Text style = {{ fontWeight: 'bold', color: 'dodgerblue', fontSize: 17 }} >2800XAF</Text>
                    </View>
                </View>
                <TouchableOpacity onPress = { () => navigation.navigate('SelectAddress') } style = {{ height: height / 12, width, backgroundColor: 'dodgerblue', bottom: 0, position: 'absolute', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }} >
                    <Text style = {{ fontSize: 18, color: '#fff' }} >Confirmed Order <Entypo name = 'chevron-thin-right' color = '#fff' size = {14} /> </Text>
                </TouchableOpacity>
             </View>
           
        </View>
    )
}