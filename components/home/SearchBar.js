import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({ cityHandler }) => {

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <GooglePlacesAutocomplete placeholder='Search'
                query={{ key: 'AIzaSyDu_twVD16ei_oNtsqa8VeamHLnQilyzMg' }}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    const city = data.description.split(',')[0];
                    cityHandler(city);
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                        color: 'black'

                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        fontWeight: '700',
                        marginTop: 7,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                        color: 'black'
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name='location-sharp' size={24} style={{ color: 'black' }} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 8,
                        backgroundColor: '#fff',
                        padding: 9,
                        borderRadius: 30,
                        alignItems: 'center',
                    }}>
                        <AntDesign name='clockcircle' size={11} style={{ marginRight: 10, color: 'black' }} />
                        <Text style={{ color: 'black' }}>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}



export default SearchBar