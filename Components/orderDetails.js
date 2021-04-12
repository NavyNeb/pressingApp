import React, { useState } from "react";
import { View, ScrollView, Text, Dimensions, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const { width, height } = Dimensions.get('screen');
function OrderDetails({navigation, commande}) {
    var date = new Date()
    console.log(date);
    const loadPrices = () => {
        
        if ( Array.isArray(commande.commande.orderItem) && commande.commande.orderItem.length ) {
         return commande.commande.orderItem.map((item)=>{
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
          })
        } else {
         return (
             <View style = {{ width, height: height / 5, alignItems:'center', justifyContent: 'center' }} >
                 <BarIndicator animating interaction size = {32} />
             </View>
         )
        
        }
     }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f1f1f5', width, height }} >
            <ScrollView>
            <View style={{ width, height: height / 3.3, backgroundColor: '#fff', marginBottom: 4 }} >
                <View style={{ dipslay: 'flex', flexDirection: 'row', paddingTop: 30, paddingHorizontal: 14, height: height / 14, backgroundColor: '#ffff' }} >
                    <TouchableOpacity onPress = { () => navigation.navigate('Home') } >
                        <Feather name='arrow-left' size={28} color='dodgerblue' />
                    </TouchableOpacity>
                    <View style={{ width: width - 70 }} >
                        <Text style={{ fontSize: 18, textAlign: 'center', textAlign: 'center' }} >Order No.{date.toLocaleDateString()}</Text>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: 'gray' }} >{date.toISOString()}</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 25, width: width - 20, paddingHorizontal: 10 }} >
                    <View style={{ height: 130, width: 130, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'gray', borderBottomColor: 'blue' }} >
                        <Image style={{ height: 55, width: 55 }} source={require('../icons/document.png')} />
                    </View>
                    <View style={{ alignItems: 'center', paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Text style={{ fontSize: 14, color: 'gray', marginBottom: 9 }} >Order Status</Text>
                        <Text style={{ fontSize: 14, color: 'dodgerblue' }} >{commande.commande.payment.orderStatus}</Text>
                    </View>
                </View>
            </View>
            <View style={{ width, height: height / 5, display: 'flex', justifyContent: 'center', backgroundColor: '#fff', marginBottom: 4 }} >
                <ScrollView>
                    <TouchableOpacity>
                    <View>
                        <Text style = {{ fontSize: 18, color: 'gray', alignSelf: 'center' }} >
                            Pick Up
                        </Text>
                        <View style = {{ width: '100%', padding: 6 }} >
                            <Text style = {{ fontSize: 14, color: '#000',   }} >
                                City
                            </Text>
                            <Text style = {{ fontSize: 16, color: 'dodgerblue', fontWeight: 'bold'  }} >
                                {commande.pickAddress.city}
                            </Text>
                        </View>
                        <View style = {{ width: '100%', padding: 6 }} >
                            <Text style = {{  fontSize: 14, color: '#000', }} >
                                Quarters
                            </Text>
                            <Text style = {{ fontSize: 16, color: 'dodgerblue', fontWeight: 'bold'  }} >
                                {commande.pickAddress.quarters}
                            </Text>
                        </View>
                        <View style = {{ width: '100%', padding: 6 }} >
                            <Text style = {{  fontSize: 14, color: '#000', }} >
                                Description
                            </Text>
                            <Text style = {{ fontSize: 16, color: 'dodgerblue', fontWeight: 'bold'  }} >
                                {commande.pickAddress.desc}
                            </Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View>
                        <Text style = {{ fontSize: 18, color: 'gray', alignSelf: 'center' }} >
                            Pick Up
                        </Text>
                        <View style = {{ width: '100%', padding: 6 }} >
                            <Text style = {{ fontSize: 14, color: '#000',   }} >
                                City
                            </Text>
                            <Text style = {{ fontSize: 16, color: 'dodgerblue', fontWeight: 'bold'  }} >
                                {commande.deliveryAddress.city}
                            </Text>
                        </View>
                        <View style = {{ width: '100%', padding: 6 }} >
                            <Text style = {{  fontSize: 14, color: '#000', }} >
                                Quarters
                            </Text>
                            <Text style = {{ fontSize: 16, color: 'dodgerblue', fontWeight: 'bold'  }} >
                                {commande.deliveryAddress.quarters}
                            </Text>
                        </View>
                        <View style = {{ width: '100%', padding: 6 }} >
                            <Text style = {{  fontSize: 14, color: '#000', }} >
                                Description
                            </Text>
                            <Text style = {{ fontSize: 16, color: 'dodgerblue', fontWeight: 'bold'  }} >
                                {commande.deliveryAddress.desc}
                            </Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ width, height: height / 2.2, overflow: 'scroll' , backgroundColor: '#fff', paddingHorizontal: 8, display : 'flex', position :'relative'  }} >
                <Text style={{ fontSize: 14, color: 'gray', marginVertical: 15 }} >Cloth List</Text>
                <View>
                    <ScrollView style={{ height: height / 4.7,  }} >
                        {
                            loadPrices()
                        }
                    </ScrollView>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }} >
                    <Text style={{ fontSize: 14, color: 'gray', }} >Sub Total</Text>
                    <Text style={{ fontWeight: 'bold', color: '#000', }} >{commande.commande.payment.total}XAF</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }} >
                    <Text style={{ fontSize: 14, color: 'gray', }} >Transport</Text>
                    <Text style={{ fontWeight: 'bold', color: '#000', }} >1000XAF</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }} >
                    <Text style={{ fontSize: 14, color: 'gray', }} >Amount Paid</Text>
                    <Text style={{ fontWeight: 'bold', color: '#000', }} >{commande.commande.payment.amountGiven}XAF</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }} >
                    <Text style={{ fontSize: 14, color: 'gray', }} >Left to Pay</Text>
                    <Text style={{ fontWeight: 'bold', color: '#000', }} >{commande.commande.payment.leftOver}XAF</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
                    <Text style={{ fontSize: 14, color: 'dodgerblue', fontWeight: 'bold' }} >Paid via {}</Text>
                    <Text style={{ fontSize: 14, color: 'dodgerblue', fontWeight: 'bold' }} >{commande.commande.payment.paymentMethod}</Text>
                </View>
            </View>
             {/* <TouchableOpacity onPress = { () => navigation.navigate('Pressing') } style = {{ height: height / 12, width, backgroundColor: 'dodgerblue', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', justifyContent: 'center', }} >
                    <Text style = {{ fontSize: 18, color: '#fff' }} >Amount Payable ({commande.commande.payment.total + 1000}XAF) </Text>
            </TouchableOpacity> */}
            </ScrollView>
        </View >
    )
}

function mapStateToProps(state){
    return{
        commande: state.commande
    }
}

export default connect(mapStateToProps, undefined)(OrderDetails)