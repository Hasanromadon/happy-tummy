import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabs from '../components/home/BottomTabs';
require('dotenv').config();

const YELP_API_KEY = process.env.YELP_API_KEY;


export default Home = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('newyork');
    const [activeTab, setActiveTab] = useState('Delivery');

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(json.businesses.filter((businesses) =>
                    businesses.transactions.includes(activeTab.toLowerCase())
                )));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);
    return (
        <SafeAreaProvider style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: '#fff', padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <Categories />
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantItems navigation={navigation} restaurantData={restaurantData} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaProvider>
    )
}

