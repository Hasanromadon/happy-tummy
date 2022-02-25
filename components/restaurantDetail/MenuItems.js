import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from "react-native-bouncy-checkbox";
const foods = [{
  title: 'Nasi Padang',
  description: 'Nasi padang paket Hemat 10rb',
  price: 10000,
  image: 'https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/klikanggaran/2021/03/Warkop-Starbak.jpeg',
},
{
  title: 'Pempek',
  description: 'Pempek mantap dengan cuko dan mie',
  price: 20000,
  image: 'https://www.piknikdong.com/wp-content/uploads/2021/02/Cara-Membuat-Pempek.jpg',
},
{
  title: 'Soto Kuning',
  description: 'Soto Kuning enak dengan daging',
  price: 10000,
  image: 'https://assets.pikiran-rakyat.com/crop/0x42:708x698/x/photo/2020/11/23/3157132529.jpg',
},
{
  title: 'Soto Kuning',
  description: 'Soto Kuning enak dengan daging',
  price: 10000,
  image: 'https://assets.pikiran-rakyat.com/crop/0x42:708x698/x/photo/2020/11/23/3157132529.jpg',
},
]


const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  }
});


const MenuItems = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, i) => (
        <View key={i} >
          <View style={styles.menuItem}>
            <BouncyCheckbox onPress={() => { }}
              fillColor="green"
              iconStyle={{
                borderColor: 'lightgray',
                borderRadius: 0,
              }}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation='vertical' />
        </View>
      ))}
    </ScrollView>
  );
};


const FoodInfo = ({ food }) => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.title}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ food }) => (
  <View>
    <Image source={{ uri: food.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
  </View>
)

export default MenuItems;