import React from 'react'
import { View, Text, TouchableOpacity, TextInput,  } from 'react-native'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { modifyTarif, saveModif } from "../../Action/setTarifAc";

const setTarif = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

function mapStateToProps(state) {
    return{
        setOrders: state.Order
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
        modifyTarif, saveModif
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(setTarif)
