import React from 'react';
import { TouchableOpacity, Text, View, Dimensions, StatusBar, ScrollView } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { BarIndicator } from 'react-native-indicators'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { orderActions } from "../Action/orderAction";


const { width, height } = Dimensions.get('screen');

function ReviewsOrder({navigation, commande}){
   
    const loadPrices = () => {
       if ( Array.isArray(commande.commande.orderItem) && commande.commande.orderItem.length ) {
        return commande.commande.orderItem.map((item)=>{
            if (item.quantity != 0) {
                return (
                    <TouchableOpacity key = {item.id} activeOpacity = {1} style = {{ paddingVertical: 2 }} > 
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }} >
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Text style = {{ fontWeight: 'bold', color: '#000', marginRight: 14, fontSize: 14 }} >{item.quantity}</Text>
                                <Text style={{ fontWeight: 'bold', marginRight: 6, color: '#000', fontSize: 14 }} >X</Text>
                                <Text style = {{ fontWeight: 'bold',width: width / 1.95, color: '#000', backgroundColor: 'magenta', fontSize: 14 }} >{item.name}({item.category})</Text>
                            </View>
                            <Text style = {{ fontWeight: 'bold', color: '#000', fontSize: 14, marginLeft: 5 }} >{item.price}XAF</Text>
                            <Text style = {{ fontWeight: 'bold', color: '#000', fontSize: 14, marginHorizontal: 5 }} >{item.totalItem}XAF</Text>
                        </View>
                    </TouchableOpacity>
                   )
            }
         })
       } else {
        return (
            <View style = {{ width, height: height / 5, alignItems:'center', justifyContent: 'center' }} >
                <BarIndicator animating interaction size = {32} />
            </View>
        )
       
       }
    }

    console.log(commande);
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
                    <ScrollView  style = {{ height: height / 4.6, }} >
                       {loadPrices()}
                    </ScrollView> 
                </View>
                <TouchableOpacity onPress = { () => navigation.navigate('Cloth') } ><Text style = {{ fontSize: 18, color: 'dodgerblue' }} >Add more</Text></TouchableOpacity>
            </View>

             

            <View style = {{ height: height / 3.5, width, backgroundColor: '#ffff', marginTop: 20, bottom: 0, position: 'absolute' }} >
                <View style = {{ paddingHorizontal: 10 }} >
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderBottomWidth: 1, borderColor: '#f1f1f5' }} >
                        <Text style = {{ fontWeight: 'bold', color: '#97989f', fontSize: 17 }} >Sub Total</Text>
                        <Text style = {{ fontWeight: 'bold', color: '#000', fontSize: 17 }} >{commande.commande.payment.total } XAF</Text>
                    </View>
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderBottomWidth: 1, borderColor: '#f1f1f5', marginBottom: 10}} >
                        <Text style = {{ fontWeight: 'bold', color: '#97989f', fontSize: 17 }} >Transport</Text>
                        <Text style = {{ fontWeight: 'bold', color: '#000', fontSize: 17 }} > { commande.commande.payment.total !== 0 ? 1000 : 0 } XAF</Text>
                    </View>
                    <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderBottomWidth: 1, borderColor: 'dodgerblue'}} >
                        <Text style = {{ fontWeight: 'bold', color: 'dodgerblue', fontSize: 17 }} >Payable amount</Text>
                        <Text style = {{ fontWeight: 'bold', color: 'dodgerblue', fontSize: 17 }} >{ commande.commande.payment.total !== 0 ?  commande.commande.payment.total + 1000 : 0 }XAF</Text>
                    </View>
                </View>
                <View style= { commande.commande.payment.total !== 0 ? { bottom: 0, position: 'absolute', } : { bottom: 0, position: 'absolute', opacity: 0.3 } } pointerEvents = { commande.commande.payment.total !== 0 ? 'auto' : 'none' } >
                    <TouchableOpacity  onPress = { () => navigation.navigate('PickDelivery') } style = {{ height: height / 12, width, backgroundColor: 'dodgerblue',alignItems: 'center', justifyContent: 'center', borderRadius: 20 }} >
                        <Text style = {{ fontSize: 18, color: '#fff' }} >Confirmed Order <Entypo name = 'chevron-thin-right' color = '#fff' size = {14} /> </Text>
                    </TouchableOpacity>
                </View>
             </View>
           
        </View>
    )
}

function mapStateToProps(state){
    return {
        commande: state.commande,
    }
}

function mapDispatchToProps(dispatch){
    return {
       dispatch,
       ...bindActionCreators({
           orderActions
       }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsOrder)