import React,{ useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image, StatusBar, ScrollView, ActivityIndicator } from 'react-native';
import { Entypo, Ionicons, Feather } from '@expo/vector-icons';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getPrestataire from "../Action/prestataire";
import { getServiceId } from "../Action/getServiceId";
import { WaveIndicator } from "react-native-indicators";

const { width, height } = Dimensions.get('screen')
function Home( {navigation, prestaId, getServiceId, commande} ){
    const [prestaData, setPrestaData] = useState([])
    const [loading, setLoading] = useState(true)
    const [serviceId, setSerciveId] = useState(0)
    useEffect(() => {
          fetch('http://pressingliveapp.herokuapp.com/viewset/prestataire/' + prestaId.value)
          .then((response)=> response.json())
          .then((responseJson) => {
            setPrestaData(responseJson)
            console.log(responseJson);
            setLoading(false)
          } )
          .catch((error) => (console.log(error.toString())))
          commande.prestataire = prestaId.value
    }, [0]);

    console.log(prestaId.value);
    
    
    
    const getServices = () => {
  
    if (loading) {
        return  <View style = {{ alignItems: 'center', width }} >
            <WaveIndicator  animating interaction />
        </View>

    } else {
        
        return(
            prestaData.service.map((item)=>{
                const getId = ()=> {
                    console.log();
                    getServiceId(item.id)
                   
                    navigation.navigate('Cloth',)
                }
                return (
                    <TouchableOpacity key={item.id} onPress = { () => getId() } style = {{ alignItems: 'center', height: 180, width: width / 2.3, backgroundColor: '#fff', borderRadius: 9, paddingTop: 8, marginLeft: 8 }} > 
                        <Image style = {{height: 85, width: 85 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                        <Text style = {{ display: 'flex', fontSize: 20, fontWeight: 'bold', marginTop: 20 }} >{item.nom_service}</Text>
                        <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >Min 12 hours</Text>
                    </TouchableOpacity>
                )
            })
        )
        
    }

      
  }
    
    
    return(
        <View style = {{ flex: 1, alignItems: 'center', backgroundColor: '#f1f1f5',  }} >
            <StatusBar backgroundColor="lightgray" />
            <View style = {{ height: height / 3.8, width, paddingHorizontal: 7, backgroundColor: '#ffff',marginBottom: 25, borderBottomLeftRadius: 15, borderBottomRightRadius: 15  }} >
                <View style= {{ width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16,  paddingLeft: 5 }} >
                    <Image style = {{ width: 43, height: 56, }}  source = { require('../assets/images/PHARMO_PRESS.png') }  />
                    <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 10 }} >
                        <View style = {{ height: 7, width: 7, backgroundColor: 'dodgerblue', borderRadius: 10, marginHorizontal: 3 }} ></View>
                        <View style = {{ height: 7, width: 7, backgroundColor: 'gray', borderRadius: 10, marginHorizontal: 3 }} ></View>
                        <View style = {{ height: 7, width: 7, backgroundColor: 'gray', borderRadius: 10, marginHorizontal: 3 }} ></View>
                    </View>
                </View>
                <View style = {{ width, heigth: 130, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 30, }} >
                    <View style = {{ }} >
                        <Text style = {{ display: 'flex', fontSize: 22, fontWeight: '900' }} >Bienvenue Sur</Text>
                        <TouchableOpacity onPress = { () => navigation.navigate('Pressing') } style = {{ marginRight: 75 }} >
                            <Text style = {{ display: 'flex', textAlign: 'center', paddingVertical: 5, color: 'dodgerblue',  fontSize: 18 }} >
                                Pharmony<Text style = {{ color: '#4f95cb' }} > Pressing</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image style = {{height: 76, width: 75 }} source = {require('../icons/pressing/001-washing-machine.png')} />
                    </View>
                </View>
            </View>
            <View style = {{ alignItems: 'flex-start', justifyContent: 'flex-start', width, marginBottom:12 }} >
                <Text style = {{ display: 'flex', color: '#97989f', fontSize: 20, paddingLeft: 10 }} >Services</Text>
               
            </View>
            <View style = {{ height: height / 4.1,  }} >
                <ScrollView  horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle={{ alignItems: 'center' }} style = {{ width, paddingHorizontal: 10, height: 190 }} >
                    {getServices()}
                </ScrollView>
            </View>
            
            
        </View>
    )
}

function mapStateToProps(state){
    return{
        prestaId: state.getId,
        prestataire: state.reducerPresta,
        commande: state.commande
    }
}

function mapDispatchToProps(dispatch){
    return{
        dispatch,
        ...bindActionCreators({
            getServiceId
        }, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)