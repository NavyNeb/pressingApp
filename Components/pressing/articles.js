import React, {useState} from 'react'
import {ScrollView, View, Text, TouchableOpacity, Dimensions, TextInput, Animated } from "react-native";
import {Picker} from '@react-native-picker/picker';

const {width, height} = Dimensions.get('screen')

function Article() {

    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [desc, setDesc] = useState('')
    const [mark, setMark] = useState('')
    const [category, setCategory] = useState(0)
    const [type, setType] = useState(0)
    const animate = useState(new Animated.Value(0))[0]

    const submitAddArticle = () => {
        fetch('http://pressingliveapp.herokuapp.com/viewset/article/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                couleur: color,
                taille: size,
                marque: mark,
                description: desc,
                quantite: 0,
                categorie_article: category,
                type_article: type
            })
        })
    }
    return (
        <View style = {{ width, height, backgroundColor: '#f1f1f5', paddingTop: 30 }} >
            <View style = {{ height: 50, backgroundColor: '#fff', justifyContent:'center', elevation: 2, borderBottomEndRadius: 35, borderBottomStartRadius: 35}} >
               <Text style = {{ textAlign: 'center', fontSize: 24, color: '#9a81d2' }} >
                   Pressing Name
               </Text>
           </View>

           <View style = {{ backgroundColor: '#fff', flex: 1 , marginTop: 10, width , alignSelf: 'center', borderRadius: 35, elevation: 2, alignItems: 'center', paddingTop: 20 }} >
               <Text style = {{ color: '#9a81d2', fontSize: 17, marginBottom: 10 }} > Ajouter un nouvel article </Text>
                <View style = {{ height: height / 1.6, width: width - 20, backgroundColor: '#f1f1f5', borderRadius: 15, justifyContent : 'space-between', alignItems: 'center', flexDirection: 'row', }} >
                    <ScrollView contentContainerStyle= {{ padding: 10, alignItems: 'center', justifyContent: 'center' }} style = {{ backgroundColor: '#f1f1f5', height: '100%', borderRadius: 15, }} >
                        <View style = {{ width: "100%", height: height / 13, backgroundColor: '#fff', alignSelf: 'center',  borderRadius: 20, borderBottomWidth: 2, borderBottomColor: '#9a81d2', marginBottom: 15, elevation: 1 }} >
                            <TextInput onChangeText = { (val) => setDesc(val)  }  placeholderTextColor='lightgray' placeholder = 'Description' style={{ width: '100%', height: '100%',  borderRadius: 20, fontSize: 18,textAlign: 'center' }} />
                        </View>
                        <View style = {{ width: "100%", height: height / 13, backgroundColor: '#fff', alignSelf: 'center',  borderRadius: 20, borderBottomWidth: 2, borderBottomColor: '#9a81d2', marginBottom: 15, elevation: 1 }} >
                            <TextInput onChangeText = { (val) => setSize(val)  } placeholderTextColor='lightgray' placeholder = 'Size' style={{ width: '100%', height: '100%',  borderRadius: 20, fontSize: 18,textAlign: 'center' }} />
                        </View>
                        <View style = {{ width: "100%", height: height / 13, backgroundColor: '#fff', alignSelf: 'center',  borderRadius: 20, borderBottomWidth: 2, borderBottomColor: '#9a81d2', marginBottom: 15, elevation: 1 }} >
                            <TextInput onChangeText = { (val) => setColor(val)  } placeholderTextColor='lightgray' placeholder = 'Color' style={{ width: '100%', height: '100%',  borderRadius: 20, fontSize: 18,textAlign: 'center' }} />
                        </View>
                        <View style = {{ width: "100%", height: height / 13, backgroundColor: '#fff', alignSelf: 'center',  borderRadius: 20, borderBottomWidth: 2, borderBottomColor: '#9a81d2', marginBottom: 15, elevation: 1 }} >
                            <TextInput onChangeText = { (val) => setMark(val)  } placeholderTextColor='lightgray' placeholder = 'Mark' style={{ width: '100%', height: '100%',  borderRadius: 20, fontSize: 18,textAlign: 'center' }} />
                        </View>
                        <Picker 
                             selectedValue={category}
                             mode={'dropdown'}
                             style={{ height: height / 13, width:'100%', borderWidth: 1, borderRadius: 20, marginBottom: 15, elevation: 2, backgroundColor: '#fff', borderRadius: 15 }}
                             itemStyle={{ alignSelf: 'center', paddingVertical: 20, fontSize: 18 }}
                             onValueChange={(itemValue, itemIndex) => { 
                                 setCategory(itemValue)
                             }}
                        >
                            <Picker.Item label="Homme" value="1" />
                            <Picker.Item label="Femme" value="2" />
                            <Picker.Item label="Enfant" value="5" />
                            <Picker.Item label="Bebe" value="6" />
                            </Picker>
                            <Picker 
                             selectedValue={type}
                             mode={'dropdown'}
                             style={{ height: height / 13, width:'100%', borderWidth: 1, borderRadius: 20, marginHorizontal: 5, elevation: 2, backgroundColor: '#fff', borderRadius: 15 }}
                             itemStyle={{ alignSelf: 'center', paddingVertical: 20, fontSize: 18 }}
                             onValueChange={(itemValue, itemIndex) => { 
                                 setType(itemValue)
                             }}
                        >
                            <Picker.Item label="Jean" value="1" />
                            <Picker.Item label="Satin" value="2" />
                            <Picker.Item label="Cotton Tissue" value="3" />
                            <Picker.Item label="Cotton Gown" value="4" />
                            <Picker.Item label="Cotton Glace" value="5" />
                            </Picker>
                    </ScrollView>
                </View>
                <TouchableOpacity onPress = { () => submitAddArticle() } style = {{ width: width-30, backgroundColor: '#9a81d2', height:65, marginTop: 50, borderRadius: 24, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style = {{ color: '#fff', fontSize: 24, marginBottom: 10 }} > <Text style = {{  color: 'white', textAlign: 'center', width: 50 , fontSize: 34, borderRadius: 35 , marginBottom: 10 }} ></Text>  Add Article </Text>
                </TouchableOpacity>
                
               
               
           </View>
        </View>
    )
}

export default Article
