import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Feather } from "@expo/vector-icons";
import { addKids, removeKids, increase_kids, decrease_kids } from "../Action/counterKids";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const { width, height } = Dimensions.get('screen')

const TarifKids = ({name, price, id, commande, addKids, category, increase_kids, decrease_kids, removeKids, tarif}) => {

    const [quantity, setQuantity] = useState(0)
    const [see, setSee] = useState(false)
    const [totalItem, setTotalItem] = useState(0)


    return (
        <View style = {{ backgroundColor: '#fff', marginBottom: 2,}} >
                            <View style = {{ height: height / 14, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
                                <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
                                    {/* <Image style = {{height: 55, width: 55 }} source = {item.Image} /> */}
                                </View>
                                <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
                                    <Text style = {{ fontSize: 15, fontWeight: 'bold' }} >{name}</Text>
                                    <Text style = {{ fontSize: 12, fontWeight: '900' }} >{price}XAF</Text>
                                   
                                </View>
                            </View>
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingRight: 15, marginBottom: 8 }} >
                                <>
                                    {
                                        !see ? (  <TouchableOpacity onPress = { () => {
                                            setQuantity(quan => {
                                                return quan + 1
                                            })
                                            addKids(id,price,name,totalItem,quantity,category,tarif)
                                            setSee(!see)
                                            console.log("commande",commande);
                                            } } style = {{ backgroundColor: 'dodgerblue', height: height / 16, width: width / 3, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'lightgray', borderRadius: 16 }} >
                                        <Text style = {{ fontSize: 17, color: '#fff' }} >
                                            Ajouter au Panier
                                        </Text>
                                    </TouchableOpacity> ) : (
                                         <TouchableOpacity onPress = { () => {setSee(!see)
                                         removeKids(id)
                                         setQuantity( quan => {
                                            return quan = 0
                                        } )
                                         console.log("commande",commande);
                                         } } style = {{ backgroundColor: 'lightgray', height: height / 16, width: width / 3, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'dodgerblue', borderRadius: 16 }} >
                                         <Text style = {{ fontSize: 17, color: '#fff' }} >
                                             Retirer du Panier
                                         </Text>
                                     </TouchableOpacity>
                                    )
                                    }
                                </>
                                <View pointerEvents = { see ? 'auto' : 'none'} style = { see ?{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 100, } : { opacity: 0.2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 100, } } > 
                                    <TouchableOpacity  onPress = { () => setQuantity( quan => {
                                       
                                        if( quan > 0 ){
                                            decrease_kids(id)
                                            console.log("kids", commande);
                                            return quan -= 1
                                            
                                        }else {
                                            return 0
                                        }
                                    } ) } style = {[{ width: 40, height: 40, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'} ,  { counter: 0 ? {opacity: 0} : {opacity: 1} }]}   >
                                        <Feather name= 'minus' size = {16} color = 'white' />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
                                        <Text> {quantity} </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress = { () =>setQuantity(quan => {
                                         increase_kids(id)
                                         console.log("kids", commande);
                                        return quan += 1
                                    })}  style = {{ width: 40, height: 40, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
                                        <Feather name= 'plus' size = {16} color = 'white' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                           
                        </View>
    )
}

function mapStateToProps(state){
    return{
        commande: state.counter_3
    }
}

function mapDispatchToProps(dispatch){
    return{
        dispatch,
        ...bindActionCreators({
            addKids, removeKids, increase_kids, decrease_kids
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TarifKids)
