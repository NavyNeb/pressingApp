import React,{useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions  } from "react-native";
const { width, height } = Dimensions.get('screen')

const TarifComponemt = ( { name, price, id } ) => {
    const [tarif_price, setTarif_price] = useState('')
    const [create, setCreate] = useState(false)
    const [ editable, setEditable ] = useState(false)
    const [modify, setModify] = useState(false)
    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')

    const update = (id) => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/tarif/' + id.toString() + '/',{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prix: tarif_price
                })
            })
            .then(()=> {
                fetch('http://192.168.100.207:8000/viewset/prestataire/3/')
                .then((response)=> response.json())
                .then((responseJson) => console.log('Yeah', responseJson))
            })
            .catch((err) => alert(err.toString()))
        setEditable(false)
    }

    const loadTarifArticles= () =>{
        return(
            fetch('http://pressingliveapp.herokuapp.com/viewset/article/', {
                method: 'POST',
                headres: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idprestataire: 1,
                    idservice: id,
                    prix: tarif_price,
                    article: Name
                })
            })
            
        )
    }
    return (
        <View>
            
            {
                editable ? ( 
                    <View style={{ marginVertical: 4, width: width - 8, borderRadius: 20, height: 130, backgroundColor: '#fff', padding: 10 }} >
                        <Text style = {{ color: '#000', fontSize: 16, fontWeight: 'bold',  }} ></Text>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '90%',marginVertical: 7 }} >
                            <Text style = {{ color: '#000', fontSize: 16, fontWeight: 'bold',  }} >Modify Price to: </Text>
                            <TextInput onChangeText = { (val) => setTarif_price(val) } placeholder = {price + 'XAF'} style = {{ width: "60%", backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 15, textAlign: 'center' , height: height / 20, marginLeft: 20 }} />
                        </View>
                        <TouchableOpacity onPress = { () => { update(id); setModify(false) }}  style = {{ width: "65%", height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'dodgerblue',borderRadius: 15, alignSelf: 'center', marginVertical: 5 }} >
                            <Text style = {{ color: '#fff', fontSize: 18, fontWeight: '800',  }} >
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                   
                 ) : create ? (
                    <View style={{ marginVertical: 4, width: width - 8, borderRadius: 20, height: 200, backgroundColor: '#fff', padding: 10 }} >
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%',marginVertical: 7 }} >
                            <Text style = {{ color: '#000', fontSize: 16, fontWeight: 'bold', width: '35%'  }} > Article name </Text>
                            <TextInput multiline onChangeText = { (val) => setName(val) } placeholder = 'Chemise Jean' style = {{ width: "55%", backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 15, textAlign: 'center' , height: height / 20, marginLeft: 20 }} />
                        </View>
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%',marginVertical: 7 }} >
                            <Text style = {{ color: '#000', fontSize: 16, fontWeight: 'bold', width: '35%' }} > Price </Text>
                            <TextInput onChangeText = { (val) => setPrice(val) } placeholder = '3500XAF' style = {{ width: "55%", backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 15, textAlign: 'center' , height: height / 20, marginLeft: 20 }} />
                        </View>
                        <TouchableOpacity onPress = { () => { loadTarifArticles(); setCreate(false);} } style = {{ position:'absolute', bottom: 20, width: "45%", height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9a81d2',borderRadius: 15, alignSelf: 'center', marginVertical: 5 }} >
                            <Text style = {{ color: '#fff', fontSize: 18, fontWeight: 'bold',  }} >
                                Create Article
                            </Text>
                        </TouchableOpacity>
                    </View>
                 ) : (
                    <View style={{ marginVertical: 4, width: width - 8, borderRadius: 20, height: 150, backgroundColor: '#fff', padding: 10 }} >
                        <View style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%',marginVertical: 7 }} >
                            <Text style = {{ color: '#000', fontSize: 16, fontWeight: 'bold',  }} > {name} </Text>
                            <TextInput editable = {false} onChangeText = { (val) => setTarif_price(val) } placeholder = { price.toString() + 'XAF' } style = {{ width: "60%", backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 15, textAlign: 'center' , height: height / 20, marginLeft: 20 }} />
                        </View>
                        <View style = {{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', marginTop: 10 }} >
                            <TouchableOpacity onPress = { () => setEditable(true) } style = {{ width: "45%", height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9a81d2',borderRadius: 15, alignSelf: 'center', marginVertical: 5 }} >
                                <Text style = {{ color: '#fff', fontSize: 18, fontWeight: 'bold',  }} >
                                    Modify
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => setCreate(true) } style = {{ width: "45%", height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9a81d2',borderRadius: 15, alignSelf: 'center', marginVertical: 5 }} >
                                <Text style = {{ color: '#fff', fontSize: 18, fontWeight: 'bold',  }} >
                                    Create 
                                </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                 )
            }
            
           
        </View>
    )
}

export default TarifComponemt
