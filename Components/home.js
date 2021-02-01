import React,{ useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image, StatusBar, ScrollView, ActivityIndicator } from 'react-native';
import { Entypo, Ionicons, Feather } from '@expo/vector-icons';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getPrestataire from "../Action/prestataire";
import { getServiceId } from "../Action/getServiceId";
import { WaveIndicator } from "react-native-indicators";

const { width, height } = Dimensions.get('screen')
function Home( {navigation, prestaId, getServiceId} ){
    const [prestaData, setPrestaData] = useState([])
    const [loading, setLoading] = useState(true)
    const [serviceId, setSerciveId] = useState(0)
    useEffect(() => {
          fetch('http://pressingliveapp.herokuapp.com/viewset/prestataire/' + prestaId.value)
          .then((response)=> response.json())
          .then((responseJson) => {
            setPrestaData(responseJson)
            setLoading(false)
          } )
          .catch((error) => (console.log(error.toString())))
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
                <View style= {{ width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16 }} >
                    <Text style = {{ display: 'flex', fontSize: 26, fontWeight: 'bold' }} >LOGO  </Text>
                    <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 10 }} >
                        <View style = {{ height: 7, width: 7, backgroundColor: 'dodgerblue', borderRadius: 10, marginHorizontal: 3 }} ></View>
                        <View style = {{ height: 7, width: 7, backgroundColor: 'gray', borderRadius: 10, marginHorizontal: 3 }} ></View>
                        <View style = {{ height: 7, width: 7, backgroundColor: 'gray', borderRadius: 10, marginHorizontal: 3 }} ></View>
                    </View>
                </View>
                <View style = {{ width, heigth: 130, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 30, }} >
                    <View style = {{ }} >
                        <Text style = {{ display: 'flex', fontSize: 22, fontWeight: '900' }} >Order Title</Text>
                        <TouchableOpacity onPress = { () => navigation.navigate('Offers') } style = {{ marginRight: 75 }} >
                            <Text style = {{ display: 'flex', textAlign: 'center', paddingVertical: 5, color: 'dodgerblue' }} >
                                View all offers <Text style = {{ fontSize: 30 }} >→</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image style = {{height: 100, width: 100 }} source = {require('../icons/pressing/001-washing-machine.png')} />
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
            <View style = {{ width, paddingHorizontal: 10, marginVertical: 8 }} >
                <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Text style = {{ display: 'flex', color: '#97989f' }} >Your Active Orders (counter)</Text>
                    <TouchableOpacity><Text style= {{ color: 'dodgerblue', fontSize: 18 }} >Past Orders</Text></TouchableOpacity>
                </View>
                <View>
                <ScrollView>
                    <TouchableOpacity activeOpacity = {0.2} style = {{ height: 75, backgroundColor: '#fff', marginVertical: 5, paddingHorizontal: 10 , borderRadius: 6, marginBottom: 5, marginTop: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'  }} >
                        <View style = {{ height: 65, width: 65, alignItems: 'center', justifyContent: 'center', marginVertical: 5, marginRight: 10, borderRadius: 35, borderWidth: 2, borderTopColor: 'dodgerblue', borderColor: '#e1e2ed' }}> 
                            <Image style = {{height: 25, width: 25, }} source = {require('../icons/pressing/order_history.png')} />
                        </View>
                        <View style = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around',  paddingHorizontal: 6 }} >
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%',  }} >
                                <Text style = {{ display: 'flex', fontSize: 16, fontWeight: 'bold' }} >Order No: 22029275</Text>
                                <Text  style = {{ display: 'flex', }}>8655XAF</Text>
                            </View>
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%' , }} >
                                <Text style = {{ display: 'flex', color: 'dodgerblue', fontSize: 12 }} >Order Confirmed</Text>
                                <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >23 June 2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{ height: 75, backgroundColor: '#fff', marginVertical: 5, paddingHorizontal: 10, borderRadius: 6, marginBottom: 5, marginTop: 7, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'  }} >
                        <View style = {{ height: 65, width: 65, alignItems: 'center', justifyContent: 'center', marginVertical: 5, marginRight: 10, borderRadius: 35, borderWidth: 2, borderTopColor: 'dodgerblue', borderColor: '#e1e2ed' }}> 
                            <Image style = {{height: 25, width: 25, }} source = {require('../icons/pressing/order_history.png')} />
                        </View>
                        <View style = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around', paddingHorizontal: 6 }} >
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%',  }} >
                                <Text style = {{ display: 'flex', fontSize: 16, fontWeight: 'bold' }} >Order No: 22029275</Text>
                                <Text>8655XAF</Text>
                            </View>
                            <View style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '74%' , }} >
                                <Text style = {{ display: 'flex', color: 'dodgerblue', fontSize: 12 }} >Order Confirmed</Text>
                                <Text style = {{ display: 'flex', color: '#97989f', fontSize: 12 }} >23 June 2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                   
                </ScrollView>
            </View>
            </View>
        </View>
    )
}

function mapStateToProps(state){
    return{
        prestaId: state.getId,
        prestataire: state.reducerPresta
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