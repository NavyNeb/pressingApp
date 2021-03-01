import React, { useEffect } from 'react';
import { Flatlist, View, Text, TouchableOpacity, Dimensions, StatusBar, Image } from 'react-native';
import { connect } from "react-redux";
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native';

import { bindActionCreators } from "redux";
import { getKids, removeKids } from "../Action/counterKids";
const { width, height } = Dimensions.get('screen');

function Kids({ kidsCoths, getKids, removeKids }){
  
    function loadCloths(){
        // return kidsCoths.items.map((item, id)=>{
        //     return(
        //         <View key = {item.id} style = {{ height: height / 10, marginBottom: 2,  backgroundColor: '#fff', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight: 8 }} >
        //             <View style = {{ height: '100%', width: '15%', alignItems: 'center', justifyContent: 'center' }} >
        //                 <Image style = {{height: 55, width: 55 }} source = {item.Image} />
        //             </View>
        //             <View style = {{ width: '85%', height: '100%', display: 'flex', flexDirection: 'row', paddingHorizontal: 6, alignItems: 'center', justifyContent: 'space-between'  }} >
        //                 <Text style = {{ fontSize: 20, fontWeight: 'bold' }} >{item.name}</Text>
        //                 <Text style = {{ fontSize: 12, fontWeight: '900' }} > {item.price} </Text>
        //                 <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 90, }} > 
        //                     <TouchableOpacity onPress = { () => removeKids(id) } style = {[{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'} ,  { counter: 0 ? {opacity: 0} : {opacity: 1} }]}   >
        //                     <Feather name= 'minus' size = {16} color = 'white' />
        //                     </TouchableOpacity>
        //                     <TouchableOpacity activeOpacity = {1} style = {{ marginHorizontal: 25 }} >
        //                         <Text>{item.quantity}</Text>
        //                     </TouchableOpacity>
        //                     <TouchableOpacity onPress = { () => getKids(id) }  style = {{ width: 30, height: 30, backgroundColor: 'dodgerblue', borderRadius: 20, alignItems: 'center', justifyContent: 'center'  }} >
        //                         <Feather name= 'plus' size = {16} color = 'white' />
        //                     </TouchableOpacity>
        //                 </View>
        //             </View>
        //         </View>
        //     )
        // })
    }

        
        return(
            <View style = {{ flex: 1, width, backgroundColor: '#f1f1f5', height }} >
                 <Text style = {{  color: 'lightgray', fontSize: 16, fontWeight: 'bold', alignSelf:'center' }} >
             
            </Text>
              <ScrollView>
                {loadCloths()}
              </ScrollView>
            </View>
        )
    }
    

function mapStateToProps(state){
    return {
        kidsCoths: state.counter_3
    }
}

function mapDispatchToProps(dispatch){
    return {
       dispatch,
       ...bindActionCreators({
           getKids,
           removeKids
       }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kids)

