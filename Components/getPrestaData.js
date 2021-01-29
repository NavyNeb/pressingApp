import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Text, View, Dimensions, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { sendPrestaId } from "../Action/getPrestaId";
import { fetchPresta, fetchError, PrestaSuccess } from "../Action/prestataire";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } =Dimensions.get('screen')


function GetPrestaData({ prestaId, sendPrestaId, prestaDat }){
    const [data, setData] = useState(undefined);
    // function getPrestataire(){
       
    //     return(dispatch) => {
    //         dispatch(sendPrestaId())
    //         console.log('sent id')
    //         dispatch(PrestaSuccess())
    //         console.log('verified success')
    //         axios.get('http://192.168.100.207:8000/viewset/prestataire/' + prestaId.value)
    //             .then((response)=>{
    //                 console.log(response.data)
    //                 dispatch(fetchPresta(prestaData))
    //             })
    //             .catch((error) => {
    //                 const errorMsg = error.message
    //                 dispatch(fetchError(errorMsg))
    //             })
    //         }      
    //     }
    useEffect(() => {
        axios.get('http://192.168.100.207:8000/viewset/prestataire/' + prestaId.value)
                .then((response)=>{
                    setData(response.data)
                })
                .catch((error) => (console.log(error.toString())))

        
    }, [0])
    
// console.log("data", data)
     
        return (
            
              <View style = {{ flex: 1 }} >
                { console.log(data.user.username) }
              </View>
            
            // prestaDat.loading ? ( <ActivityIndicator size = 'large' animating color="dodgerblue" /> ) : 
            //         prestaDat.error   ? (<Text>{prestaDat.error}</Text>) : (
            //             prestaDat.map((item)=>{
            //                 return(
            //                     <Text>
            //                         hello
            //                     </Text>
            //                 )
            //             })
                        
            //         )
        )
}

function mapStateToProps(state){
    return {
        prestaId: state.getId,
        prestaDat: state.reducerPresta
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({
            sendPrestaId
        }, dispatch )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetPrestaData)