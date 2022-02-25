import React, { useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'


const Categories = () => {
    const items = [
        {
            image: require("../../assets/images/shopping-bag.png"),
            text: "Pick-up",
        },
        {
            image: require("../../assets/images/soft-drink.png"),
            text: "Soft Drinks",
        },
        {
            image: require("../../assets/images/bread.png"),
            text: "Bakery Items",
        },
        {
            image: require("../../assets/images/fast-food.png"),
            text: "Fast Foods",
        },
        {
            image: require("../../assets/images/deals.png"),
            text: "Deals",
        },
        {
            image: require("../../assets/images/coffee.png"),
            text: "Coffee & Tea",
        },
        {
            image: require("../../assets/images/desserts.png"),
            text: "Desserts",
        },
    ];
    return (
        <View style={{ marginTop: 5, paddingVertical: 10, paddingLeft: 20, backgroundColor: 'white' }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {items.map((item, i) => (
                    <View key={i} style={{
                        alignItems: 'center',
                        marginRight: 30
                    }}>
                        <Image source={item.image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontSize: 13, fontWeight: '900', color: 'black'
                        }}>{item.text}</Text>
                    </View>

                ))}
            </ScrollView>
        </View>
    )
}



export default Categories