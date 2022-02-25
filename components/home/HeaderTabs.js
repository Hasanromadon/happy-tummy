import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


const HeaderTabs = ({ activeTab, setActiveTab }) => {

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton text="Delivery" activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton text="Pickup" activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    )
}

const HeaderButton = (props) => {
    return (
        <TouchableOpacity style={
            { backgroundColor: props.activeTab === props.text ? 'black' : 'white', borderRadius: 30, paddingVertical: 6, paddingHorizontal: 16 }
        } onPress={() => props.setActiveTab(props.text)}>
            <Text style={{ color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: '900' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}


export default HeaderTabs