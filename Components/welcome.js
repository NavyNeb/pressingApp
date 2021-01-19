import React, { useRef } from "react";
import { FlatList, View, Text, TouchableOpacity, Animated, Dimensions, Image, ScrollView } from "react-native";
import scrollData from "./api";


const {width, height} = Dimensions.get('screen')

export default function Welcome({navigation}){
    const scrollX = useRef( new Animated.Value(0)).current;
    const ITEM_SIZE = width * 0.72
    const spacer = (width - ITEM_SIZE) /2.5
    return(
        <View style = {{ width, flex: 1, backgroundColor: '#f1f1f5', paddingHorizontal: 10, }} >
            <ScrollView>
            <View style = {{ alignItems: 'center', backgroundColor: 'transparent', justifyContent: 'center', height: height / 1.4, justifyContent: 'center', marginVertical: 30 }} >
                <Animated.FlatList
                        data={[{id: 'left-spacer'}, ...scrollData, {id: 'right-spacer'}]}
                        horizontal
                        snapToInterval={ITEM_SIZE}
                        decelerationRate={0}
                        scrollEventThrottle={16}
                        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center',  }}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        onScroll= {Animated.event(
                            [{nativeEvent: {contentOffset: {x: scrollX}}}],
                            {useNativeDriver: true}
                        )}
                        keyExtractor = { (item) =>  item.id }
                        renderItem = { ({item, index}) => {  
                            if (!item.text) {
                                return <View style = {{ width: spacer, backgroundColor: 'magenta'}} />
                            } 
                            const inputRange = [
                                (index - 2) * ITEM_SIZE,
                                (index - 1) * ITEM_SIZE,
                                (index) * ITEM_SIZE
                            ]
                            const translateY = scrollX.interpolate({
                                inputRange,
                                outputRange: [0, -50, 0]
                            })
                        return   (
                           
                               <View style = {{ width: ITEM_SIZE }} >
                                    <Animated.View style = {{ marginHorizontal: 10, padding: 20, alignItems: 'center', backgroundColor: 'whitesmoke', borderRadius: 34, transform: [{translateY: translateY}] }} >
                                            <Image source = {item.image} style = {{ height: height / 2.3, width: 190, borderRadius: 20 }} />
                                            <View  style ={{ marginTop: 15 }} >
                                                <Text style = {{ color: '#9a99a2', fontSize: 25, fontFamily: 'Cookies-Reg' }} >
                                                    {item.text}
                                                </Text>
                                            </View>
                                    </Animated.View>
                                   
                                </View>
                         
                        ) }
                    }  
                    />
            </View>
            
            </ScrollView>
            <TouchableOpacity onPress = { () => navigation.navigate('login') } style = {{ width, borderRadius: 15, height: height / 12, backgroundColor: 'dodgerblue', position: 'absolute',bottom: 0, alignSelf: 'center', justifyContent: 'center' }} >
                <Text style = {{ alignSelf:'center', color: 'whitesmoke', fontSize: 17 }} >
                    Continue to Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}