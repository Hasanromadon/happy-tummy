import { View, Text, Image } from 'react-native';
import React from 'react';

// const name = "Beachside Bar";
// const image_url = "https://img.freepik.com/free-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?size=626&ext=jpg";
// const description = "Thai • Confort Food • $$ • 🎫 • 4 ⭐ (2913+)";
const yelpRestaurantInfo = {
    name: "Beachside Bar",
    image: "https://img.freepik.com/free-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?size=626&ext=jpg",
    price: "$5",
    reviews: "1500",
    rating: 4.5,
    categories: [{ title: 'Thai' }, { title: 'Comfort Food' }]
}


const About = (props) => {
    console.log(props);
    const { name, image, price, reviews, rating, categories } = props.route.params;
    const formatedCategories = categories.map(cat => cat.title).join(' • ');
    const description = `${formatedCategories} ${price ? " • " + price : ''} • 🎫 • ${rating} ⭐ (${reviews}+)  `

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{
        width: '100%',
        height: 180
    }} />
);

const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        color: 'black',
        marginTop: 10,
        marginHorizontal: 15,
    }}>
        {props.title}
    </Text>
)
const RestaurantDescription = (props) => (
    <Text style={{
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        marginTop: 10,
        marginHorizontal: 15,
    }}>
        {props.description}
    </Text>
)

export default About;