import React, { useRef } from "react";
import { FlatList, View, Text, TouchableOpacity, Animated, Dimensions, Image } from "react-native";
import scrollData from "./api";

const {width, height} = Dimensions.get('screen')

export default function Welcome(){
    return(
        <View style = {{ width, flex: 1, backgroundColor: '#f1f1f5', paddingHorizontal: 10, paddingTop: 30 }} >
            <Text style = {{ alignSelf: 'center',  }} >
                Hello from welcome
            </Text>
           <View>
            <FlatList
                    data={scrollData}
                    horizontal
                    scrollEventThrottle= {15}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={
                    
                    }
                    keyExtractor = { (item) =>  item.id }
                    renderItem = { ({item}) => (
                        <View style = {{ padding: 10, width }} >
                            <Image source = {item.image} style = {{  }} />
                        </View>
                    ) }
                />
           </View>
        </View>
    )
}