import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')

function Articles({id, name, category, type, servId}) {
    const [add, setAdd] = useState(false)

    const addArticleToService = () => {
        return (
            fetch('http://pressingliveapp.herokuapp.com/viewset/service/' + servId.toString() + '/',{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                
                        article: [Number(id)]
                  
                })
            })
            .then(()=> {
                fetch('http://192.168.100.207:8000/viewset/prestataire/3/')
                .then((response)=> response.json())
                .then((responseJson) => console.log('Yeah', responseJson))
            })
            .catch((err) => alert(err.toString()))
        )
    }
    return (
        <View style = {{ height: height / 11.2, marginBottom: 3.2, backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
          <View style = {{ height: height / 16 }} >
            <Text style = {{ fontSize: 16, color: '#000', fontWeight:'bold' }} >
                {name}({type})
            </Text>
            <Text style = {{ fontSize: 18, color: 'lightgray', fontWeight:'bold' }} >
                Category: {category}
            </Text>
          </View>
          <>
            {
                add ? ( 
                    <TouchableOpacity onPress = { () => { setAdd(!add) } } style = {{backgroundColor: 'lightgray', height: height / 16, width: width / 3.8, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#9a81d2', borderRadius: 16 }} >
                        <Text style = {{ fontSize: 24, color: '#fff', fontWeight:'bold' }} >
                            Added
                        </Text>
                </TouchableOpacity>
                 ) : ( 
                    <TouchableOpacity onPress = { () => { setAdd(!add); addArticleToService(); } } style = {{ width: width / 3.8, height: height / 16, backgroundColor: '#9a81d2', justifyContent: 'center', alignItems: 'center', borderRadius: 16 }} >
                    <Text style = {{ fontSize: 24, color: '#fff', fontWeight:'bold' }} >
                        Add
                    </Text>
                </TouchableOpacity>
                  )
            }
          </>  
        </View>
    )
}

export default Articles
