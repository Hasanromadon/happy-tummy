import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ViewCart = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 999,
            bottom: 20,
        }}>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    padding: 13,
                    borderRadius: 30,
                    width: 300,
                }}>
                    <Text style={{ color: 'white', }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewCart;